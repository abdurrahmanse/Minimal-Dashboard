import 'src/app/global.css';
import Fab from '@mui/material/Fab';
import { useEffect } from 'react';
import { usePathname } from 'src/core/routes/hooks';
import { ThemeProvider } from 'src/core/theme/theme-provider';
import { Iconify } from 'src/shared/components/iconify';
import { SettingsDrawer } from 'src/shared/components/settings';

import * as styles from './app.styles';

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
      sx={styles.fabStyle}
    >
      <Iconify width={24} icon="socials:github" sx={styles.iconStyle} />
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
