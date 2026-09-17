import type { SxProps, Theme } from '@mui/material/styles';

export const colorPickerRootStyle = (size: number, variant: string, sx?: SxProps<Theme>): SxProps<Theme> => [
  {
    '--item-size': `${size}px`,
    '--item-radius':
      (variant === 'circular' && '50%') ||
      (variant === 'rounded' && 'calc(var(--item-size) / 6)') ||
      '0px',
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];
