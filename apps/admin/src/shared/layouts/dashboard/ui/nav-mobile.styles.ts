import type { SxProps, Theme } from '@mui/material/styles';

import { drawerClasses } from '@mui/material/Drawer';

export const drawerStyle = (sx?: SxProps<Theme>): SxProps<Theme> => ({
  [`& .${drawerClasses.paper}`]: {
    pt: 2.5,
    px: 2.5,
    overflow: 'unset',
    width: 'var(--layout-nav-mobile-width)',
    ...sx,
  },
});
