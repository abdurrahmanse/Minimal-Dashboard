import type { StackProps } from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as styles from './nav-upgrade.styles';

// ----------------------------------------------------------------------

export function NavUpgrade({ sx, ...other }: StackProps) {
  return (
    <Box
      sx={styles.boxContainerStyle(sx)}
      {...other}
    >
      <Typography
        variant="h6"
        sx={styles.typographyTitleStyle}
      >
        More features?
      </Typography>

      <Typography variant="body2" sx={styles.typographySubtitleStyle}>
        {`From only `}
        <Box component="strong" sx={styles.boxPriceStyle}>
          $69
        </Box>
      </Typography>

      <Box
        component="img"
        alt="Minimal dashboard"
        src="/assets/illustrations/illustration-dashboard.webp"
        sx={styles.boxImageStyle}
      />

      
    </Box>
  );
}
