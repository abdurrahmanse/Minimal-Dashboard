import type { SxProps, Theme } from '@mui/material/styles';

export const fabStyle: SxProps<Theme> = {
  zIndex: 9,
  right: 20,
  bottom: 80,
  width: 48,
  height: 48,
  position: 'fixed',
  bgcolor: 'grey.800',
};

export const iconStyle: SxProps<Theme> = { '--color': 'white' };
