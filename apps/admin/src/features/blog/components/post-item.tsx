import type { CardProps } from '@mui/material/Card';
import type { IconifyName } from 'src/shared/components/iconify';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { varAlpha } from 'minimal-shared/utils';
import { Iconify } from 'src/shared/components/iconify';
import { SvgColor } from 'src/shared/components/svg-color';
import { fShortenNumber } from 'src/shared/utils/format-number';
import { fDate } from 'src/shared/utils/format-time';

import * as styles from './post-item.styles';

// ----------------------------------------------------------------------

export type IPostItem = {
  id: string;
  title: string;
  coverUrl: string;
  totalViews: number;
  description: string;
  totalShares: number;
  totalComments: number;
  totalFavorites: number;
  postedAt: string | number | null;
  author: {
    name: string;
    avatarUrl: string;
  };
};

export function PostItem({
  sx,
  post,
  latestPost,
  latestPostLarge,
  ...other
}: CardProps & {
  post: IPostItem;
  latestPost: boolean;
  latestPostLarge: boolean;
}) {
  const renderAvatar = (
    <Avatar
      alt={post.author.name}
      src={post.author.avatarUrl}
      sx={styles.avatarStyle(latestPostLarge, latestPost)}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={styles.titleStyle(latestPostLarge, latestPost)}
    >
      {post.title}
    </Link>
  );

  const renderInfo = (
    <Box
      sx={styles.infoBoxStyle}
    >
      {[
        { number: post.totalComments, icon: 'solar:chat-round-dots-bold' },
        { number: post.totalViews, icon: 'solar:eye-bold' },
        { number: post.totalShares, icon: 'solar:share-bold' },
      ].map((info, _index) => (
        <Box
          key={_index}
          sx={styles.infoItemStyle(latestPostLarge, latestPost)}
        >
          <Iconify width={16} icon={info.icon as IconifyName} sx={styles.iconStyle} />
          <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
        </Box>
      ))}
    </Box>
  );

  const renderCover = (
    <Box
      component="img"
      alt={post.title}
      src={post.coverUrl}
      sx={styles.coverStyle}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={styles.dateStyle(latestPostLarge, latestPost)}
    >
      {fDate(post.postedAt)}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      src="/assets/icons/shape-avatar.svg"
      sx={styles.shapeStyle(latestPostLarge, latestPost)}
    />
  );

  return (
    <Card sx={sx} {...other}>
      <Box
        sx={styles.containerBoxStyle(latestPostLarge, latestPost)}
      >
        {renderShape}
        {renderAvatar}
        {renderCover}
      </Box>

      <Box
        sx={styles.contentBoxStyle(latestPostLarge, latestPost)}
      >
        {renderDate}
        {renderTitle}
        {renderInfo}
      </Box>
    </Card>
  );
}
