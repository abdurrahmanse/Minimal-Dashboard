import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { DashboardContent } from 'src/shared/layouts/dashboard';
import { _products } from 'src/shared/mocks';

import { CartIcon } from '../../../components/product-cart-widget';
import { ProductFilters } from '../../../components/product-filters';
import { ProductItem } from '../../../components/product-item';
import { ProductSort } from '../../../components/product-sort';
import {
  CATEGORY_OPTIONS,
  COLOR_OPTIONS,
  GENDER_OPTIONS,
  PRICE_OPTIONS,
  RATING_OPTIONS,
} from '../../../constants';
import { useProductsView } from '../hooks/use-products-view';
import * as styles from './products-view.styles';

// ----------------------------------------------------------------------

export function ProductsView() {
  const {
    sortBy,
    openFilter,
    filters,
    canReset,
    handleOpenFilter,
    handleCloseFilter,
    handleSort,
    handleSetFilters,
    handleResetFilter,
  } = useProductsView();

  return (
    <DashboardContent>
      <CartIcon totalItems={8} />

      <Typography variant="h4" sx={styles.titleStyle}>
        Products
      </Typography>
      <Box sx={styles.containerBoxStyle}>
        <Box sx={styles.filterSortBoxStyle}>
          <ProductFilters
            canReset={canReset}
            filters={filters}
            onSetFilters={handleSetFilters}
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
            onResetFilter={handleResetFilter}
            options={{
              genders: GENDER_OPTIONS,
              categories: CATEGORY_OPTIONS,
              ratings: RATING_OPTIONS,
              price: PRICE_OPTIONS,
              colors: COLOR_OPTIONS,
            }}
          />

          <ProductSort
            sortBy={sortBy}
            onSort={handleSort}
            options={[
              { value: 'featured', label: 'Featured' },
              { value: 'newest', label: 'Newest' },
              { value: 'priceDesc', label: 'Price: High-Low' },
              { value: 'priceAsc', label: 'Price: Low-High' },
            ]}
          />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {_products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>

      <Pagination count={10} color="primary" sx={styles.paginationStyle} />
    </DashboardContent>
  );
}
