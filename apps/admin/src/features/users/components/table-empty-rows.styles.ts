import type { SxProps, Theme } from '@mui/material/styles';

export const rowStyle = (height: number | undefined, emptyRows: number, sx?: SxProps<Theme>): SxProps<Theme> => [
  height ? { height: height * emptyRows } : {},
  ...(Array.isArray(sx) ? sx : [sx]),
];
