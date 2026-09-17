import type { SxProps, Theme } from '@mui/material/styles';

import { visuallyHidden } from '../utils';

export const cellStyle = (width?: number | string, minWidth?: number | string): SxProps<Theme> => ({
  width,
  minWidth,
});

export const sortBoxStyle: SxProps<Theme> = { ...visuallyHidden };
