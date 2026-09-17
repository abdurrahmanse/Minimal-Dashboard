import type { SxProps, Theme } from '@mui/material/styles';

export const boxContainerStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    mb: 4,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const typographyTitleStyle: SxProps<Theme> = [
  (theme) => ({
    background: `linear-gradient(to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.warning.main})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    color: 'transparent',
  }),
];

export const typographySubtitleStyle: SxProps<Theme> = { 
  color: 'text.secondary', 
  mt: 0.5 
};

export const boxPriceStyle: SxProps<Theme> = { 
  color: 'text.primary' 
};

export const boxImageStyle: SxProps<Theme> = { 
  width: 200, 
  my: 2 
};
