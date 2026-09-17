import { useCallback, useState } from 'react';
import { useRouter } from 'src/core/routes/hooks';

export function useSignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = useCallback(() => {
    router.push('/');
  }, [router]);

  return {
    showPassword,
    setShowPassword,
    handleSignUp,
  };
}
