import type { BoxProps } from '@mui/material/Box';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import { RouterLink } from 'src/core/routes/components';
import { Iconify } from 'src/shared/components/iconify';

import * as styles from './product-cart-widget.styles';

// ----------------------------------------------------------------------

type CartIconProps = BoxProps & {
  totalItems: number;
};

export function CartIcon({ totalItems, sx, ...other }: CartIconProps) {
  return (
    <Box
      component={RouterLink}
      href="#"
      sx={styles.cartBoxStyle(sx)}
      {...other}
    >
      <Badge showZero badgeContent={totalItems} color="error" max={99}>
        <Iconify icon="solar:cart-3-bold" width={24} />
      </Badge>
    </Box>
  );
}
