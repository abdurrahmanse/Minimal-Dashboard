import { CONFIG } from 'src/config-global';
import { ForgotPasswordView } from 'src/features/auth/views';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Forgot Password - ${CONFIG.appName}`}</title>

      <ForgotPasswordView />
    </>
  );
}
