import type { SxProps, Theme } from '@mui/material/styles';

export const logoStyle: SxProps<Theme> = { position: 'fixed', top: 20, left: 20 };

export const containerStyle: SxProps<Theme> = {
  py: 10,
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const titleStyle: SxProps<Theme> = { mb: 2 };

export const descriptionStyle: SxProps<Theme> = { color: 'text.secondary', maxWidth: 480, textAlign: 'center' };

export const imageStyle: SxProps<Theme> = {
  width: 320,
  height: 'auto',
  my: { xs: 5, sm: 10 },
};
