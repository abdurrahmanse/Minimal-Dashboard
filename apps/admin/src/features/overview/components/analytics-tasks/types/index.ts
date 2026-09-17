import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

export type AnalyticsTasksProps = CardProps & {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    name: string;
  }[];
};

export type TaskItemProps = BoxProps & {
  selected: boolean;
  item: AnalyticsTasksProps['list'][number];
  onChange: (id: string) => void;
};
