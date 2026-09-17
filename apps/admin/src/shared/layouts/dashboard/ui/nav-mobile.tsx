import Drawer, { drawerClasses } from '@mui/material/Drawer';
import { useEffect } from 'react';
import { usePathname } from 'src/core/routes/hooks';

import type { NavContentProps } from '../types';

import { NavContent } from './nav-content';
import * as styles from './nav-mobile.styles';

export function NavMobile({
  sx,
  data,
  open,
  slots,
  onClose,
  workspaces,
}: NavContentProps & { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={styles.drawerStyle(sx)}
    >
      <NavContent data={data} slots={slots} workspaces={workspaces} />
    </Drawer>
  );
}
