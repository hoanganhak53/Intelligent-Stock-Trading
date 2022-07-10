import { Pagination, Stack } from '@mui/material';
import React from 'react'

export const Paging = (prop) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(prop.totalTasks / prop.taskPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Stack spacing={10}>
      <Pagination count={Math.ceil(prop.totalTasks / prop.taskPerPage)}
        page={prop.currentPage} onChange={prop.paginate} variant="outlined" />
    </Stack>
  );
}