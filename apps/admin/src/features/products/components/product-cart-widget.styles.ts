import type { SxProps, Theme } from '@mui/material/styles';

export const cartBoxStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    right: 0,
    top: 112,
    zIndex: 999,
    display: 'flex',
    cursor: 'pointer',
    position: 'fixed',
    color: 'text.primary',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    bgcolor: 'background.paper',
    padding: theme.spacing(1, 3, 1, 2),
    boxShadow: theme.vars.customShadows.dropdown,
    transition: theme.transitions.create(['opacity']),
    '&:hover': { opacity: 0.72 },
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];
