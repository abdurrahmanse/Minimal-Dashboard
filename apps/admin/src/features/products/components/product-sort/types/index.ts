import type { ButtonProps } from '@mui/material/Button';

export type ProductSortProps = ButtonProps & {
  sortBy: string;
  onSort: (newSort: string) => void;
  options: { value: string; label: string }[];
};
