import type { SxProps, Theme } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

export const trendingBoxStyle: SxProps<Theme> = {
  top: 16,
  gap: 0.5,
  right: 16,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
};

export const trendingTextStyle: SxProps<Theme> = { typography: 'subtitle2' };

export const cardStyle = (color: string, sx?: SxProps<Theme>): SxProps<Theme> => [
  (theme) => ({
    p: 3,
    boxShadow: 'none',
    position: 'relative',
    color: `${color}.darker`,
    backgroundColor: 'common.white',
    backgroundImage: `linear-gradient(135deg, ${varAlpha((theme.vars.palette as any)[color]?.lighterChannel || '', 0.48)}, ${varAlpha((theme.vars.palette as any)[color]?.lightChannel || '', 0.48)})`,
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const iconBoxStyle: SxProps<Theme> = { width: 48, height: 48, mb: 3 };

export const contentBoxStyle: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
};

export const textBoxStyle: SxProps<Theme> = { flexGrow: 1, minWidth: 112 };

export const titleStyle: SxProps<Theme> = { mb: 1, typography: 'subtitle2' };

export const totalStyle: SxProps<Theme> = { typography: 'h4' };

export const chartStyle: SxProps<Theme> = { width: 84, height: 56 };

export const bgShapeStyle = (color: string): SxProps<Theme> => ({
  top: 0,
  left: -20,
  width: 240,
  zIndex: -1,
  height: 240,
  opacity: 0.24,
  position: 'absolute',
  color: `${color}.main`,
});
