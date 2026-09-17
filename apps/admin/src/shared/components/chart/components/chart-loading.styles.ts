import type { SxProps, Theme } from '@mui/material/styles';

export const boxStyle = (sx?: SxProps<Theme>): SxProps<Theme> => [
  () => ({
    top: 0,
    left: 0,
    width: 1,
    zIndex: 9,
    height: 1,
    p: 'inherit',
    overflow: 'hidden',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 'inherit',
    justifyContent: 'center',
  }),
  ...(Array.isArray(sx) ? sx : [sx]),
];

export const skeletonStyle = (circularTypes: string[], type: string): SxProps<Theme> => ({
  width: 1,
  height: 1,
  borderRadius: 'inherit',
  ...(circularTypes.includes(type) && { borderRadius: '50%' }),
});
