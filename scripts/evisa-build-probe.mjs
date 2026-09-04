const base="https://evisa.imigrasi.go.id";
const selectionUrl=base+"/web/visa-selection";
const dataUrl=base+"/web/visa-selection/data";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const jar=new Map();
function absorb(headers){const xs=typeof headers.getSetCookie==="function"?headers.getSetCookie():(headers.get("set-cookie")?[headers.get("set-cookie")]:[]);for(const raw of xs){const first=String(raw).split(";")[0],i=first.indexOf("=");if(i>0)jar.set(first.slice(0,i),first.slice(i+1));}}
function cookie(){return [...jar].map(([k,v])=>k+"="+v).join("; ");}
const page=await fetch(selectionUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});absorb(page.headers);const home=await page.text();
function opts(id){const m=home.match(new RegExp('<select\\b([^>]*\\bid=["\\\']'+id+'["\\\'][^>]*)>([\\s\\S]*?)<\\/select>','i'));if(!m)return[];return[...m[2].matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi)].map(o=>({id:o[1].match(/value=["']([^"']*)/i)?.[1]??"",name:o[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}));}
async function post(data){const r=await fetch(dataUrl,{method:"POST",headers:{"user-agent":ua,accept:"application/json,*/*","x-requested-with":"XMLHttpRequest",referer:selectionUrl,"content-type":"application/x-www-form-urlencoded; charset=UTF-8",cookie:cookie()},body:new URLSearchParams(data)});absorb(r.headers);return r.json();}
const country=opts("selectCountry").find(x=>/REPUBLIC OF KOREA/i.test(x.name));
const parent=opts("selectParentActivity").find(x=>/General, Family, or Social/i.test(x.name));
const s0=await post({parent_id:parent.id,step:"0"});const act=s0.data.find(x=>/Tourism, Family Visit, and Transit/i.test(x.name));
const s1=await post({activity_id:act.id,country_id:country.id,step:"1"});const b1=s1.data.find(x=>/B1 - Tourist/i.test(x.name));
const s2=await post({visa_type_id:b1.id,step:"2"});const stay=s2.data.limitedStay.find(x=>String(x.value)==="30");
const u=base+"/web/application_add/visa/"+b1.id+"/"+stay.id+"/"+act.id+"/step_1";
const r=await fetch(u,{headers:{"user-agent":ua,accept:"text/html,*/*",referer:selectionUrl,cookie:cookie()}});const html=await r.text();
const scripts=[...html.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).join("\n").replace(/\s+/g," ");
for(const marker of ["skipMRZ = true","skipMRZ=true","scannerEnabled","mrz_payload_data","MRZScanner","upload-passport-add"]){
 const idx=scripts.indexOf(marker);
 console.log("MISO_MRZ_"+marker.replace(/[^A-Za-z0-9]+/g,"_")+"="+(idx>=0?scripts.slice(Math.max(0,idx-2500),Math.min(scripts.length,idx+5000)):"NOT_FOUND"));
}
