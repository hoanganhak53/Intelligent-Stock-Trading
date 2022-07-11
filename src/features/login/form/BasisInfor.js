import { Stack, TextField } from '@mui/material'
import React from 'react'

export const BasisInfor = () => {
  return (
    <div className='infor-container'>
        <Stack direction='row'>
            <label>Tên người dùng</label>
            <TextField label='dm ' size='small'></TextField>            
        </Stack>
    </div>
  )
}
