const fs=require("fs");const zlib=require("zlib");const crypto=require("crypto");
const b64=[0,1,2].map(i=>fs.readFileSync("stats.zlib.b64."+i,"utf8").trim()).join("");
const buf=zlib.inflateSync(Buffer.from(b64,"base64"));
const h=crypto.createHash("sha256").update(buf).digest("hex");
if(h!=="368de3a3bd07550f89932f82eefeec6a3eb42feb30e039c0be25412d032a5b86")throw new Error("sha mismatch "+h);
fs.writeFileSync("stats.jpg",buf);console.log("wrote",buf.length,h);
