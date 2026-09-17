import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RouterLink } from 'src/core/routes/components';
import { Iconify } from 'src/shared/components/iconify';

import { useVerifyOtp } from '../hooks/use-verify-otp';
import * as styles from './verify-otp-view.styles';

export function VerifyOtpView() {
  const { handleVerify } = useVerifyOtp();

  return (
    <>
      <Box sx={styles.headerBoxStyle}>
        <Typography variant="h5">Please check your email!</Typography>
        <Typography
          variant="body2"
          sx={styles.headerSubtitleStyle}
        >
          We have emailed a 6-digit confirmation code. Please enter the code in below box to verify your email.
        </Typography>
      </Box>

      <Box sx={styles.formBoxStyle}>
        <Box sx={styles.otpBoxStyle}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <TextField
              key={i}
              variant="outlined"
              sx={styles.otpInputStyle}
              slotProps={{ htmlInput: { maxLength: 1 } }}
            />
          ))}
        </Box>

        <Button
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
          onClick={handleVerify}
          sx={styles.submitButtonStyle}
        >
          Verify
        </Button>

        <Typography variant="body2" sx={styles.resendTextStyle}>
          Don&apos;t have a code?{' '}
          <Link variant="subtitle2" sx={styles.resendLinkStyle}>
            Resend code
          </Link>
        </Typography>

        <Link
          component={RouterLink}
          href="/sign-in"
          variant="subtitle2"
          color="inherit"
          sx={styles.returnLinkStyle}
        >
          <Iconify icon={"eva:arrow-ios-back-fill" as any} width={16} />
          Return to sign in
        </Link>
      </Box>
    </>
  );
}
