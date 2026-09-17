import type { SxProps, Theme } from '@mui/material/styles';

export const labelStyle: SxProps<Theme> = {
  zIndex: 9,
  top: 16,
  right: 16,
  position: 'absolute',
  textTransform: 'uppercase',
};

export const imgStyle: SxProps<Theme> = {
  top: 0,
  width: 1,
  height: 1,
  objectFit: 'cover',
  position: 'absolute',
};

export const priceSaleStyle: SxProps<Theme> = {
  color: 'text.disabled',
  textDecoration: 'line-through',
};

export const imageBoxStyle: SxProps<Theme> = { pt: '100%', position: 'relative' };

export const contentStackStyle: SxProps<Theme> = { p: 3 };

export const infoBoxStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
