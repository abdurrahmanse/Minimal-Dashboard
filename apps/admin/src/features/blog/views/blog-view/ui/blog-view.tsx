import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { Iconify } from 'src/shared/components/iconify';
import { DashboardContent } from 'src/shared/layouts/dashboard';

import type { BlogViewProps } from '../types';

import { PostItem } from '../../../components/post-item';
import { PostSearch } from '../../../components/post-search';
import { PostSort } from '../../../components/post-sort';
import { useBlogView } from '../hooks/use-blog-view';
import * as styles from './blog-view.styles';

export function BlogView({ posts }: BlogViewProps) {
  const { sortBy, handleSort } = useBlogView();

  return (
    <DashboardContent>
      <Box sx={styles.headerBoxStyle}>
        <Typography variant="h4" sx={styles.titleStyle}>
          Blog
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          New post
        </Button>
      </Box>

      <Box sx={styles.toolbarBoxStyle}>
        <PostSearch posts={posts} />
        <PostSort
          sortBy={sortBy}
          onSort={handleSort}
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </Box>

      <Grid container spacing={3}>
        {posts.map((post, index) => {
          const latestPostLarge = index === 0;
          const latestPost = index === 1 || index === 2;

          return (
            <Grid
              key={post.id}
              size={{
                xs: 12,
                sm: latestPostLarge ? 12 : 6,
                md: latestPostLarge ? 6 : 3,
              }}
            >
              <PostItem post={post} latestPost={latestPost} latestPostLarge={latestPostLarge} />
            </Grid>
          );
        })}
      </Grid>

      <Pagination count={10} color="primary" sx={styles.paginationStyle} />
    </DashboardContent>
  );
}
