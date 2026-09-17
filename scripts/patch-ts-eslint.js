const fs = require('fs');
const path = require('path');

const targets = [
  'typescript-eslint/dist/index.js',
  '@typescript-eslint/eslint-plugin/dist/index.js',
  '@typescript-eslint/parser/dist/index.js',
];

for (const target of targets) {
  const targetPath = path.join(__dirname, '../node_modules', target);
  if (fs.existsSync(targetPath)) {
    let content = fs.readFileSync(targetPath, 'utf8');
    content = content.replace('if (versionMajor >= 7) {', 'if (false) {');
    fs.writeFileSync(targetPath, content, 'utf8');
    console.log('Successfully patched ' + target);
  }
}

const sharedPath = path.join(__dirname, '../node_modules/@typescript-eslint/typescript-estree/dist/create-program/shared.js');
if (fs.existsSync(sharedPath)) {
  let content = fs.readFileSync(sharedPath, 'utf8');
  
  const extMap = {
    Cjs: '".cjs"',
    Cts: '".cts"',
    Jsx: '".jsx"',
    Js: '".js"',
    Mjs: '".mjs"',
    Mts: '".mts"',
    Tsx: '".tsx"',
    Ts: '".ts"',
    Dcts: '".d.cts"',
    Dmts: '".d.mts"',
    Dts: '".d.ts"'
  };

  for (const [key, value] of Object.entries(extMap)) {
    const regex = new RegExp(`ts\\.Extension\\.${key}\\b`, 'g');
    content = content.replace(regex, value);
  }
  
  fs.writeFileSync(sharedPath, content, 'utf8');
  console.log('Successfully patched shared.js to replace ts.Extension!');
}

const eslintReactPath = path.join(__dirname, '../node_modules/eslint-plugin-react/lib/util/version.js');
if (fs.existsSync(eslintReactPath)) {
  let content = fs.readFileSync(eslintReactPath, 'utf8');
  content = content.replace(
    /contextOrFilename\.getFilename\(\)/g,
    "(typeof contextOrFilename.getFilename === 'function' ? contextOrFilename.getFilename() : contextOrFilename.filename || contextOrFilename.physicalFilename || process.cwd())"
  );
  fs.writeFileSync(eslintReactPath, content, 'utf8');
  console.log('Successfully patched eslint-plugin-react!');
}
