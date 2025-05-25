
import fs from 'fs-extra';
import path from 'path';

const repleaceContent = (str: string, filePath: string): string => {
  return str
    .replace(/#include\s+([^\s]+)/ig, (_: string, $1: string) => {
      const includeFilePath = path.resolve(path.dirname(filePath), $1);
      const content = fs.readFileSync(includeFilePath, 'utf8');
      return repleaceContent(content, includeFilePath);
    })
    .replace(/\$include\(['"](.+?)['"]\)/ig, (_: string, $1: string) => {
      const includeFilePath = path.resolve(path.dirname(filePath), $1);
      const content = fs.readFileSync(includeFilePath, 'utf8');
      return `${JSON.stringify(repleaceContent(content, includeFilePath))}`;
    });
};

const preprocessor = ({ fileContent, filePath }: {fileContent: string; filePath: string; }) => {
  return repleaceContent(fileContent, filePath);
}
export default preprocessor;
