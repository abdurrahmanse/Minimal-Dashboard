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

export const otpBoxStyle: SxProps<Theme> = { display: 'flex', gap: 1.5, mb: 3, justifyContent: 'center', width: '100%' };
export const otpInputStyle: SxProps<Theme> = {
  width: 48,
  height: 48,
  '& input': { textAlign: 'center', p: 0, height: 48 },
};

export const submitButtonStyle: SxProps<Theme> = { mb: 3 };
export const resendTextStyle: SxProps<Theme> = { textAlign: 'center', width: '100%' };
export const resendLinkStyle: SxProps<Theme> = { cursor: 'pointer' };

export const returnLinkStyle: SxProps<Theme> = {
  mt: 3,
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
};
