mkdir -p apps/admin/src/features/auth/views
mv apps/admin/src/features/auth/*.tsx apps/admin/src/features/auth/views/
mv apps/admin/src/features/auth/index.ts apps/admin/src/features/auth/views/

mkdir -p apps/admin/src/features/error/views
mv apps/admin/src/features/error/*.tsx apps/admin/src/features/error/views/
mv apps/admin/src/features/error/index.ts apps/admin/src/features/error/views/

mkdir -p apps/admin/src/features/blog/components apps/admin/src/features/blog/views
mv apps/admin/src/features/blog/view/* apps/admin/src/features/blog/views/ 2>/dev/null || true
rm -rf apps/admin/src/features/blog/view
mv apps/admin/src/features/blog/*.tsx apps/admin/src/features/blog/components/

mkdir -p apps/admin/src/features/products/components apps/admin/src/features/products/views
mv apps/admin/src/features/products/view/* apps/admin/src/features/products/views/ 2>/dev/null || true
rm -rf apps/admin/src/features/products/view
mv apps/admin/src/features/products/*.tsx apps/admin/src/features/products/components/

mkdir -p apps/admin/src/features/overview/components apps/admin/src/features/overview/views
mv apps/admin/src/features/overview/view/* apps/admin/src/features/overview/views/ 2>/dev/null || true
rm -rf apps/admin/src/features/overview/view
mv apps/admin/src/features/overview/*.tsx apps/admin/src/features/overview/components/
