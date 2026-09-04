const base="https://evisa.imigrasi.go.id";
const pageUrl=base+"/web/visa-selection";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const r=await fetch(pageUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});
const html=await r.text();

function selectInfo(id){
  const re=new RegExp('<select\\b([^>]*\\bid=["\\\']'+id+'["\\\'][^>]*)>([\\s\\S]*?)<\\/select>','i');
  const m=html.match(re);
  if(!m)return null;
  return [...m[2].matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi)].map(o=>({
    value:o[1].match(/\bvalue=["']([^"']*)["']/i)?.[1]??"",
    text:o[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(),
    dataGuarantor:o[1].match(/\bdata-guarantor=["']([^"']*)["']/i)?.[1]??null
  }));
}
const country=(selectInfo("selectCountry")??[]).filter(x=>/KOREA|SOUTH KOREA|REPUBLIC OF KOREA/i.test(x.text));
console.log("MISO_EVISA_KOREA_COUNTRY="+JSON.stringify(country));
for(const id of ["selectParentActivity","selectActivity","selectVisaCategory","selectStayDuration","selectVisa","selectStay"]){
  console.log("MISO_EVISA_"+id.toUpperCase()+"="+JSON.stringify(selectInfo(id)));
}

const inline=[...html.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).join("\n");
const lines=inline.split(/\r?\n/);
for(let i=0;i<lines.length;i++){
  if(/web_visa_selection_data|step\s*:|selectVisa|selectStay|selectActivity|selectVisaCategory|selectStayDuration|buttonDetail|buttonModalDetail/i.test(lines[i])){
    const ctx=lines.slice(Math.max(0,i-4),Math.min(lines.length,i+10)).join(" ").replace(/\s+/g," ").trim();
    console.log("MISO_EVISA_FLOW="+ctx.slice(0,5000));
  }
}
