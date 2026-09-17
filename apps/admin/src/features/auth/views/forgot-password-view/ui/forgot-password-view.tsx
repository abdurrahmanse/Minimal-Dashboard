import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RouterLink } from 'src/core/routes/components';
import { Iconify } from 'src/shared/components/iconify';

import { useForgotPassword } from '../hooks/use-forgot-password';
import * as styles from './forgot-password-view.styles';

export function ForgotPasswordView() {
  const { handleSendRequest } = useForgotPassword();

  return (
    <>
      <Box sx={styles.headerBoxStyle}>
        <Typography variant="h5">Forgot your password?</Typography>
        <Typography
          variant="body2"
          sx={styles.headerSubtitleStyle}
        >
          Please enter the email address associated with your account and we will email you a link to reset your password.
        </Typography>
      </Box>

      <Box sx={styles.formBoxStyle}>
        <TextField
          fullWidth
          name="email"
          label="Email address"
          sx={styles.textFieldStyle}
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />

        <Button
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="contained"
          onClick={handleSendRequest}
          sx={styles.submitButtonStyle}
        >
          Send Request
        </Button>

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
