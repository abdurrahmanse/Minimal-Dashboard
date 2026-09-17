import { CONFIG } from 'src/config-global';
import { SignUpView } from 'src/features/auth/views';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Sign Up - ${CONFIG.appName}`}</title>

      <SignUpView />
    </>
  );
}
