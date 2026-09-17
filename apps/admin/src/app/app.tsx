import 'src/app/global.css';
import Fab from '@mui/material/Fab';
import { useEffect } from 'react';
import { usePathname } from 'src/core/routes/hooks';
import { ThemeProvider } from 'src/core/theme/theme-provider';
import { Iconify } from 'src/shared/components/iconify';
import { SettingsDrawer } from 'src/shared/components/settings';

// ----------------------------------------------------------------------

type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  useScrollToTop();

  const githubButton = () => (
    <Fab
      size="medium"
      aria-label="Github"
      href="https://github.com/minimal-ui-kit/material-kit-react"
      sx={{
        zIndex: 9,
        right: 20,
        bottom: 80, // moved up to make room for settings
        width: 48,
        height: 48,
        position: 'fixed',
        bgcolor: 'grey.800',
      }}
    >
      <Iconify width={24} icon="socials:github" sx={{ '--color': 'white' }} />
    </Fab>
  );

  return (
    <ThemeProvider>
      {children}
      <SettingsDrawer />
      {githubButton()}
    </ThemeProvider>
  );
}

// ----------------------------------------------------------------------

function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
