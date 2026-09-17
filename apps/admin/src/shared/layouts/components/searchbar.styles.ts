import type { SxProps, Theme } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

export const boxContainerStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    px: { xs: 3, md: 5 },
    boxShadow: theme.vars.customShadows.z8,
    height: {
      xs: 'var(--layout-header-mobile-height)',
      md: 'var(--layout-header-desktop-height)',
    },
    backdropFilter: `blur(6px)`,
    WebkitBackdropFilter: `blur(6px)`,
    backgroundColor: varAlpha(theme.vars.palette.background.defaultChannel, 0.8),
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const searchIconStyle: SxProps<Theme> = { 
  color: 'text.disabled' 
};

export const inputStyle: SxProps<Theme> = { 
  fontWeight: 'fontWeightBold' 
};
