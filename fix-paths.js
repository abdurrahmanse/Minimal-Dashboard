const fs = require('fs');
const path = require('path');

function replaceInFile(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  for (const {from, to} of replacements) {
    content = content.replace(from, to);
  }
  fs.writeFileSync(file, content, 'utf8');
}

// Blog
replaceInFile('apps/admin/src/features/blog/views/blog-view.tsx', [
  { from: /\.\.\/post-/g, to: '../components/post-' }
]);

// Overview
replaceInFile('apps/admin/src/features/overview/views/overview-analytics-view.tsx', [
  { from: /\.\.\/analytics-/g, to: '../components/analytics-' }
]);

// Products
replaceInFile('apps/admin/src/features/products/views/products-view.tsx', [
  { from: /\.\.\/product-/g, to: '../components/product-' },
  { from: /setFilters\(\(prevValue\)/g, to: 'setFilters((prevValue: FiltersProps)' }
]);

// Pages
replaceInFile('apps/admin/src/pages/blog.tsx', [{ from: 'src/features/blog/view', to: 'src/features/blog/views' }]);
replaceInFile('apps/admin/src/pages/dashboard.tsx', [{ from: 'src/features/overview/view', to: 'src/features/overview/views' }]);
replaceInFile('apps/admin/src/pages/page-not-found.tsx', [{ from: 'src/features/error', to: 'src/features/error/views' }]);
replaceInFile('apps/admin/src/pages/products.tsx', [{ from: 'src/features/products/view', to: 'src/features/products/views' }]);
replaceInFile('apps/admin/src/pages/sign-in.tsx', [{ from: 'src/features/auth', to: 'src/features/auth/views' }]);

console.log("Done fixing paths.");
