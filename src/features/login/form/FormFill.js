import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseAPI } from '../../../api/baseAPI';
import { MySnack } from '../../../components/MySnack'
import { HeaderLogin } from '../HeaderLogin';

export const FormFill = () => {
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [openSnackBar1, setOpenSnackBar1] = React.useState(false);
  const navigate = useNavigate()
  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const submit = async () => {
    if (link.length === 0 || name.length === 0 || phoneNumber.length === 0) {
      setOpenSnackBar1(true)
    } else {
      setOpenSnackBar(true)
      await baseAPI.put(`user/${localStorage.userId}`, {
        name,
        link: link.split('@')[0],
        phoneNumber
      }).catch(function (error) {
        console.log(error);
      })
      localStorage.clear();
      navigate('/')
    }
  }

  return (
    <div className='form-fill'>
      <HeaderLogin />
      <div className='infor-container'>
        <p>Thông tin cơ bản</p>
        <Stack direction='row' marginBottom='20px'>
          <label>Tên người dùng</label>
          <TextField size='small' sx={{ width: '350px' }} onChange={(e) => setName(e.target.value)}></TextField>
        </Stack>
        <Stack direction='row' marginBottom='20px'>
          <label>Email</label>
          <TextField size='small' sx={{ width: '350px' }} onChange={(e) => setLink(e.target.value)}></TextField>
        </Stack>
        <Stack direction='row' marginBottom='20px'>
          <label>Số điện thoại</label>
          <TextField size='small' sx={{ width: '350px' }} onChange={(e) => setPhoneNumber(e.target.value)}></TextField>
        </Stack>
        <Button variant='contained' onClick={submit} sx={{ textTransform: 'none' }}>Cập nhật</Button>
      </div>
      <div style={{ height: '20px' }}></div>
      <small style={{ paddingBottom: '150px' }}>© 2022 ITS.<b> Version </b>4.3.0.0 [20222005]</small>
      <MySnack content='Hãy điền đủ thông tin!!' state='error' open={openSnackBar1} setOpen={setOpenSnackBar1} />
      <MySnack content='Cập nhật thông tin thành công. Về trang chủ và đang nhập lại' state='success' open={openSnackBar} setOpen={setOpenSnackBar} />
    </div>
  )
}
