import fs from "fs/promises";

(async () => {
  const buildDate = Date.now();
  const jsonContent = JSON.stringify({ buildDate });
  await fs.writeFile("./data/meta.json", jsonContent, "utf8");
  console.log("Latest build date and time updated in meta.json file");
})().catch(console.log);