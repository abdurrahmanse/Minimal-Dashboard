import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import { mergeClasses } from 'minimal-shared/utils';

import { layoutClasses } from '../core/classes';
import * as styles from './content.styles';

// ----------------------------------------------------------------------

export type AuthContentProps = BoxProps;

export function AuthContent({ sx, children, className, ...other }: AuthContentProps) {
  return (
    <Box
      className={mergeClasses([layoutClasses.content, className])}
      sx={styles.boxContentStyle(sx)}
      {...other}
    >
      {children}
    </Box>
  );
}
