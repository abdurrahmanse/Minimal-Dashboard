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

import { useSignUp } from '../hooks/use-sign-up';
import * as styles from './sign-up-view.styles';

export function SignUpView() {
  const { showPassword, setShowPassword, handleSignUp } = useSignUp();

  const renderForm = (
    <Box sx={styles.formBoxStyle}>
      <Box sx={styles.nameBoxStyle}>
        <TextField
          fullWidth
          name="firstName"
          label="First name"
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
        <TextField
          fullWidth
          name="lastName"
          label="Last name"
          slotProps={{
            inputLabel: { shrink: true },
          }}
        />
      </Box>

      <TextField
        fullWidth
        name="email"
        label="Email address"
        sx={styles.textFieldStyle}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      <TextField
        fullWidth
        name="password"
        label="Password"
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
        onClick={handleSignUp}
      >
        Sign up
      </Button>
    </Box>
  );

  return (
    <>
      <Box sx={styles.headerBoxStyle}>
        <Typography variant="h5">Sign up</Typography>
        <Typography
          variant="body2"
          sx={styles.headerSubtitleStyle}
        >
          Already have an account?
          <Link component={RouterLink} href="/sign-in" variant="subtitle2" sx={styles.headerLinkStyle}>
            Sign in
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
