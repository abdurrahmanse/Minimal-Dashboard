import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { RouterLink } from 'src/core/routes/components';
import { Logo } from 'src/shared/components/logo';

import * as styles from './not-found-view.styles';

// ----------------------------------------------------------------------

export function NotFoundView() {
  return (
    <>
      <Logo sx={styles.logoStyle} />

      <Container sx={styles.containerStyle}>
        <Typography variant="h3" sx={styles.titleStyle}>
          Sorry, page not found!
        </Typography>

        <Typography sx={styles.descriptionStyle}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
          sure to check your spelling.
        </Typography>

        <Box
          component="img"
          src="/assets/illustrations/illustration-404.svg"
          sx={styles.imageStyle}
        />

        <Button component={RouterLink} href="/" size="large" variant="contained" color="inherit">
          Go to home
        </Button>
      </Container>
    </>
  );
}
