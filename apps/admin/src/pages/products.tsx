import { CONFIG } from 'src/config-global';
import { ProductsView } from 'src/features/products/views';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Products - ${CONFIG.appName}`}</title>

      <ProductsView />
    </>
  );
}
