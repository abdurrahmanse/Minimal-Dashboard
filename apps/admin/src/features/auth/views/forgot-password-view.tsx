import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { RouterLink } from 'src/core/routes/components';
import { useRouter } from 'src/core/routes/hooks';
import { Iconify } from 'src/shared/components/iconify';

// ----------------------------------------------------------------------

export function ForgotPasswordView() {
  const router = useRouter();

  const handleSendRequest = useCallback(() => {
    router.push('/verify-otp');
  }, [router]);

  return (
    <>
      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Typography variant="h5">Forgot your password?</Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          Please enter the email address associated with your account and we will email you a link to reset your password.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <TextField
          fullWidth
          name="email"
          label="Email address"
          sx={{ mb: 3 }}
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
          sx={{ mb: 3 }}
        >
          Send Request
        </Button>

        <Link
          component={RouterLink}
          href="/sign-in"
          variant="subtitle2"
          color="inherit"
          sx={{
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Iconify icon={"eva:arrow-ios-back-fill" as any} width={16} />
          Return to sign in
        </Link>
      </Box>
    </>
  );
}
