const base="https://evisa.imigrasi.go.id";
const selectionUrl=base+"/web/visa-selection";
const generateUrl=base+"/web/generate";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const page=await fetch(selectionUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});
const jar=new Map();
const set=typeof page.headers.getSetCookie==="function"?page.headers.getSetCookie():(page.headers.get("set-cookie")?[page.headers.get("set-cookie")]:[]);
for(const raw of set){const first=String(raw).split(";")[0],eq=first.indexOf("=");if(eq>0)jar.set(first.slice(0,eq).trim(),first.slice(eq+1).trim());}
const cookie=[...jar.entries()].map(([k,v])=>k+"="+v).join("; ");
async function gen(name,param=""){
 const r=await fetch(generateUrl,{method:"POST",headers:{"user-agent":ua,accept:"application/json,text/javascript,*/*;q=0.01","x-requested-with":"XMLHttpRequest",referer:selectionUrl,"content-type":"application/x-www-form-urlencoded; charset=UTF-8",cookie},body:new URLSearchParams({name,param})});
 const text=await r.text();let json=null;try{json=JSON.parse(text)}catch{}
 return {status:r.status,body:json??text};
}
for(const name of ["web_upload_passport_add","web_application_add_step_2","web_application_add_step_3","web_application_add_step_4"]){
 console.log("MISO_EVISA_ROUTE_"+name+"="+JSON.stringify(await gen(name)));
}
