import type { SxProps, Theme } from '@mui/material/styles';

export const formBoxStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
};

export const textFieldStyle: SxProps<Theme> = { mb: 3 };
export const forgotPasswordLinkStyle: SxProps<Theme> = { mb: 1.5 };

export const headerBoxStyle: SxProps<Theme> = {
  gap: 1.5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  mb: 5,
};

export const headerSubtitleStyle: SxProps<Theme> = {
  color: 'text.secondary',
};

export const headerLinkStyle: SxProps<Theme> = { ml: 0.5 };

export const dividerStyle: SxProps<Theme> = { my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } };
export const dividerTextStyle: SxProps<Theme> = { color: 'text.secondary', fontWeight: 'fontWeightMedium' };

export const socialsBoxStyle: SxProps<Theme> = {
  gap: 1,
  display: 'flex',
  justifyContent: 'center',
};
