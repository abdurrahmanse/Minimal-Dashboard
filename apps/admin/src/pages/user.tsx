import { CONFIG } from 'src/config-global';
import { UserView } from 'src/features/users/views';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Users - ${CONFIG.appName}`}</title>

      <UserView />
    </>
  );
}
