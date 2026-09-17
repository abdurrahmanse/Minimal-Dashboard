import type { SxProps, Theme } from '@mui/material/styles';

export const chartStyle: SxProps<Theme> = {
  my: 1,
  mx: 'auto',
  width: 300,
  height: 300,
};

export const dividerStyle: SxProps<Theme> = { borderStyle: 'dashed' };

export const chartLegendsStyle: SxProps<Theme> = { p: 3, justifyContent: 'center' };
