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

import { useProductsView } from '../hooks/use-products-view';
import {
  GENDER_OPTIONS,
  CATEGORY_OPTIONS,
  RATING_OPTIONS,
  PRICE_OPTIONS,
  COLOR_OPTIONS,
} from '../../../constants';

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

      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap-reverse',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          sx={{
            my: 1,
            gap: 1,
            flexShrink: 0,
            display: 'flex',
          }}
        >
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

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
    </DashboardContent>
  );
}
