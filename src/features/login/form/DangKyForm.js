import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import EmailIcon from '@mui/icons-material/Email';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Button } from '@mui/material';
import axios from 'axios';


const userSchema = yup.object().shape({
  userNameOrEmailAddress: yup.string().min(5, 'Username phải lớn hơn 5 ký tự')
    .max(32,'Username phải nhỏ hơn 32 ký tự').required('Nhập thiếu thông tin'),
  password: yup.string().min(6, 'Password phải lớn hơn 6 ký tự').required('Nhập thiếu thông tin'),
  password2: yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Mật khẩu không khớp"
    )})
});

const boxSX = { '& > :not(style)': { m: 1 } ,marginBottom:'40px'}
const iconSX = { color: 'action.active', mr: 1, my: 0.5, marginTop:'20px' }

export const DangKyForm = () =>{
    const navigate = useNavigate();
    const {handleSubmit, handleChange, values, touched, errors} = useFormik({
      initialValues:{
        userNameOrEmailAddress:'',
        password: '',
        password2: '',
        rememberClient:false,
      },
      validationSchema: userSchema,
      onSubmit:async () => {
        // await axios.post('https://62ba7bf7573ca8f832856dda.mockapi.io/api/IST/user', {
        //   "username": values.userNameOrEmailAddress,
        //   "password": values.password,
        //   "avatar": 'https://a.wattpad.com/useravatar/HnNguynThNgc1.256.347833.jpg',
        //   "link": values.userNameOrEmailAddress,
        //   "address": "US",
        //   "phoneNumber": "000000000",
        //   "name": values.userNameOrEmailAddress,
        //   "role": false
        // }).then(res => {
        //   const data = res.data;
        //   localStorage.setItem('userId', data.userId)
        //   localStorage.setItem('role', data.role)
        //   localStorage.setItem('login', true)     
        // })
        navigate('form_fill/basis_infor');
      },
    })
    
    return (
      <form onSubmit={handleSubmit}>
        <h3 style={{paddingBottom:'10px'}}>Đăng ký</h3>
        <Box sx={boxSX}>
          <Box id='Box'>
            <EmailIcon sx={iconSX} />
            <TextField label="Username" variant="standard" className='form__group'                 
              onChange={handleChange} value={values.userNameOrEmailAddress} 
              id="usernameOrEmailAddress" name="userNameOrEmailAddress" type="text"/>
          </Box>
          {touched.userNameOrEmailAddress && errors.userNameOrEmailAddress ? (
            <div className='error'>{errors.userNameOrEmailAddress}</div>
          ): null}
        </Box>
        
        <Box sx={boxSX}>
          <Box id='Box'>
            <HttpsRoundedIcon sx={iconSX} />
            <TextField label="Password" variant="standard" className='form__group'                 
              onChange={handleChange} value={values.password} 
              id="password" name="password" type="password"/>
          </Box>
          {touched.password && errors.password ? (
            <div className='error'>{errors.password}</div>
          ): null}
        </Box>
        <Box sx={boxSX}>
          <Box id='Box'>
            <HttpsRoundedIcon sx={iconSX} />
            <TextField label="Confirm Password" variant="standard" className='form__group'                 
              onChange={handleChange} value={values.password2} 
              id="password2" name="password2" type="password"/>
          </Box>
          {touched.password2 && errors.password2 ? (
            <div className='error'>{errors.password2}</div>
          ): null}
        </Box>
        <div style={{marginLeft:'30px'}}>        
          <div>
            <Button type='submit' variant='contained' sx={{textTransform:'none'}}>Đăng ký</Button>               
          </div>
        </div>
      </form>          
    )
}