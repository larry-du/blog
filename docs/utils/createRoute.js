import path from "path";
import fs from "fs";

function createRoute(folderName, navigationTarget) {
  const extension = ".md";
  const excludeFile = "readme.md";
  const absolutePath = path.join(`${__dirname}/../articles`, folderName);

  const linkItem = fs
    .readdirSync(path.join(absolutePath))
    .filter((fileName) => {
      const isExcludeFile = fileName.toLowerCase() === excludeFile;
      const isNormalFile = fs
        .statSync(path.join(absolutePath, fileName))
        .isFile();
      const isExtMD = path.extname(fileName) === extension;

      return !isExcludeFile && isNormalFile && isExtMD;
    })
    .map((fileName) => {
      const navItemName = fileName.replace(/.md/i, "");
      switch (navigationTarget) {
        case "nav": {
          return {
            text: navItemName,
            link: `/articles/${folderName}/${fileName}`,
          };
        }
        case "sidebar": {
          return `/articles/${folderName}/${fileName}`;
        }
      }
    });
  return linkItem;
}

export default createRoute;
