import type { CSSObject, SxProps, Theme } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

export const headerRootStyle = (isOffset: boolean, sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    ...(isOffset && {
      '--color': `var(--offset-color, ${theme.vars.palette.text.primary})`,
    }),
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];

const pauseZindex = { top: -1, bottom: -2 };

export const getPauseStyles = (theme: Theme): CSSObject => ({
  opacity: 0,
  content: '""',
  visibility: 'hidden',
  position: 'absolute',
  transition: theme.transitions.create(['opacity', 'visibility'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
});

export const getBgStyles = (theme: Theme, isOffset: boolean): CSSObject => ({
  ...getPauseStyles(theme),
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: pauseZindex.top,
  backdropFilter: `blur(6px)`,
  WebkitBackdropFilter: `blur(6px)`,
  backgroundColor: varAlpha(theme.vars.palette.background.defaultChannel, 0.8),
  ...(isOffset && {
    opacity: 1,
    visibility: 'visible',
  }),
});

export const getShadowStyles = (theme: Theme, isOffset: boolean): CSSObject => ({
  ...getPauseStyles(theme),
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  margin: 'auto',
  borderRadius: '50%',
  width: `calc(100% - 48px)`,
  zIndex: pauseZindex.bottom,
  boxShadow: theme.vars.customShadows.z8,
  ...(isOffset && { opacity: 0.48, visibility: 'visible' }),
});
