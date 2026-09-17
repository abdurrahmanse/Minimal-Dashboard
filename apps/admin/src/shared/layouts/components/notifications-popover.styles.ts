import type { SxProps, Theme } from '@mui/material/styles';

export const popoverPaperStyle = {
  paper: {
    sx: {
      width: 360,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
  },
};

export const boxHeaderStyle: SxProps<Theme> = {
  py: 2,
  pl: 2.5,
  pr: 1.5,
  display: 'flex',
  alignItems: 'center',
};

export const boxFlexGrowStyle: SxProps<Theme> = { 
  flexGrow: 1 
};

export const typographySubtitleStyle: SxProps<Theme> = { 
  color: 'text.secondary' 
};

export const dividerStyle: SxProps<Theme> = { 
  borderStyle: 'dashed' 
};

export const scrollbarStyle: SxProps<Theme> = { 
  minHeight: 240, 
  maxHeight: { xs: 360, sm: 'none' } 
};

export const listSubheaderStyle: SxProps<Theme> = { 
  py: 1, 
  px: 2.5, 
  typography: 'overline' 
};

export const boxViewAllStyle: SxProps<Theme> = { 
  p: 1 
};

export const listItemButtonStyle = (isUnRead: boolean): SxProps<Theme> => ({
  py: 1.5,
  px: 2.5,
  mt: '1px',
  ...(isUnRead && {
    bgcolor: 'action.selected',
  }),
});

export const avatarStyle: SxProps<Theme> = { 
  bgcolor: 'background.neutral' 
};

export const typographyTimeStyle: SxProps<Theme> = {
  mt: 0.5,
  gap: 0.5,
  display: 'flex',
  alignItems: 'center',
  color: 'text.disabled',
};

export const typographyDescStyle: SxProps<Theme> = { 
  color: 'text.secondary' 
};
