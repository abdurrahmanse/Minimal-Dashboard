import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { RouterLink } from 'src/core/routes/components';
import { Iconify } from 'src/shared/components/iconify';

import { useSignIn } from '../hooks/use-sign-in';
import * as styles from './sign-in-view.styles';

export function SignInView() {
  const { showPassword, setShowPassword, handleSignIn } = useSignIn();

  const renderForm = (
    <Box sx={styles.formBoxStyle}>
      <TextField
        fullWidth
        name="email"
        label="Email address"
        defaultValue="hello@gmail.com"
        sx={styles.textFieldStyle}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      <Link component={RouterLink} href="/forgot-password" variant="body2" color="inherit" sx={styles.forgotPasswordLinkStyle}>
        Forgot password?
      </Link>

      <TextField
        fullWidth
        name="password"
        label="Password"
        defaultValue="@demo1234"
        type={showPassword ? 'text' : 'password'}
        slotProps={{
          inputLabel: { shrink: true },
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        sx={styles.textFieldStyle}
      />

      <Button
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        onClick={handleSignIn}
      >
        Sign in
      </Button>
    </Box>
  );

  return (
    <>
      <Box sx={styles.headerBoxStyle}>
        <Typography variant="h5">Sign in</Typography>
        <Typography
          variant="body2"
          sx={styles.headerSubtitleStyle}
        >
          Don’t have an account?
          <Link component={RouterLink} href="/sign-up" variant="subtitle2" sx={styles.headerLinkStyle}>
            Get started
          </Link>
        </Typography>
      </Box>
      {renderForm}
      <Divider sx={styles.dividerStyle}>
        <Typography
          variant="overline"
          sx={styles.dividerTextStyle}
        >
          OR
        </Typography>
      </Divider>
      <Box sx={styles.socialsBoxStyle}>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:google" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:github" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:twitter" />
        </IconButton>
      </Box>
    </>
  );
}
