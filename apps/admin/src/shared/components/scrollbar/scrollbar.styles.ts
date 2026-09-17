import type { SxProps, Theme } from '@mui/material/styles';

import React from 'react';

export const scrollbarRootStyle = (
  wrapperSx?: React.CSSProperties, 
  contentWrapperSx?: React.CSSProperties, 
  contentSx?: React.CSSProperties, 
  sx?: SxProps<Theme>
): SxProps<Theme> => [
  {
    '& .simplebar-wrapper': wrapperSx,
    '& .simplebar-content-wrapper': contentWrapperSx,
    '& .simplebar-content': contentSx,
  },
  ...(Array.isArray(sx) ? sx : [sx]),
];
