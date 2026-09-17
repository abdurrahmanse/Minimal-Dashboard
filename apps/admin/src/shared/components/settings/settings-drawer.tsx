import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Iconify } from 'src/shared/components/iconify';

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
          sx={{
            zIndex: 999,
            right: 20,
            bottom: 20,
            width: 48,
            height: 48,
            position: 'fixed',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          <Iconify width={24} icon="solar:settings-bold-duotone" />
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleToggle}
        slotProps={{
          paper: {
            sx: { width: 280, p: 3 },
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">Settings</Typography>
          <IconButton onClick={handleToggle}>
            <Iconify icon="mingcute:close-line" />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              Mode
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                onClick={() => setMode('light')}
                sx={{
                  flex: 1,
                  height: 64,
                  cursor: 'pointer',
                  borderRadius: 1,
                  border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...(mode === 'light' && {
                    borderColor: 'primary.main',
                    boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary.main}`,
                  }),
                }}
              >
                <Iconify icon="solar:sun-bold-duotone" width={28} />
              </Box>

              <Box
                onClick={() => setMode('dark')}
                sx={{
                  flex: 1,
                  height: 64,
                  cursor: 'pointer',
                  borderRadius: 1,
                  border: (theme) => `solid 1px ${theme.vars.palette.divider}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...(mode === 'dark' && {
                    borderColor: 'primary.main',
                    boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary.main}`,
                  }),
                }}
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
