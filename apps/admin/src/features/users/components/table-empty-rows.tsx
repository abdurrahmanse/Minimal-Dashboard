import type { TableRowProps } from '@mui/material/TableRow';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// ----------------------------------------------------------------------
import * as styles from './table-empty-rows.styles';

type TableEmptyRowsProps = TableRowProps & {
  emptyRows: number;
  height?: number;
};

export function TableEmptyRows({ emptyRows, height, sx, ...other }: TableEmptyRowsProps) {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={styles.rowStyle(height, emptyRows, sx)}
      {...other}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
