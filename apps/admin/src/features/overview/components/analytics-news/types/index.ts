import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

export type AnalyticsNewsProps = CardProps & {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
    postedAt: string | number | null;
  }[];
};

export type NewsItemProps = BoxProps & {
  item: AnalyticsNewsProps['list'][number];
};
