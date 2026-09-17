import type { SxProps, Theme } from '@mui/material/styles';

export const headerBoxStyle: SxProps<Theme> = {
  mb: 5,
  display: 'flex',
  alignItems: 'center',
};
export const titleStyle: SxProps<Theme> = { flexGrow: 1 };
export const toolbarBoxStyle: SxProps<Theme> = {
  mb: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
export const paginationStyle: SxProps<Theme> = { mt: 8, mx: 'auto' };
