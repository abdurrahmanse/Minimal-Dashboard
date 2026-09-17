import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Iconify } from 'src/shared/components/iconify';

import * as styles from './settings-drawer.styles';

export function SettingsDrawer() {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Tooltip title="Settings">
        <Fab
          size="medium"
          aria-label="Settings"
          onClick={handleToggle}
          sx={styles.fabStyle}
        >
          <Iconify width={24} icon="solar:settings-bold-duotone" />
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleToggle}
        slotProps={styles.drawerPaperStyle}
      >
        <Box sx={styles.headerBoxStyle}>
          <Typography variant="h6">Settings</Typography>
          <IconButton onClick={handleToggle}>
            <Iconify icon="mingcute:close-line" />
          </IconButton>
        </Box>

        <Box sx={styles.contentBoxStyle}>
          <Box>
            <Typography variant="subtitle2" sx={styles.modeSubtitleStyle}>
              Mode
            </Typography>
            <Box sx={styles.modeBoxStyle}>
              <Box
                onClick={() => setMode('light')}
                sx={styles.modeItemStyle(mode === 'light')}
              >
                <Iconify icon="solar:sun-bold-duotone" width={28} />
              </Box>

              <Box
                onClick={() => setMode('dark')}
                sx={styles.modeItemStyle(mode === 'dark')}
              >
                <Iconify icon="solar:moon-bold-duotone" width={28} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
