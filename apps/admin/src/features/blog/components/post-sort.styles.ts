import type { SxProps, Theme } from '@mui/material/styles';

import { menuItemClasses } from '@mui/material/MenuItem';
import { varAlpha } from 'minimal-shared/utils';

export const iconStyle: SxProps<Theme> = { ml: -0.5 };

export const buttonStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const menuListStyle: SxProps<Theme> = {
  p: 0.5,
  gap: 0.5,
  width: 160,
  display: 'flex',
  flexDirection: 'column',
  [`& .${menuItemClasses.root}`]: {
    px: 1,
    gap: 2,
    borderRadius: 0.75,
    [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
  },
};
