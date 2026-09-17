import type { SxProps, Theme } from '@mui/material/styles';

import { menuItemClasses } from '@mui/material/MenuItem';

export const nameBoxStyle: SxProps<Theme> = {
  gap: 2,
  display: 'flex',
  alignItems: 'center',
};

export const checkIconStyle: SxProps<Theme> = { color: 'success.main' };

export const menuListStyle: SxProps<Theme> = {
  p: 0.5,
  gap: 0.5,
  width: 140,
  display: 'flex',
  flexDirection: 'column',
  [`& .${menuItemClasses.root}`]: {
    px: 1,
    gap: 2,
    borderRadius: 0.75,
    [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
  },
};

export const deleteMenuItemStyle: SxProps<Theme> = { color: 'error.main' };
