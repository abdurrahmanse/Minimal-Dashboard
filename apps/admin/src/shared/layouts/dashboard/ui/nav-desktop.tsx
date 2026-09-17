import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { varAlpha } from 'minimal-shared/utils';

import type { NavContentProps } from '../types';

import { NavContent } from './nav-content';
import * as styles from './nav-desktop.styles';

export function NavDesktop({
  sx,
  data,
  slots,
  workspaces,
  layoutQuery,
}: NavContentProps & { layoutQuery: Breakpoint }) {
  const theme = useTheme();

  return (
    <Box
      sx={styles.boxContainerStyle(layoutQuery, sx)}
    >
      <NavContent data={data} slots={slots} workspaces={workspaces} />
    </Box>
  );
}
