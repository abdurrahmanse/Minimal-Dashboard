import type { SxProps, Theme } from '@mui/material/styles';

export const fabStyle: SxProps<Theme> = {
  zIndex: 999,
  right: 20,
  bottom: 20,
  width: 48,
  height: 48,
  position: 'fixed',
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  '&:hover': {
    bgcolor: 'primary.dark',
  },
};

export const drawerPaperStyle = {
  paper: {
    sx: { width: 280, p: 3 },
  },
};

export const headerBoxStyle: SxProps<Theme> = { 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  mb: 3 
};

export const contentBoxStyle: SxProps<Theme> = { 
  display: 'flex', 
  flexDirection: 'column', 
  gap: 3 
};

export const modeSubtitleStyle: SxProps<Theme> = { 
  mb: 1.5 
};

export const modeBoxStyle: SxProps<Theme> = { 
  display: 'flex', 
  gap: 2 
};

export const modeItemStyle = (isActive: boolean): SxProps<Theme> => [
  (theme) => ({
    flex: 1,
    height: 64,
    cursor: 'pointer',
    borderRadius: 1,
    border: `solid 1px ${theme.vars.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(isActive && {
      borderColor: 'primary.main',
      boxShadow: `0 0 0 1px ${theme.vars.palette.primary.main}`,
    }),
  })
];
