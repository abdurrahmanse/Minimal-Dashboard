import { useCallback } from 'react';
import { useRouter } from 'src/core/routes/hooks';

export function useForgotPassword() {
  const router = useRouter();

  const handleSendRequest = useCallback(() => {
    router.push('/verify-otp');
  }, [router]);

  return {
    handleSendRequest,
  };
}
