import type { SxProps, Theme } from '@mui/material/styles';

import { varAlpha } from 'minimal-shared/utils';

export const gridBoxStyle: SxProps<Theme> = {
  p: 3,
  gap: 2,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
};

export const itemBoxStyle: SxProps<Theme> = (theme) => ({
  py: 2.5,
  display: 'flex',
  borderRadius: 1.5,
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
});

export const itemTotalStyle: SxProps<Theme> = { mt: 1 };

export const itemLabelStyle: SxProps<Theme> = { color: 'text.secondary' };
