const base="https://evisa.imigrasi.go.id";
const pageUrl=base+"/web/visa-selection";
const ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const r=await fetch(pageUrl,{headers:{"user-agent":ua,accept:"text/html,*/*"}});
const html=await r.text();
const inline=[...html.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).join("\n").replace(/\s+/g," ");

for(const marker of ["step: '0'","step: \"1\"","step: \"2\"","check_decision_letter","buttonDetail","buttonModalDetail"]){
 const idx=inline.indexOf(marker);
 console.log("MISO_EVISA_CTX_"+marker.replace(/[^a-z0-9]+/gi,"_")+"="+(idx>=0?inline.slice(Math.max(0,idx-1800),Math.min(inline.length,idx+3200)):"NOT_FOUND"));
}
