import type { SxProps, Theme } from '@mui/material/styles';

export const itemRootStyle = (color: string, size: number, gap: number, slotPropsItemSx?: SxProps<Theme>): SxProps<Theme> => [
  {
    '--item-color': color,
    '--item-size': `${size}px`,
    '--item-gap': `${-gap}px`,
  },
  ...(Array.isArray(slotPropsItemSx) ? slotPropsItemSx : [slotPropsItemSx]),
];
