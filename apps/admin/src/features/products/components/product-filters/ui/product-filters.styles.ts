import type { SxProps, Theme } from '@mui/material/styles';

export const ratingTypographyStyle: SxProps<Theme> = { mb: 2 };

export const ratingItemStyle = (isSelected: boolean): SxProps<Theme> => ({
  mb: 1,
  gap: 1,
  ml: -1,
  p: 0.5,
  display: 'flex',
  borderRadius: 1,
  cursor: 'pointer',
  typography: 'body2',
  alignItems: 'center',
  '&:hover': { opacity: 0.48 },
  ...(isSelected && {
    bgcolor: 'action.selected',
  }),
});

export const paperStyle: SxProps<Theme> = { width: 280, overflow: 'hidden' };

export const headerBoxStyle: SxProps<Theme> = {
  py: 2,
  pl: 2.5,
  pr: 1.5,
  display: 'flex',
  alignItems: 'center',
};

export const titleStyle: SxProps<Theme> = { flexGrow: 1 };

export const stackStyle: SxProps<Theme> = { p: 3 };
