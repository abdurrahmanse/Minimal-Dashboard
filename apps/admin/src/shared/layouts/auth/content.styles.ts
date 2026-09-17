import type { SxProps, Theme } from '@mui/material/styles';

export const boxContentStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    py: 5,
    px: 3,
    width: 1,
    zIndex: 2,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'var(--layout-auth-content-width)',
    bgcolor: theme.vars.palette.background.default,
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];
