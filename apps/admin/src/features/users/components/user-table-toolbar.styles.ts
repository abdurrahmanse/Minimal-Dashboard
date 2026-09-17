import type { SxProps, Theme } from '@mui/material/styles';

export const toolbarStyle = (numSelected: number): SxProps<Theme> => (theme) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  p: theme.spacing(0, 1, 0, 3),
  ...(numSelected > 0 && {
    color: 'primary.main',
    bgcolor: 'primary.lighter',
  }),
});

export const inputStyle: SxProps<Theme> = { maxWidth: 320 };

export const iconStyle: SxProps<Theme> = { color: 'text.disabled' };
