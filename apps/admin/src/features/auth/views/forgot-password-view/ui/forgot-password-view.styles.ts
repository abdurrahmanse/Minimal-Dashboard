import type { SxProps, Theme } from '@mui/material/styles';

export const headerBoxStyle: SxProps<Theme> = {
  gap: 1.5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mb: 5,
};

export const headerSubtitleStyle: SxProps<Theme> = {
  color: 'text.secondary',
  textAlign: 'center',
};

export const formBoxStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
};

export const textFieldStyle: SxProps<Theme> = { mb: 3 };
export const submitButtonStyle: SxProps<Theme> = { mb: 3 };

export const returnLinkStyle: SxProps<Theme> = {
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
};
