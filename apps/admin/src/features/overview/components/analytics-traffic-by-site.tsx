import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { varAlpha } from 'minimal-shared/utils';
import { Iconify } from 'src/shared/components/iconify';
import { fShortenNumber } from 'src/shared/utils/format-number';

import * as styles from './analytics-traffic-by-site.styles';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: { value: string; label: string; total: number }[];
};

export function AnalyticsTrafficBySite({ title, subheader, list, sx, ...other }: Props) {
  return (
    <Card sx={sx} {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Box sx={styles.gridBoxStyle}>
        {list.map((site) => (
          <Box
            key={site.label}
            sx={styles.itemBoxStyle}
          >
            {site.value === 'twitter' && <Iconify width={32} icon="socials:twitter" />}
            {site.value === 'facebook' && <Iconify width={32} icon="socials:facebook" />}
            {site.value === 'google' && <Iconify width={32} icon="socials:google" />}
            {site.value === 'linkedin' && <Iconify width={32} icon="socials:linkedin" />}

            <Typography variant="h6" sx={styles.itemTotalStyle}>
              {fShortenNumber(site.total)}
            </Typography>

            <Typography variant="body2" sx={styles.itemLabelStyle}>
              {site.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
