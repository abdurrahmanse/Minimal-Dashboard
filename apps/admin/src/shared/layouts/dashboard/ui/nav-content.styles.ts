import type { SxProps, Theme } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

export const workspacesPopoverStyle: SxProps<Theme> = { 
  my: 2 
};

export const boxNavStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const boxUlStyle: SxProps<Theme> = {
  gap: 0.5,
  display: 'flex',
  flexDirection: 'column',
};

export const listItemButtonStyle = (isActived: boolean): SxProps<Theme> => [
  (theme) => ({
    pl: 2,
    py: 1,
    gap: 2,
    pr: 1.5,
    borderRadius: 0.75,
    typography: 'body2',
    fontWeight: 'fontWeightMedium',
    color: theme.vars.palette.text.secondary,
    minHeight: 44,
    ...(isActived && {
      fontWeight: 'fontWeightSemiBold',
      color: theme.vars.palette.primary.main,
      bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
      '&:hover': {
        bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.16),
      },
    }),
  }),
];

export const boxIconStyle: SxProps<Theme> = { 
  width: 24, 
  height: 24 
};

export const boxTitleStyle: SxProps<Theme> = { 
  flexGrow: 1 
};
