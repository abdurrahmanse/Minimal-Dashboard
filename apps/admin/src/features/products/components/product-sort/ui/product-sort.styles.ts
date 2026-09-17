import type { SxProps, Theme } from '@mui/material/styles';

import { menuItemClasses } from '@mui/material/MenuItem';

export const textStyle: SxProps<Theme> = { color: 'text.secondary' };

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
