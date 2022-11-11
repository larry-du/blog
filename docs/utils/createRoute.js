import path from "path";
import fs from "fs";

function createRoute(folderName) {
  const extension = ".md";
  const excludeFile = "readme.md";
  const absolutePath = path.join(`${__dirname}/../article`, folderName);

  const linkItem = fs
    .readdirSync(path.join(absolutePath))
    .filter((fileName) => {
      const isExcludeFile = fileName.toLowerCase() !== excludeFile;
      const isNormalFile = fs
        .statSync(path.join(absolutePath, fileName))
        .isFile();
      const isExtMD = path.extname(fileName) === extension;

      return isExcludeFile && isNormalFile && isExtMD;
    })
    .map((fileName) => {
      const navItemName = fileName.replace(/.md/i, "");
      return { text: navItemName, link: `/article/${folderName}/${fileName}` };
    });
  return { text: folderName, children: [...linkItem] };
}

export default createRoute;
