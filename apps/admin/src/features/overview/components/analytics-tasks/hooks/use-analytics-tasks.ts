import { usePopover } from 'minimal-shared/hooks';
import { useState } from 'react';

import type { AnalyticsTasksProps } from '../types';

export function useAnalyticsTasks() {
  const [selected, setSelected] = useState(['2']);

  const handleClickComplete = (taskId: string) => {
    const tasksCompleted = selected.includes(taskId)
      ? selected.filter((value) => value !== taskId)
      : [...selected, taskId];

    setSelected(tasksCompleted);
  };

  return {
    selected,
    handleClickComplete,
  };
}

export function useTaskItem(item: AnalyticsTasksProps['list'][number]) {
  const menuActions = usePopover();

  const handleMarkComplete = () => {
    menuActions.onClose();
    console.info('MARK COMPLETE', item.id);
  };

  const handleShare = () => {
    menuActions.onClose();
    console.info('SHARE', item.id);
  };

  const handleEdit = () => {
    menuActions.onClose();
    console.info('EDIT', item.id);
  };

  const handleDelete = () => {
    menuActions.onClose();
    console.info('DELETE', item.id);
  };

  return {
    menuActions,
    handleMarkComplete,
    handleShare,
    handleEdit,
    handleDelete,
  };
}
