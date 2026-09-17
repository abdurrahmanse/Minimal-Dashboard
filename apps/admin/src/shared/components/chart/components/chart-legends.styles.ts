import type { SxProps, Theme } from '@mui/material/styles';

export const itemWrapStyle = (color: string, wrapperProps?: any, wrapperSx?: SxProps<Theme>): SxProps<Theme> => [
  {
    '--icon-color': color,
    ...wrapperProps,
  },
  ...(Array.isArray(wrapperSx) ? wrapperSx : [wrapperSx]),
];
