import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import { Iconify } from 'src/shared/components/iconify';

import type { TaskItemProps } from '../types';

import { useTaskItem } from '../hooks/use-analytics-tasks';
import * as styles from './task-item.styles';

export function TaskItem({ item, selected, onChange, sx, ...other }: TaskItemProps) {
  const { menuActions, handleMarkComplete, handleShare, handleEdit, handleDelete } = useTaskItem(item);

  return (
    <>
      <Box
        sx={styles.itemBoxStyle(selected, sx)}
        {...other}
      >
        <FormControlLabel
          label={item.name}
          control={
            <Checkbox
              disableRipple
              checked={selected}
              onChange={() => onChange(item.id)}
              slotProps={{ input: { id: `${item.name}-checkbox` } }}
            />
          }
          sx={styles.controlStyle}
        />

        <IconButton color={menuActions.open ? 'inherit' : 'default'} onClick={menuActions.onOpen}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Box>

      <Popover
        open={menuActions.open}
        anchorEl={menuActions.anchorEl}
        onClose={menuActions.onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuList
          disablePadding
          sx={styles.menuListStyle}
        >
          <MenuItem onClick={handleMarkComplete}>
            <Iconify icon="solar:check-circle-bold" />
            Mark complete
          </MenuItem>

          <MenuItem onClick={handleEdit}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem onClick={handleShare}>
            <Iconify icon="solar:share-bold" />
            Share
          </MenuItem>

          <Divider sx={styles.dividerStyle} />

          <MenuItem onClick={handleDelete} sx={styles.deleteMenuItemStyle}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}
