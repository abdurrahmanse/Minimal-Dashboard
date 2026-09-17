import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';
import { fToNow } from 'src/shared/utils/format-time';

import type { NewsItemProps } from '../types';

import * as styles from './news-item.styles';

export function NewsItem({ item, sx, ...other }: NewsItemProps) {
  return (
    <Box
      sx={styles.itemBoxStyle(sx)}
      {...other}
    >
      <Avatar
        variant="rounded"
        alt={item.title}
        src={item.coverUrl}
        sx={styles.avatarStyle}
      />

      <ListItemText
        primary={<Link color="inherit">{item.title}</Link>}
        secondary={item.description}
        slotProps={{
          primary: { noWrap: true },
          secondary: {
            noWrap: true,
            sx: styles.secondaryTextStyle,
          },
        }}
      />

      <Box sx={styles.timeBoxStyle}>
        {fToNow(item.postedAt)}
      </Box>
    </Box>
  );
}
