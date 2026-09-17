import type { SxProps, Theme } from '@mui/material/styles';

import { menuItemClasses } from '@mui/material/MenuItem';

export const iconButtonStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    p: '2px',
    width: 40,
    height: 40,
    background: (theme) =>
      `conic-gradient(${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}, ${theme.vars.palette.primary.light})`,
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const avatarStyle: SxProps<Theme> = { 
  width: 1, 
  height: 1 
};

export const popoverPaperStyle = {
  paper: {
    sx: { width: 200 },
  },
};

export const boxUserInfoStyle: SxProps<Theme> = { 
  p: 2, 
  pb: 1.5 
};

export const typographyEmailStyle: SxProps<Theme> = { 
  color: 'text.secondary' 
};

export const dividerStyle: SxProps<Theme> = { 
  borderStyle: 'dashed' 
};

export const menuListStyle: SxProps<Theme> = {
  p: 1,
  gap: 0.5,
  display: 'flex',
  flexDirection: 'column',
  [`& .${menuItemClasses.root}`]: {
    px: 1,
    gap: 2,
    borderRadius: 0.75,
    color: 'text.secondary',
    '&:hover': { color: 'text.primary' },
    [`&.${menuItemClasses.selected}`]: {
      color: 'text.primary',
      bgcolor: 'action.selected',
      fontWeight: 'fontWeightSemiBold',
    },
  },
};

export const boxLogoutStyle: SxProps<Theme> = { 
  p: 1 
};
