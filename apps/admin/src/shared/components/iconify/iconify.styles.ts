import type { SxProps, Theme } from '@mui/material/styles';

export const iconRootStyle = (width: number | string, height?: number | string, sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    width,
    flexShrink: 0,
    height: height ?? width,
    display: 'inline-flex',
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];
