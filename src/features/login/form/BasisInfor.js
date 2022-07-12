import { Stack, TextField } from '@mui/material'
import React from 'react'

export const BasisInfor = () => {
  return (
    <div className='infor-container'>
        <Stack direction='row'>
            <label>Tên người dùng</label>
            <TextField  size='small' sx={{width: '350px'}}></TextField>            
        </Stack>
        <Stack direction='row'>
            <label>Email</label>
            <TextField  size='small' sx={{width: '350px'}}></TextField>            
        </Stack>
        <Stack direction='row'>
            <label>Số điện thoại</label>
            <TextField  size='small' sx={{width: '350px'}}></TextField>            
        </Stack>
    </div>
  )
}
