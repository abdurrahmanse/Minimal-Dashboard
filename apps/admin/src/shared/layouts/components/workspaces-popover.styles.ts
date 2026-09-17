import type { SxProps, Theme } from '@mui/material/styles';

import { menuItemClasses } from '@mui/material/MenuItem';
import { varAlpha } from 'minimal-shared/utils';

export const avatarStyle: SxProps<Theme> = { 
  width: 24, 
  height: 24, 
  borderRadius: '50%' 
};

export const buttonBaseStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    pl: 2,
    py: 3,
    gap: 1.5,
    pr: 1.5,
    width: 1,
    borderRadius: 1.5,
    textAlign: 'left',
    justifyContent: 'flex-start',
    bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const boxContainerStyle: SxProps<Theme> = {
  gap: 1,
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  typography: 'body2',
  fontWeight: 'fontWeightSemiBold',
};

export const chevronIconStyle: SxProps<Theme> = { 
  color: 'text.disabled' 
};

export const menuListStyle: SxProps<Theme> = {
  p: 0.5,
  gap: 0.5,
  width: 260,
  display: 'flex',
  flexDirection: 'column',
  [`& .${menuItemClasses.root}`]: {
    p: 1.5,
    gap: 1.5,
    borderRadius: 0.75,
    [`&.${menuItemClasses.selected}`]: {
      bgcolor: 'action.selected',
      fontWeight: 'fontWeightSemiBold',
    },
  },
};

export const menuItemSpanStyle: SxProps<Theme> = { 
  flexGrow: 1 
};
