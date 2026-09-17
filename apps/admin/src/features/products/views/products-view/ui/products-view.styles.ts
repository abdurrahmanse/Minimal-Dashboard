import type { SxProps, Theme } from '@mui/material/styles';

export const titleStyle: SxProps<Theme> = { mb: 5 };

export const containerBoxStyle: SxProps<Theme> = {
  mb: 5,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap-reverse',
  justifyContent: 'flex-end',
};

export const filterSortBoxStyle: SxProps<Theme> = {
  my: 1,
  gap: 1,
  flexShrink: 0,
  display: 'flex',
};

export const paginationStyle: SxProps<Theme> = { mt: 8, mx: 'auto' };
