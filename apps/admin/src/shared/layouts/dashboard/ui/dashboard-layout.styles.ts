import type { Breakpoint, SxProps, Theme } from '@mui/material/styles';

import { layoutClasses } from '../../core/classes';

export const alertInfoStyle: SxProps<Theme> = { 
  display: 'none', 
  borderRadius: 0 
};

export const menuButtonStyle = (layoutQuery: Breakpoint): SxProps<Theme> => [
  (theme) => ({ 
    mr: 1, 
    ml: -1, 
    [theme.breakpoints.up(layoutQuery)]: { display: 'none' } 
  })
];

export const boxHeaderRightStyle: SxProps<Theme> = { 
  display: 'flex', 
  alignItems: 'center', 
  gap: { xs: 0, sm: 0.75 } 
};

export const layoutSectionStyle = (layoutQuery: Breakpoint, sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    [`& .${layoutClasses.sidebarContainer}`]: {
      [theme.breakpoints.up(layoutQuery)]: {
        pl: 'var(--layout-nav-vertical-width)',
        transition: theme.transitions.create(['padding-left'], {
          easing: 'var(--layout-transition-easing)',
          duration: 'var(--layout-transition-duration)',
        }),
      },
    },
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];
