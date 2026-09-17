import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { useRouter } from 'src/core/routes/hooks';
import { Iconify } from 'src/shared/components/iconify';

// ----------------------------------------------------------------------

export function VerifyOtpView() {
  const router = useRouter();

  const handleVerify = useCallback(() => {
    router.push('/sign-in');
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
        <Typography variant="h5">Please check your email!</Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          We have emailed a 6-digit confirmation code. Please enter the code in below box to verify your email.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1.5, mb: 3, justifyContent: 'center', width: '100%' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <TextField
              key={i}
              variant="outlined"
              sx={{
                width: 48,
                height: 48,
                '& input': { textAlign: 'center', p: 0, height: 48 },
              }}
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
          sx={{ mb: 3 }}
        >
          Verify
        </Button>

        <Typography variant="body2" sx={{ textAlign: 'center', width: '100%' }}>
          Don&apos;t have a code?{' '}
          <Link variant="subtitle2" sx={{ cursor: 'pointer' }}>
            Resend code
          </Link>
        </Typography>

        <Link
          href="/sign-in"
          variant="subtitle2"
          color="inherit"
          sx={{
            mt: 3,
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
