const base="https://evisa.imigrasi.go.id";
const pageUrl=base+"/web/visa-selection";
const dataUrl=base+"/web/visa-selection/data";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const common={"user-agent":ua,accept:"application/json,text/javascript,*/*;q=0.01","x-requested-with":"XMLHttpRequest",referer:pageUrl};

const page=await fetch(pageUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});
const cookies=typeof page.headers.getSetCookie==="function"
  ? page.headers.getSetCookie().map(v=>v.split(";")[0]).join("; ")
  : (page.headers.get("set-cookie")??"").split(",").map(v=>v.split(";")[0]).join("; ");
console.log("MISO_EVISA_SESSION_COOKIE_PRESENT="+Boolean(cookies));

async function post(data){
 const body=new URLSearchParams(data);
 const r=await fetch(dataUrl,{
  method:"POST",
  headers:{...common,"content-type":"application/x-www-form-urlencoded; charset=UTF-8",...(cookies?{cookie:cookies}:{})},
  body
 });
 const text=await r.text();
 let json=null;
 try{json=JSON.parse(text)}catch{}
 return {status:r.status,json,text:text.slice(0,3000)};
}

const countryId="0e63775f-7370-4203-9ff4-8a7ce1b83da5";
const parentId="d5bc2168-2f4a-4396-8eae-3d895a0508e9";

const step0=await post({parent_id:parentId,step:"0"});
console.log("MISO_EVISA_STEP0="+JSON.stringify({status:step0.status,body:step0.json??step0.text}));
const activities=Array.isArray(step0.json?.data)?step0.json.data:[];
const tourismActivity=activities.find(x=>/Tourism, Family Visit, and Transit/i.test(String(x?.name??"")))
  ?? activities.find(x=>/Tourism|Family Visit|Transit/i.test(String(x?.name??"")));
console.log("MISO_EVISA_TOURISM_ACTIVITY="+JSON.stringify(tourismActivity??null));

if(tourismActivity?.id){
 const step1=await post({activity_id:String(tourismActivity.id),country_id:countryId,step:"1"});
 console.log("MISO_EVISA_STEP1="+JSON.stringify({status:step1.status,body:step1.json??step1.text}));
 const visas=Array.isArray(step1.json?.data)?step1.json.data:[];
 const b1=visas.find(x=>/^B1$/i.test(String(x?.index??x?.visa_index??x?.code??x?.name??"")))
   ?? visas.find(x=>/\bB1\b/i.test(JSON.stringify(x)));
 console.log("MISO_EVISA_B1="+JSON.stringify(b1??null));
 if(b1?.id){
  const step2=await post({visa_type_id:String(b1.id),step:"2"});
  const compact=step2.json?{
    status:step2.json.status,
    visaType:step2.json.data?.visaType,
    limitedStay:step2.json.data?.limitedStay
  }:step2.text;
  console.log("MISO_EVISA_STEP2="+JSON.stringify({status:step2.status,body:compact}));
 }
}
