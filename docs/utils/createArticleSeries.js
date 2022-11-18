import path from "path";
import fs from "fs";

function createArticleSeries() {
  const absolutePath = path.join(`${__dirname}/../articles`);
  const articleFolders = fs.readdirSync(absolutePath);
  return articleFolders.map((folderName, index) => {
    return {
      pathName: articleFolders[index],
      navName: folderName.replace(/^\d./i, ""),
    };
  });
}

export default createArticleSeries;
