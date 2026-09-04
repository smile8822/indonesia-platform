const base="https://evisa.imigrasi.go.id";
const selectionUrl=base+"/web/visa-selection";
const dataUrl=base+"/web/visa-selection/data";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const page=await fetch(selectionUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});
const cookies=typeof page.headers.getSetCookie==="function"
 ? page.headers.getSetCookie().map(v=>v.split(";")[0]).join("; ")
 : (page.headers.get("set-cookie")??"").split(",").map(v=>v.split(";")[0]).join("; ");
const common={"user-agent":ua,accept:"application/json,text/javascript,*/*;q=0.01","x-requested-with":"XMLHttpRequest",referer:selectionUrl,"content-type":"application/x-www-form-urlencoded; charset=UTF-8",...(cookies?{cookie:cookies}:{})};
async function post(data){
 const r=await fetch(dataUrl,{method:"POST",headers:common,body:new URLSearchParams(data)});
 const text=await r.text(); let json=null; try{json=JSON.parse(text)}catch{}
 return {status:r.status,json,text};
}
const countryId="0e63775f-7370-4203-9ff4-8a7ce1b83da5";
const parentId="d5bc2168-2f4a-4396-8eae-3d895a0508e9";
const step0=await post({parent_id:parentId,step:"0"});
const activity=(step0.json?.data??[]).find(x=>/Tourism, Family Visit, and Transit/i.test(String(x?.name??"")));
const step1=await post({activity_id:String(activity?.id??""),country_id:countryId,step:"1"});
const b1=(step1.json?.data??[]).find(x=>/B1 - Tourist/i.test(String(x?.name??"")));
const step2=await post({visa_type_id:String(b1?.id??""),step:"2"});
const visaType=step2.json?.data?.visaType?.[0]??null;
const stays=step2.json?.data?.limitedStay??[];
const stay=stays.find(x=>String(x?.value??"")==="30")??stays[0]??null;
console.log("MISO_EVISA_CHAIN="+JSON.stringify({
 step0:step0.status,step1:step1.status,step2:step2.status,
 activity,b1,visaType:visaType?{id:visaType.id,index_code:visaType.index_code,duration:visaType.duration,is_login:visaType.is_login,activity:visaType.activity}:null,
 stay
}));
if(!activity?.id||!b1?.id||!stay?.id) process.exit(2);
const mode=visaType?.is_login?"front":"web";
const step1Url=base+"/"+mode+"/application_add/visa/"+b1.id+"/"+stay.id+"/"+activity.id+"/step_1";
const r=await fetch(step1Url,{redirect:"manual",headers:{"user-agent":ua,accept:"text/html,*/*",referer:selectionUrl,...(cookies?{cookie:cookies}:{})}});
const location=r.headers.get("location");
const html=await r.text();
console.log("MISO_EVISA_APPLICATION_STEP1="+JSON.stringify({status:r.status,url:step1Url,location,title:html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()??null}));
if(r.status>=300&&r.status<400){ process.exit(3); }

const fields=[...html.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)].map(m=>{
 const tag=m[1].toLowerCase(),a=m[2];
 return {
  tag,
  type:a.match(/\btype=["']([^"']+)["']/i)?.[1]??(tag==="input"?"text":null),
  name:a.match(/\bname=["']([^"']+)["']/i)?.[1]??null,
  id:a.match(/\bid=["']([^"']+)["']/i)?.[1]??null,
  accept:a.match(/\baccept=["']([^"']+)["']/i)?.[1]??null,
  required:/\brequired(?:\s|>|=)/i.test(a)
 };
}).filter(x=>x.name||x.id);
console.log("MISO_EVISA_APPLICATION_FIELDS="+JSON.stringify(fields.slice(0,220)));
const forms=[...html.matchAll(/<form\b([^>]*)>/gi)].map(m=>({
 action:m[1].match(/\baction=["']([^"']*)["']/i)?.[1]??null,
 method:m[1].match(/\bmethod=["']([^"']*)["']/i)?.[1]??null,
 id:m[1].match(/\bid=["']([^"']+)["']/i)?.[1]??null,
 enctype:m[1].match(/\benctype=["']([^"']+)["']/i)?.[1]??null
}));
console.log("MISO_EVISA_APPLICATION_FORMS="+JSON.stringify(forms));
