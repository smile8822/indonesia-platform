const base="https://evisa.imigrasi.go.id";
const pageUrl=base+"/web/visa-selection";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const r=await fetch(pageUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});
const html=await r.text();

function options(id){
 const m=html.match(new RegExp('<select\\b([^>]*\\bid=["\\\']'+id+'["\\\'][^>]*)>([\\s\\S]*?)<\\/select>','i'));
 if(!m)return [];
 return [...m[2].matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi)].map(o=>({
  value:o[1].match(/\bvalue=["']([^"']*)["']/i)?.[1]??"",
  text:o[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()
 }));
}
const targets={
 korea:options("selectCountry").filter(x=>/REPUBLIC OF KOREA/i.test(x.text)),
 general:options("selectParentActivity").filter(x=>/General, Family, or Social/i.test(x.text)),
 tourism:options("selectVisa").filter(x=>/Tourism, Family Visit, and Transit/i.test(x.text)),
};
console.log("MISO_EVISA_TARGET_IDS="+JSON.stringify(targets));

const inline=[...html.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).join("\n");
const lines=inline.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
const picked=[];
for(let i=0;i<lines.length;i++){
 if(/step\s*:\s*["']?[1234]|web_visa_selection_data|selectVisa.*change|selectStay.*change|selectActivity.*change|selectParentActivity.*change|buttonDetail.*click|buttonModalDetail.*click/i.test(lines[i])){
   picked.push(lines.slice(Math.max(0,i-2),Math.min(lines.length,i+7)).join(" ").replace(/\s+/g," "));
 }
}
console.log("MISO_EVISA_FLOW_COMPACT="+JSON.stringify([...new Set(picked)].slice(0,30)));
