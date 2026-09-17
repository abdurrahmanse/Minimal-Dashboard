import { useCallback, useState } from 'react';

export function useBlogView() {
  const [sortBy, setSortBy] = useState('latest');

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  return {
    sortBy,
    handleSort,
  };
}
