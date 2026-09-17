import { useCallback, useState } from 'react';
import { useRouter } from 'src/core/routes/hooks';

export function useSignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = useCallback(() => {
    router.push('/');
  }, [router]);

  return {
    showPassword,
    setShowPassword,
    handleSignIn,
  };
}
