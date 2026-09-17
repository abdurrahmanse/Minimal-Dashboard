import type { SxProps, Theme } from '@mui/material/styles';

import { timelineItemClasses } from '@mui/lab/TimelineItem';

export const timelineStyle: SxProps<Theme> = { m: 0, p: 3, [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } };

export const timeStyle: SxProps<Theme> = { color: 'text.disabled' };
