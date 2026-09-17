import type { SxProps, Theme } from '@mui/material/styles';

export const chartStyle: SxProps<Theme> = {
  my: 6,
  mx: 'auto',
  width: { xs: 240, xl: 260 },
  height: { xs: 240, xl: 260 },
};

export const dividerStyle: SxProps<Theme> = { borderStyle: 'dashed' };

export const chartLegendsStyle: SxProps<Theme> = { p: 3, justifyContent: 'center' };
