import type { SxProps, Theme } from '@mui/material/styles';

import { menuItemClasses } from '@mui/material/MenuItem';

export const itemBoxStyle = (selected: boolean, sx?: SxProps<Theme>): SxProps<Theme> => [
  () => ({
    pl: 2,
    pr: 1,
    py: 1.5,
    display: 'flex',
    ...(selected && {
      color: 'text.disabled',
      textDecoration: 'line-through',
    }),
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const controlStyle: SxProps<Theme> = { flexGrow: 1, m: 0 };

export const menuListStyle: SxProps<Theme> = {
  p: 0.5,
  gap: 0.5,
  display: 'flex',
  flexDirection: 'column',
  [`& .${menuItemClasses.root}`]: {
    pl: 1,
    pr: 2,
    gap: 2,
    borderRadius: 0.75,
    [`&.${menuItemClasses.selected}`]: { bgcolor: 'action.selected' },
  },
};

export const dividerStyle: SxProps<Theme> = { borderStyle: 'dashed' };

export const deleteMenuItemStyle: SxProps<Theme> = { color: 'error.main' };
