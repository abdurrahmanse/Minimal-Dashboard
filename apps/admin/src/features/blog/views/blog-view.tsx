import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useCallback, useState } from 'react';
import { Iconify } from 'src/shared/components/iconify';
import { DashboardContent } from 'src/shared/layouts/dashboard';

import type { IPostItem } from '../components/post-item';

import { PostItem } from '../components/post-item';
import { PostSearch } from '../components/post-search';
import { PostSort } from '../components/post-sort';

// ----------------------------------------------------------------------

type Props = {
  posts: IPostItem[];
};

export function BlogView({ posts }: Props) {
  const [sortBy, setSortBy] = useState('latest');

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  return (
    <DashboardContent>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
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

      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
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

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
    </DashboardContent>
  );
}
