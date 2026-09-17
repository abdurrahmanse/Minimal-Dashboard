import type { SxProps, Theme } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

export const avatarStyle = (latestPostLarge: boolean, latestPost: boolean): SxProps<Theme> => ({
  left: 24,
  zIndex: 9,
  bottom: -24,
  position: 'absolute',
  ...((latestPostLarge || latestPost) && {
    top: 24,
  }),
});

export const titleStyle = (latestPostLarge: boolean, latestPost: boolean): SxProps<Theme> => ({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  ...(latestPostLarge && { typography: 'h5', height: 60 }),
  ...((latestPostLarge || latestPost) && {
    color: 'common.white',
  }),
});

export const infoBoxStyle: SxProps<Theme> = {
  mt: 3,
  gap: 1.5,
  display: 'flex',
  flexWrap: 'wrap',
  color: 'text.disabled',
  justifyContent: 'flex-end',
};

export const infoItemStyle = (latestPostLarge: boolean, latestPost: boolean): SxProps<Theme> => ({
  display: 'flex',
  ...((latestPostLarge || latestPost) && {
    opacity: 0.64,
    color: 'common.white',
  }),
});

export const iconStyle: SxProps<Theme> = { mr: 0.5 };

export const coverStyle: SxProps<Theme> = {
  top: 0,
  width: 1,
  height: 1,
  objectFit: 'cover',
  position: 'absolute',
};

export const dateStyle = (latestPostLarge: boolean, latestPost: boolean): SxProps<Theme> => ({
  mb: 1,
  color: 'text.disabled',
  ...((latestPostLarge || latestPost) && {
    opacity: 0.48,
    color: 'common.white',
  }),
});

export const shapeStyle = (latestPostLarge: boolean, latestPost: boolean): SxProps<Theme> => ({
  left: 0,
  width: 88,
  zIndex: 9,
  height: 36,
  bottom: -16,
  position: 'absolute',
  color: 'background.paper',
  ...((latestPostLarge || latestPost) && { display: 'none' }),
});

export const containerBoxStyle = (latestPostLarge: boolean, latestPost: boolean): SxProps<Theme> => (theme) => ({
  position: 'relative',
  pt: 'calc(100% * 3 / 4)',
  ...((latestPostLarge || latestPost) && {
    pt: 'calc(100% * 4 / 3)',
    '&:after': {
      top: 0,
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      bgcolor: varAlpha(theme.vars.palette.grey['900Channel'] || '', 0.72),
    },
  }),
  ...(latestPostLarge && {
    pt: {
      xs: 'calc(100% * 4 / 3)',
      sm: 'calc(100% * 3 / 4.66)',
    },
  }),
});

export const contentBoxStyle = (latestPostLarge: boolean, latestPost: boolean): SxProps<Theme> => (theme) => ({
  p: theme.spacing(6, 3, 3, 3),
  ...((latestPostLarge || latestPost) && {
    width: 1,
    bottom: 0,
    position: 'absolute',
  }),
});
