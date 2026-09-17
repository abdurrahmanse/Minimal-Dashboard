import { styled } from '@mui/material/styles';
import { mergeClasses } from 'minimal-shared/utils';
import SimpleBar from 'simplebar-react';

import type { ScrollbarProps } from './types';

import { scrollbarClasses } from './classes';
import * as styles from './scrollbar.styles';

// ----------------------------------------------------------------------

export function Scrollbar({
  sx,
  ref,
  children,
  className,
  slotProps,
  fillContent = true,
  ...other
}: ScrollbarProps) {
  return (
    <ScrollbarRoot
      scrollableNodeProps={{ ref }}
      clickOnTrack={false}
      fillContent={fillContent}
      className={mergeClasses([scrollbarClasses.root, className])}
      sx={styles.scrollbarRootStyle(
        slotProps?.wrapperSx as React.CSSProperties,
        slotProps?.contentWrapperSx as React.CSSProperties,
        slotProps?.contentSx as React.CSSProperties,
        sx
      )}
      {...other}
    >
      {children}
    </ScrollbarRoot>
  );
}

// ----------------------------------------------------------------------

const ScrollbarRoot = styled(SimpleBar, {
  shouldForwardProp: (prop: string) => !['fillContent', 'sx'].includes(prop),
})<Pick<ScrollbarProps, 'fillContent'>>(({ fillContent }) => ({
  minWidth: 0,
  minHeight: 0,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  ...(fillContent && {
    '& .simplebar-content': {
      display: 'flex',
      flex: '1 1 auto',
      minHeight: '100%',
      flexDirection: 'column',
    },
  }),
}));
