import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Scrollbar } from 'src/shared/components/scrollbar';

import type { AnalyticsTasksProps } from '../types';

import { useAnalyticsTasks } from '../hooks/use-analytics-tasks';
import * as styles from './analytics-tasks.styles';
import { TaskItem } from './task-item';

export function AnalyticsTasks({ title, subheader, list, sx, ...other }: AnalyticsTasksProps) {
  const { selected, handleClickComplete } = useAnalyticsTasks();

  return (
    <Card sx={sx} {...other}>
      <CardHeader title={title} subheader={subheader} sx={styles.headerStyle} />

      <Scrollbar sx={styles.scrollbarStyle}>
        <Stack divider={<Divider sx={styles.dividerStyle} />} sx={styles.stackStyle}>
          {list.map((item) => (
            <TaskItem
              key={item.id}
              item={item}
              selected={selected.includes(item.id)}
              onChange={() => handleClickComplete(item.id)}
            />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}
