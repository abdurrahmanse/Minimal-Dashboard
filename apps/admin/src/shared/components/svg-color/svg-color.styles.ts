import type { SxProps, Theme } from '@mui/material/styles';

export const svgRootStyle = (src: string, sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    mask: `url(${src}) no-repeat center / contain`,
    WebkitMask: `url(${src}) no-repeat center / contain`,
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];
