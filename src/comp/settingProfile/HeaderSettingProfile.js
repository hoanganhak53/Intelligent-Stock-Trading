import { Button, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { ChangePasswordDialog } from './ChangePasswordDialog';

const Input = styled('input')({
  display: 'none',
});

const imgSrc = 'https://cdn.dribbble.com/users/674925/screenshots/16905831/media/2055a7b63ca0bef93aa90903062bafdd.jpg?compress=1&resize=400x300';

export const HeaderSettingProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  }

  return (
    <div className='row_container' style={{marginTop:'50px', marginBottom:'50px'}}>
        {/* <img style={{width:'150px', height:'150px', border:'1px solid #bdbdbd'}} src='https://cdn.dribbble.com/users/674925/screenshots/16905831/media/2055a7b63ca0bef93aa90903062bafdd.jpg?compress=1&resize=400x300'></img>
        <div>
            <b>Tomy Xiaomi</b>
        </div> */}
        <div className='header_left_profile'>
          <p  style={{fontSize:'1.4rem',marginBottom:"20px"}}><b>THÔNG TIN CÔNG KHAI</b></p>
          <p style={{marginBottom:"30px"}}>Những thông tin này sẽ được hiển thị công khai và hiển thị cho tất cả người dùng.</p>
          <div className='row_container'>
            <div>
              <p className='label_profile' style={{marginBottom:'70px',marginTop:'10px'}}>Tên Người dùng</p>
              <p className='label_profile' style={{marginBottom:'100px'}}>Hình đại diện</p>
              <p className='label_profile'>Về tôi</p>
            </div>
            <div style={{marginLeft:'8%'}}>
              <div style={{ marginBottom:'50px'}}><TextField size='small' variant='outlined' sx={{padding:'0px', width:'300px'}}></TextField></div>
              <div className='row_container' style={{fontSize:"0.8rem",width:'300px',border:'1px solid #bdbdbd', height:'fit-content', marginBottom:'35px'}}>
                <img style={{width:'80px', height:'80px'}} src={selectedImage ? URL.createObjectURL(selectedImage) : imgSrc}></img>
                <div style={{paddingTop:'8px',paddingRight:'25px'}}>
                  <p style={{lineHeight:'1.2rem', paddingLeft:'9px'}}>JPG, GIF hoặc PNG. Kích cỡ lớn nhất là 700KB</p>
                  <div className='row_container'>
                    <label htmlFor="contained-button-file">
                      <Input  id="contained-button-file" accept="image/*" multiple type="file" onChange={handleUpload}/>
                      <Button sx={{textTransform:'none',fontWeight:550}} size='small' variant='text'  component="span">
                        Tải lên hình ảnh
                      </Button>
                  </label>
                      <Button sx={{textTransform:'none',fontWeight:550, marginLeft:'10px'}}
                         size='small' variant='text' disabled={selectedImage?false:true}
                         onClick={() => setSelectedImage(null)}>
                        Xóa ảnh
                      </Button>
                  </div>

                </div>
              </div>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                style={{ width: 300 }}
              />
            </div>            
          </div>
        </div>

        <div className='header_right_profile'>
          <p  style={{fontSize:'1.4rem',marginBottom:"20px"}}><b>CHI TIẾT CÁ NHÂN</b></p>
          <p style={{marginBottom:"30px"}}> Những thông tin này sẽ không hiển thị công khai</p>
          <div className='row_container'>
            <div>
              <p className='label_profile' style={{marginBottom:'50px',marginTop:'10px'}}>Tên đăng nhập</p>
              <p className='label_profile' style={{marginBottom:'50px'}}>Mật khẩu</p>
              <p className='label_profile' style={{marginBottom:'50px'}}>Địa chỉ</p>
              <p className='label_profile' style={{marginBottom:'50px'}}>Email</p>
              <p className='label_profile' style={{marginBottom:'50px'}}>Điện thoại</p>
            </div>
            <div style={{marginLeft:'8%'}}>
              <div style={{ marginBottom:'30px'}}><TextField size='small' variant='outlined' sx={{padding:'0px', width:'300px'}}></TextField></div>
              <ChangePasswordDialog />
              <div style={{ marginBottom:'30px'}}><TextField size='small' variant='outlined' sx={{padding:'0px', width:'300px'}}></TextField></div>
              <div style={{ marginBottom:'30px'}}><TextField size='small' variant='outlined' sx={{padding:'0px', width:'300px'}}></TextField></div>
              <div style={{ marginBottom:'30px'}}><TextField type="phone" size='small' variant='outlined' sx={{padding:'0px', width:'300px'}}></TextField></div>
            </div>
          </div>
        </div>
        <div>
        </div>
    </div>
  )
}
