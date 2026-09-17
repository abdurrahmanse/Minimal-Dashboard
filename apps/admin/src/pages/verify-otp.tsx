import { CONFIG } from 'src/config-global';
import { VerifyOtpView } from 'src/features/auth/views';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Verify OTP - ${CONFIG.appName}`}</title>

      <VerifyOtpView />
    </>
  );
}
