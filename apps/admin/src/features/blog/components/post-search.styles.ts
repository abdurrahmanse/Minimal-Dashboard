import type { SxProps, Theme } from '@mui/material/styles';

import { autocompleteClasses } from '@mui/material/Autocomplete';

export const autocompleteStyle: SxProps<Theme> = { width: 280 };

export const paperStyle = (sx?: SxProps<Theme>): SxProps<Theme> => ({
  width: 320,
  [`& .${autocompleteClasses.option}`]: {
    typography: 'body2',
  },
  ...sx,
});

export const iconStyle: SxProps<Theme> = { ml: 1, width: 20, height: 20, color: 'text.disabled' };
