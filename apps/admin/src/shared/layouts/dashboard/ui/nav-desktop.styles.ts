import type { Breakpoint, SxProps, Theme } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

export const boxContainerStyle = (layoutQuery: Breakpoint, sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    pt: 2.5,
    px: 2.5,
    top: 0,
    left: 0,
    height: 1,
    display: 'none',
    position: 'fixed',
    flexDirection: 'column',
    zIndex: 'var(--layout-nav-zIndex)',
    width: 'var(--layout-nav-vertical-width)',
    borderRight: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
    [theme.breakpoints.up(layoutQuery)]: {
      display: 'flex',
    },
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];
