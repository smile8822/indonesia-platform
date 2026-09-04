const base="https://evisa.imigrasi.go.id";
const selectionUrl=base+"/web/visa-selection";
const dataUrl=base+"/web/visa-selection/data";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const jar=new Map();
function absorb(headers){const set=typeof headers.getSetCookie==="function"?headers.getSetCookie():(headers.get("set-cookie")?[headers.get("set-cookie")]:[]);for(const raw of set){const first=String(raw).split(";")[0],eq=first.indexOf("=");if(eq>0)jar.set(first.slice(0,eq).trim(),first.slice(eq+1).trim());}}
function cookie(){return [...jar.entries()].map(([k,v])=>k+"="+v).join("; ");}
const page=await fetch(selectionUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});absorb(page.headers);
async function post(data){const r=await fetch(dataUrl,{method:"POST",headers:{"user-agent":ua,accept:"application/json,text/javascript,*/*;q=0.01","x-requested-with":"XMLHttpRequest",referer:selectionUrl,"content-type":"application/x-www-form-urlencoded; charset=UTF-8",cookie:cookie()},body:new URLSearchParams(data)});absorb(r.headers);return r.json();}
const countryId="0e63775f-7370-4203-9ff4-8a7ce1b83da5",parentId="d5bc2168-2f4a-4396-8eae-3d895a0508e9";
const s0=await post({parent_id:parentId,step:"0"});const activity=s0.data.find(x=>/Tourism, Family Visit, and Transit/i.test(x.name));
const s1=await post({activity_id:activity.id,country_id:countryId,step:"1"});const b1=s1.data.find(x=>/B1 - Tourist/i.test(x.name));
const s2=await post({visa_type_id:b1.id,step:"2"});const stay=s2.data.limitedStay.find(x=>String(x.value)==="30")??s2.data.limitedStay[0];
const url=base+"/web/application_add/visa/"+b1.id+"/"+stay.id+"/"+activity.id+"/step_1";
const r=await fetch(url,{headers:{"user-agent":ua,accept:"text/html,*/*",referer:selectionUrl,cookie:cookie()}});absorb(r.headers);const html=await r.text();
const forms=[...html.matchAll(/<form\b([^>]*)>([\s\S]*?)<\/form>/gi)].map(m=>{const a=m[1];return{action:a.match(/\baction=["']([^"']*)["']/i)?.[1]??null,method:a.match(/\bmethod=["']([^"']*)["']/i)?.[1]??null,id:a.match(/\bid=["']([^"']+)["']/i)?.[1]??null,enctype:a.match(/\benctype=["']([^"']+)["']/i)?.[1]??null,text:m[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim().slice(0,2500)}});console.log("MISO_EVISA_STEP1_FORMS="+JSON.stringify(forms));
const scripts=[...html.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).join("\n").replace(/\s+/g," ");
for(const marker of ["passport-attachment","picture","step_2","formData","ajax","submit","application_add"]){const i=scripts.toLowerCase().indexOf(marker.toLowerCase());if(i>=0)console.log("MISO_EVISA_STEP1_CTX_"+marker.replace(/[^a-z0-9]+/gi,"_")+"="+scripts.slice(Math.max(0,i-2000),Math.min(scripts.length,i+5000)));}
