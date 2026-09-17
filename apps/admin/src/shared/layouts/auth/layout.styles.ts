import type { Breakpoint, CSSObject, SxProps, Theme } from '@mui/material/styles';

export const alertInfoStyle: SxProps<Theme> = { 
  display: 'none', 
  borderRadius: 0 
};

export const boxRightAreaStyle: SxProps<Theme> = { 
  display: 'flex', 
  alignItems: 'center', 
  gap: { xs: 1, sm: 1.5 } 
};

export const linkHelpStyle: SxProps<Theme> = { 
  typography: 'subtitle2' 
};

export const headerSectionStyle = (layoutQuery: Breakpoint, sx?: SxProps<Theme>): SxProps<Theme> => [
  { position: { [layoutQuery]: 'fixed' } },
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const mainSectionStyle = (layoutQuery: Breakpoint, sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    alignItems: 'center',
    p: theme.spacing(3, 2, 10, 2),
    [theme.breakpoints.up(layoutQuery)]: {
      justifyContent: 'center',
      p: theme.spacing(10, 0, 10, 0),
    },
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const backgroundStyles = (): CSSObject => ({
  zIndex: 1,
  opacity: 0.24,
  width: '100%',
  height: '100%',
  content: "''",
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: 'url(/assets/background/overlay.jpg)',
});

export const layoutSectionStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    position: 'relative',
    '&::before': backgroundStyles(),
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];
