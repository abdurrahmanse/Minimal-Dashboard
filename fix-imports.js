const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'apps/admin/src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  { from: /src\/components/g, to: 'src/shared/components' },
  { from: /src\/layouts/g, to: 'src/shared/layouts' },
  { from: /src\/utils/g, to: 'src/shared/utils' },
  { from: /src\/theme/g, to: 'src/core/theme' },
  { from: /src\/routes/g, to: 'src/core/routes' },
  { from: /src\/_mock/g, to: 'src/shared/mocks' },
  { from: /src\/sections\/user/g, to: 'src/features/users' },
  { from: /src\/sections\/product/g, to: 'src/features/products' },
  { from: /src\/sections\//g, to: 'src/features/' },
];

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    for (const r of replacements) {
      content = content.replace(r.from, r.to);
    }
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed', filePath);
    }
  }
});
