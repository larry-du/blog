import path from "path";
import fs from "fs";

function createArticleSeries() {
  const absolutePath = path.join(`${__dirname}/../article`);
  return fs.readdirSync(absolutePath);
}

export default createArticleSeries;
