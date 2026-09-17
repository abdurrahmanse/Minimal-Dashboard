import type { SxProps, Theme } from '@mui/material/styles';

export const logoRootStyle = (isSingle: boolean, disabled?: boolean, sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    width: 40,
    height: 40,
    ...(!isSingle && { width: 102, height: 36 }),
    ...(disabled && { pointerEvents: 'none' }),
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];
