import { CONFIG } from 'src/config-global';
import { BlogView } from 'src/features/blog/views';
import { _posts } from 'src/shared/mocks';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Blog - ${CONFIG.appName}`}</title>

      <BlogView posts={_posts} />
    </>
  );
}
