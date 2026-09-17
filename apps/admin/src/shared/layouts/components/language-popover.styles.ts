import type { SxProps, Theme } from '@mui/material/styles';

import { menuItemClasses } from '@mui/material/MenuItem';

export const flagStyle: SxProps<Theme> = { 
  width: 26, 
  height: 20, 
  borderRadius: 0.5, 
  objectFit: 'cover' 
};

export const menuListStyle: SxProps<Theme> = {
  p: 0.5,
  gap: 0.5,
  width: 160,
  minHeight: 72,
  display: 'flex',
  flexDirection: 'column',
  [`& .${menuItemClasses.root}`]: {
    px: 1,
    gap: 2,
    borderRadius: 0.75,
    [`&.${menuItemClasses.selected}`]: {
      bgcolor: 'action.selected',
      fontWeight: 'fontWeightSemiBold',
    },
  },
};

export const iconButtonStyle = (open: boolean, sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    p: 0,
    width: 40,
    height: 40,
    ...(open && { bgcolor: theme.vars.palette.action.selected }),
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];
