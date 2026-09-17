import { useState } from 'react';
import { _users } from 'src/shared/mocks';

import type { UserProps } from '../../../types';

import { useTable } from '../../../hooks/use-table';
import { applyFilter, getComparator } from '../../../utils';

export function useUserView() {
  const table = useTable();
  const [filterName, setFilterName] = useState('');

  const dataFiltered: UserProps[] = applyFilter({
    inputData: _users,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const handleFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
    table.onResetPage();
  };

  return {
    table,
    filterName,
    handleFilterName,
    dataFiltered,
    notFound,
  };
}
