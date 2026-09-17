import { CONFIG } from 'src/config-global';
import { SignInView } from 'src/features/auth/views';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Sign in - ${CONFIG.appName}`}</title>

      <SignInView />
    </>
  );
}
