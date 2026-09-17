import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ColorPreview } from 'src/shared/components/color-utils';
import { Label } from 'src/shared/components/label';
import { fCurrency } from 'src/shared/utils/format-number';

import type { ProductItemProps } from '../types';

import * as styles from './product-item.styles';

export function ProductItem({ product }: { product: ProductItemProps }) {
  const renderStatus = (
    <Label
      variant="inverted"
      color={(product.status === 'sale' && 'error') || 'info'}
      sx={styles.labelStyle}
    >
      {product.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.coverUrl}
      sx={styles.imgStyle}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={styles.priceSaleStyle}
      >
        {product.priceSale && fCurrency(product.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(product.price)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={styles.imageBoxStyle}>
        {product.status && renderStatus}
        {renderImg}
      </Box>

      <Stack spacing={2} sx={styles.contentStackStyle}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>

        <Box sx={styles.infoBoxStyle}>
          <ColorPreview colors={product.colors} />
          {renderPrice}
        </Box>
      </Stack>
    </Card>
  );
}
