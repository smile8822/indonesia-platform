const base="https://evisa.imigrasi.go.id";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const visaId="4eb7326f-ddfb-4e61-a24a-fb02adceb67f";
const stayId="3dc4013d-e9af-44bf-89c0-82cba92563c3";
const activityId="f0c05fe2-f8d6-4bf1-904c-9fa5a694162f";
const selectionUrl=base+"/web/visa-selection";
const page=await fetch(selectionUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});
const cookies=typeof page.headers.getSetCookie==="function"
 ? page.headers.getSetCookie().map(v=>v.split(";")[0]).join("; ")
 : (page.headers.get("set-cookie")??"").split(",").map(v=>v.split(";")[0]).join("; ");

const step1Url=base+"/web/application_add/visa/"+visaId+"/"+stayId+"/"+activityId+"/step_1";
const r=await fetch(step1Url,{redirect:"follow",headers:{"user-agent":ua,accept:"text/html,*/*",referer:selectionUrl,...(cookies?{cookie:cookies}:{})}});
const html=await r.text();
console.log("MISO_EVISA_APPLICATION_STEP1_STATUS="+r.status);
console.log("MISO_EVISA_APPLICATION_STEP1_URL="+r.url);
console.log("MISO_EVISA_APPLICATION_STEP1_TITLE="+(html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()??""));

const inputs=[...html.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)].map(m=>{
 const tag=m[1].toLowerCase(),a=m[2];
 return {
  tag,
  type:a.match(/\btype=["']([^"']+)["']/i)?.[1]??(tag==="input"?"text":null),
  name:a.match(/\bname=["']([^"']+)["']/i)?.[1]??null,
  id:a.match(/\bid=["']([^"']+)["']/i)?.[1]??null,
  accept:a.match(/\baccept=["']([^"']+)["']/i)?.[1]??null,
  required:/\brequired(?:\s|>|=)/i.test(a),
 };
}).filter(x=>x.name||x.id);
console.log("MISO_EVISA_APPLICATION_STEP1_FIELDS="+JSON.stringify(inputs.slice(0,180)));

const forms=[...html.matchAll(/<form\b([^>]*)>/gi)].map(m=>({
 action:m[1].match(/\baction=["']([^"']*)["']/i)?.[1]??null,
 method:m[1].match(/\bmethod=["']([^"']*)["']/i)?.[1]??null,
 id:m[1].match(/\bid=["']([^"']+)["']/i)?.[1]??null,
 enctype:m[1].match(/\benctype=["']([^"']+)["']/i)?.[1]??null,
}));
console.log("MISO_EVISA_APPLICATION_STEP1_FORMS="+JSON.stringify(forms));

const scripts=[...html.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).join("\n").replace(/\s+/g," ");
for(const marker of ["passport","photo","upload","step_2","application_add","ajax","buttonNext","buttonSubmit"]){
 const i=scripts.toLowerCase().indexOf(marker.toLowerCase());
 if(i>=0) console.log("MISO_EVISA_APPLICATION_CTX_"+marker+"="+scripts.slice(Math.max(0,i-1800),Math.min(scripts.length,i+3500)));
}
