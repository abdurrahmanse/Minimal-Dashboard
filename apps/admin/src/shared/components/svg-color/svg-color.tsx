import { styled } from '@mui/material/styles';
import { mergeClasses } from 'minimal-shared/utils';

import type { SvgColorProps } from './types';

import { svgColorClasses } from './classes';
import * as styles from './svg-color.styles';

// ----------------------------------------------------------------------

export function SvgColor({ src, className, sx, ...other }: SvgColorProps) {
  return (
    <SvgRoot
      className={mergeClasses([svgColorClasses.root, className])}
      sx={styles.svgRootStyle(src, sx)}
      {...other}
    />
  );
}

// ----------------------------------------------------------------------

const SvgRoot = styled('span')(() => ({
  width: 24,
  height: 24,
  flexShrink: 0,
  display: 'inline-flex',
  backgroundColor: 'currentColor',
}));
