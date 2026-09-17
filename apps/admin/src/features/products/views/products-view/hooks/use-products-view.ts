import { useCallback, useState } from 'react';

import type { FiltersProps } from '../../../components/product-filters';

import { DEFAULT_FILTERS } from '../../../constants';

export function useProductsView() {
  const [sortBy, setSortBy] = useState('featured');
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState<FiltersProps>(DEFAULT_FILTERS);

  const handleOpenFilter = useCallback(() => {
    setOpenFilter(true);
  }, []);

  const handleCloseFilter = useCallback(() => {
    setOpenFilter(false);
  }, []);

  const handleSort = useCallback((newSort: string) => {
    setSortBy(newSort);
  }, []);

  const handleSetFilters = useCallback((updateState: Partial<FiltersProps>) => {
    setFilters((prevValue: FiltersProps) => ({ ...prevValue, ...updateState }));
  }, []);

  const handleResetFilter = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const canReset = Object.keys(filters).some(
    (key) => filters[key as keyof FiltersProps] !== DEFAULT_FILTERS[key as keyof FiltersProps]
  );

  return {
    sortBy,
    openFilter,
    filters,
    canReset,
    handleOpenFilter,
    handleCloseFilter,
    handleSort,
    handleSetFilters,
    handleResetFilter,
  };
}
