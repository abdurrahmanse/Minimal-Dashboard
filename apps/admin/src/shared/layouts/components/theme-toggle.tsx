import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import { Iconify } from 'src/shared/components/iconify';

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  const handleToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={handleToggle}>
      <Iconify icon={mode === 'light' ? 'solar:moon-bold-duotone' : 'solar:sun-bold-duotone'} />
    </IconButton>
  );
}
