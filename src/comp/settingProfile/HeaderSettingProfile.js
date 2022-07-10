import { Button, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { ChangePasswordDialog } from './ChangePasswordDialog';
import { baseAPI } from '../../api/baseAPI';
import { Stack } from '../../components/Stack';

const Input = styled('input')({
  display: 'none',
});


export const HeaderSettingProfile = () => {
  const [selectedImage, setSelectedImage] = useState(localStorage.img);
  const [name, setName] = useState(localStorage.name);
  const [about, setAbout] = useState(localStorage.about);
  const [username, setUsername] = useState(localStorage.username);
  const [address, setAddress] = useState(localStorage.address);
  const [email, setEmail] = useState(localStorage.link);
  const [phone, setPhone] = useState(localStorage.phoneNumber);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleUpload = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  }
  const handlePublicInfor = async () => {
    await baseAPI.put(`user/${localStorage.userId}`, {
      "name": String(name),
      "avatar": String(selectedImage),
      "about": String(about)
    }).catch(function (error) {
      console.log(error);
    })
    localStorage.name = name
    localStorage.img = selectedImage
    localStorage.about = about
    setOpenSnackBar(true)
  }
  const handlePrivateInfor = async () => {
    await baseAPI.put(`user/${localStorage.userId}`, {
      "username": String(username),
      "address": String(address),
      "link": String(email),
      "phoneNumber": String(phone)
    }).catch(function (error) {
      console.log(error);
    })
    localStorage.username = username
    localStorage.address = address
    localStorage.phoneNumber = phone
    localStorage.link = email
    setOpenSnackBar(true)
  }


  return (
    <div className='row_container' style={{ marginTop: '50px', marginBottom: '50px' }}>
      <div className='header_left_profile'>
        <p style={{ fontSize: '1.4rem', marginBottom: "20px" }}><b>THÔNG TIN CÔNG KHAI</b></p>
        <p style={{ marginBottom: "30px" }}>Những thông tin này sẽ được hiển thị công khai và hiển thị cho tất cả người dùng.</p>
        <div className='row_container'>
          <div>
            <p className='label_profile' style={{ marginBottom: '70px', marginTop: '10px' }}>Tên Người dùng</p>
            <p className='label_profile' style={{ marginBottom: '100px' }}>Hình đại diện</p>
            <p className='label_profile'>Về tôi</p>
            <Button variant='outlined' onClick={handlePublicInfor} sx={{ marginTop: '90px' }}>Thay đổi</Button>
          </div>
          <div style={{ marginLeft: '8%' }}>
            <div style={{ marginBottom: '50px' }}><TextField size='small' variant='outlined' sx={{ padding: '0px', width: '300px' }}
              value={name} onChange={(e) => setName(e.target.value)}></TextField></div>
            <div className='row_container' style={{ fontSize: "0.8rem", width: '300px', border: '1px solid #bdbdbd', height: 'fit-content', marginBottom: '35px' }}>
              <img style={{ width: '80px', height: '80px' }} src={selectedImage}></img>
              <div style={{ paddingTop: '8px', paddingRight: '25px' }}>
                <p style={{ lineHeight: '1.2rem', paddingLeft: '9px' }}>JPG, GIF hoặc PNG. Kích cỡ lớn nhất là 700KB</p>
                <div className='row_container'>
                  <label htmlFor="contained-button-file">
                    <Input id="contained-button-file" accept="image/*" multiple type="file" onChange={handleUpload} />
                    <Button sx={{ textTransform: 'none', fontWeight: 550 }} size='small' variant='text' component="span">
                      Tải lên hình ảnh
                    </Button>
                  </label>
                  <Button sx={{ textTransform: 'none', fontWeight: 550, marginLeft: '10px' }}
                    size='small' variant='text' disabled={selectedImage ? false : true}
                    onClick={() => setSelectedImage(localStorage.img)}>
                    Xóa ảnh
                  </Button>
                </div>

              </div>
            </div>
            <TextareaAutosize
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              aria-label="minimum height"
              minRows={3}
              style={{ width: 300, padding: '5px', fontSize: '1rem' }}
            />
          </div>
        </div>
      </div>

      <div className='header_right_profile'>
        <p style={{ fontSize: '1.4rem', marginBottom: "20px" }}><b>CHI TIẾT CÁ NHÂN</b></p>
        <p style={{ marginBottom: "30px" }}> Những thông tin này sẽ không hiển thị công khai</p>
        <div className='row_container'>
          <div>
            <p className='label_profile' style={{ marginBottom: '50px', marginTop: '10px' }}>Tên đăng nhập</p>
            <p className='label_profile' style={{ marginBottom: '50px' }}>Mật khẩu</p>
            <p className='label_profile' style={{ marginBottom: '50px' }}>Địa chỉ</p>
            <p className='label_profile' style={{ marginBottom: '50px' }}>Email</p>
            <p className='label_profile' style={{ marginBottom: '50px' }}>Điện thoại</p>
            <Button variant='outlined' onClick={handlePrivateInfor}>Thay đổi</Button>
          </div>
          <div style={{ marginLeft: '8%' }}>
            <div style={{ marginBottom: '30px' }}><TextField onChange={(e) => setUsername(e.target.value)}
              size='small' variant='outlined' sx={{ padding: '0px', width: '300px' }} value={username}></TextField></div>
            <ChangePasswordDialog />
            <div style={{ marginBottom: '30px' }}><TextField size='small' onChange={(e) => setAddress(e.target.value)}
              value={address} variant='outlined' sx={{ padding: '0px', width: '300px' }}></TextField></div>
            <div style={{ marginBottom: '30px' }}><TextField size='small' onChange={(e) => setEmail(e.target.value)}
              value={email + '@gmail.com'} variant='outlined' sx={{ padding: '0px', width: '300px' }}></TextField></div>
            <div style={{ marginBottom: '30px' }}><TextField type="phone" size='small' onChange={(e) => setPhone(e.target.value)}
              value={phone} variant='outlined' sx={{ padding: '0px', width: '300px' }}></TextField></div>
          </div>
        </div>
      </div>
      <div>
      </div>
      <Stack content='Thay đổi thông tin thành công' state='success' open={openSnackBar} setOpen={setOpenSnackBar}></Stack>
    </div>
  )
}
