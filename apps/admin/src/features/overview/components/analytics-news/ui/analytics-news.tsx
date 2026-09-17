import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Iconify } from 'src/shared/components/iconify';
import { Scrollbar } from 'src/shared/components/scrollbar';

import type { AnalyticsNewsProps } from '../types';

import * as styles from './analytics-news.styles';
import { NewsItem } from './news-item';

export function AnalyticsNews({ title, subheader, list, sx, ...other }: AnalyticsNewsProps) {
  return (
    <Card sx={sx} {...other}>
      <CardHeader title={title} subheader={subheader} sx={styles.headerStyle} />

      <Scrollbar sx={styles.scrollbarStyle}>
        <Box sx={styles.listStyle}>
          {list.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </Box>
      </Scrollbar>

      <Box sx={styles.buttonBoxStyle}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={styles.iconStyle} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}
