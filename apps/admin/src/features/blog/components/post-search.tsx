import type { SxProps, Theme } from '@mui/material/styles';

import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Iconify } from 'src/shared/components/iconify';

import type { IPostItem } from './post-item';

import * as styles from './post-search.styles';

// ----------------------------------------------------------------------

type PostSearchProps = {
  posts: IPostItem[];
  sx?: SxProps<Theme>;
};

export function PostSearch({ posts, sx }: PostSearchProps) {
  return (
    <Autocomplete
      sx={styles.autocompleteStyle}
      autoHighlight
      popupIcon={null}
      slotProps={{
        paper: {
          sx: styles.paperStyle(sx),
        },
      }}
      options={posts}
      getOptionLabel={(post) => post.title}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search post..."
          slotProps={{
            input: {
              ...((params as any).InputProps || params.slotProps?.input),
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={styles.iconStyle}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  );
}
