import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { varAlpha } from 'minimal-shared/utils';
import { RouterLink } from 'src/core/routes/components';
import { usePathname } from 'src/core/routes/hooks';
import { Logo } from 'src/shared/components/logo';
import { Scrollbar } from 'src/shared/components/scrollbar';

import type { NavContentProps } from '../types';

import { WorkspacesPopover } from '../../components/workspaces-popover';
import * as styles from './nav-content.styles';

export function NavContent({ data, slots, workspaces, sx }: NavContentProps) {
  const pathname = usePathname();

  return (
    <>
      <Logo />

      {slots?.topArea}

      <WorkspacesPopover data={workspaces} sx={styles.workspacesPopoverStyle} />

      <Scrollbar fillContent>
        <Box
          component="nav"
          sx={styles.boxNavStyle(sx)}
        >
          <Box
            component="ul"
            sx={styles.boxUlStyle}
          >
            {data.map((item) => {
              const isActived = item.path === pathname;

              return (
                <ListItem disableGutters disablePadding key={item.title}>
                  <ListItemButton
                    disableGutters
                    component={RouterLink}
                    href={item.path}
                    sx={styles.listItemButtonStyle(isActived)}
                  >
                    <Box component="span" sx={styles.boxIconStyle}>
                      {item.icon}
                    </Box>

                    <Box component="span" sx={styles.boxTitleStyle}>
                      {item.title}
                    </Box>

                    {item.info && item.info}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </Box>
      </Scrollbar>

      {slots?.bottomArea}
    </>
  );
}
