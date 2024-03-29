import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import axios from 'axios';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import EmailIcon from '@mui/icons-material/Email';
import { Checkbox, FormGroup, TextField, Box, FormControlLabel, Button } from '@mui/material';
import { MySnack } from '../../../components/MySnack';

const userSchema = yup.object().shape({
  userNameOrEmailAddress: yup.string().min(5, 'Username phải dài hơn 5 ký tự')
    .max(32, 'Username phải ngắn hơn 32 ký tự').required('Yêu cầu'),
  password: yup.string().min(6, 'Mật khẩu phải dài hơn 5 kí tự').required('Yêu cầu')
});

const boxSX = { '& > :not(style)': { m: 1 }, marginBottom: '40px' }
const iconSX = { color: 'action.active', mr: 1, my: 0.5, marginTop: '20px' }
const labelCheckBoxSX = { '& .MuiSvgIcon-root': { fontSize: 25, color: '#3f51b5' } }

export const LoginForm = () => {
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const navigate = useNavigate();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      userNameOrEmailAddress: '',
      password: '',
    },
    validationSchema: userSchema,
    onSubmit: async () => {
      axios.get('https://62ba7bf7573ca8f832856dda.mockapi.io/api/IST/user')
        .then(res => {
          const data = res.data;
          let check = false;
          data.forEach(e => {
            if (values.userNameOrEmailAddress === e.username && values.password === e.password) {
              localStorage.userId = e.userId;
              localStorage.img = e.avatar;
              check = true;
            }
          })
          if (check) {
            localStorage.setItem('login', true)
            navigate('/')
            window.location.reload()
          } else {
            setOpenSnackBar(true)
          }
        }
        )
    },
  })


  return (
    <form onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <Box sx={boxSX}>
        <Box id='Box'>
          <EmailIcon sx={iconSX} />
          <TextField label="Username" variant="standard" className='form__group'
            onChange={handleChange} value={values.userNameOrEmailAddress}
            id="userNameOrEmailAddress" name="userNameOrEmailAddress" type="text" />
        </Box>
        {touched.userNameOrEmailAddress && errors.userNameOrEmailAddress ? (
          <div className='error'>{errors.userNameOrEmailAddress}</div>
        ) : null}
      </Box>
      <Box sx={boxSX}>
        <Box id='Box'>
          <HttpsRoundedIcon sx={iconSX} />
          <TextField label="Password" variant="standard" className='form__group'
            onChange={handleChange} value={values.password}
            id="password" name="password" type="password" />
        </Box>
        {touched.password && errors.password ? (
          <div className='error'>{errors.password}</div>
        ) : null}
      </Box>
      <Link to='forgotpassword' className='forgotPassword'>Quên mật khẩu</Link>
      <div className='submit_login row_container'>
        <FormGroup>
          <FormControlLabel control={
            <Checkbox value={values.rememberClient} onChange={handleChange} name='rememberClient' />
          } label="Ghi nhớ đăng nhập"
            sx={labelCheckBoxSX} />
        </FormGroup>
        <div>
          <Button sx={{ textDecoration: 'none' }} type="submit" variant='contained'>Đăng nhập</Button>
        </div>
      </div>
      <MySnack content='Sai tên đăng nhập hoặc mật khẩu!!' state='error' open={openSnackBar} setOpen={setOpenSnackBar} />
    </form>
  )
}