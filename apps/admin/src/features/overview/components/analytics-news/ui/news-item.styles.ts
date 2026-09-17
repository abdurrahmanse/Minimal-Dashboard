import type { SxProps, Theme } from '@mui/material/styles';

export const itemBoxStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    py: 2,
    px: 3,
    gap: 2,
    display: 'flex',
    alignItems: 'center',
    borderBottom: `dashed 1px ${theme.vars.palette.divider}`,
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const avatarStyle: SxProps<Theme> = { width: 48, height: 48, flexShrink: 0 };

export const secondaryTextStyle: SxProps<Theme> = { mt: 0.5 };

export const timeBoxStyle: SxProps<Theme> = { flexShrink: 0, typography: 'caption', color: 'text.disabled' };
