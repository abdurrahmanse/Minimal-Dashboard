import { useCallback } from 'react';
import { useRouter } from 'src/core/routes/hooks';

export function useVerifyOtp() {
  const router = useRouter();

  const handleVerify = useCallback(() => {
    router.push('/sign-in');
  }, [router]);

  return {
    handleVerify,
  };
}
