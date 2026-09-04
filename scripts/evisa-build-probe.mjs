const base = "https://evisa.imigrasi.go.id";
const pageUrl = base + "/web/visa-selection";
const ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const headers = { "user-agent": ua, accept: "text/html,*/*" };

const r = await fetch(pageUrl, { redirect: "follow", headers });
const html = await r.text();

const selects = [...html.matchAll(/<select\b([^>]*)>([\s\S]*?)<\/select>/gi)].map((m) => {
  const attrs=m[1], body=m[2];
  return {
    name: attrs.match(/\bname=["']([^"']+)["']/i)?.[1] ?? null,
    id: attrs.match(/\bid=["']([^"']+)["']/i)?.[1] ?? null,
    options:[...body.matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi)].map(o=>({
      value:o[1].match(/\bvalue=["']([^"']*)["']/i)?.[1] ?? "",
      text:o[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()
    })).slice(0,200)
  }
});
console.log("MISO_EVISA_SELECTS="+JSON.stringify(selects));

const inline=[...html.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
const relevant=inline.filter(s=>/visa|country|passport|activity|length|payment|generate|ajax|fetch\(/i.test(s));
const urls=[];
const routeCalls=[];
for(const s of relevant){
  for(const m of s.matchAll(/(?:url\s*:\s*|fetch\s*\()\s*["'`]([^"'`]+)["'`]/gi)) urls.push(m[1]);
  for(const m of s.matchAll(/routing\.generate\(\s*["'`]([^"'`]+)["'`]\s*,\s*([^\)]*)\)/gi)) routeCalls.push({name:m[1],param:m[2].slice(0,300)});
}
console.log("MISO_EVISA_INLINE_URLS="+JSON.stringify([...new Set(urls)]));
console.log("MISO_EVISA_ROUTE_CALLS="+JSON.stringify(routeCalls));

for (let i=0;i<relevant.length;i++){
  const compact=relevant[i].replace(/\s+/g," ").trim();
  console.log("MISO_EVISA_INLINE_"+i+"="+compact.slice(0,14000));
}
