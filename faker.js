const fs = require('fs');
const path = require('path');

const args = process.argv.splice(2);
const name = args[0];

let root = './src';
let templateTS = fs.readFileSync(
  path.join(__dirname, './src/__template/index.ts'),
  'utf8',
);
let templateMD = fs.readFileSync(
  path.join(__dirname, './src/__template/index.md'),
  'utf8',
);
let templateTSX = fs.readFileSync(
  path.join(__dirname, './src/__template/demo/index.tsx'),
  'utf8',
);

let contentTS = templateTS.replace(/DEFAULT_NAME/g, name);
let contentMD = templateMD.replace(/DEFAULT_NAME/g, name);
let contentTSX = templateTSX.replace(/DEFAULT_NAME/g, name);

let targetDirPath = path.join(__dirname, root, name); // 主文件夹
let targetFilePathMD = path.join(__dirname, root, name, 'index.md'); // md文件路径
let targetFilePathTS = path.join(__dirname, root, name, 'index.ts'); // md文件路径

let targetDirPathDEMO = path.join(__dirname, `${root}/${name}`, 'demo');
let targetFilePathTSX = path.join(
  __dirname,
  `${root}/${name}/demo`,
  'index.tsx',
); // demo文件夹下的tsx文件路径

if (!fs.existsSync(targetDirPath)) {
  fs.mkdirSync(targetDirPath);
  if (!fs.existsSync(targetDirPathDEMO)) {
    fs.mkdirSync(targetDirPathDEMO);
  }
}

if (!fs.existsSync(targetFilePathTS)) {
  fs.writeFile(targetFilePathTS, contentTS, err => {});
  fs.writeFile(targetFilePathMD, contentMD, err => {});
}
console.log('targetFilePathMD:::', targetFilePathMD);
console.log('targetDirPathDEMO:::', targetDirPathDEMO);
console.log('targetFilePathTSX::', targetFilePathTSX);

if (!fs.existsSync(targetFilePathTSX)) {
  fs.writeFile(targetFilePathTSX, contentTSX, err => {});
}
