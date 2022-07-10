import { Stack } from '@mui/material';
import * as React from 'react';
import { TablePosts } from './TablePosts';
import { TableUser } from './TableUser';


export const MyAdmin = () => {
  return (
    <Stack margin='50px 15%'>
      <TableUser/>
      <TablePosts/>
    </Stack>
  );
}
