import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { mergeClasses } from 'minimal-shared/utils';

import type { ChartProps } from '../types';

import { chartClasses } from '../classes';
import * as styles from './chart-loading.styles';

// ----------------------------------------------------------------------

export type ChartLoadingProps = BoxProps & Pick<ChartProps, 'type'>;

export function ChartLoading({ sx, className, type, ...other }: ChartLoadingProps) {
  const circularTypes: ChartProps['type'][] = ['donut', 'radialBar', 'pie', 'polarArea'];

  return (
    <Box
      className={mergeClasses([chartClasses.loading, className])}
      sx={styles.boxStyle(sx)}
      {...other}
    >
      <Skeleton
        variant="circular"
        sx={styles.skeletonStyle(circularTypes as string[], type as string)}
      />
    </Box>
  );
}
