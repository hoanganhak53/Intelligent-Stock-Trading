import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import EmailIcon from '@mui/icons-material/Email';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { swalLoginFailed } from '../../../swal/LoginFailed';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


const userSchema = yup.object().shape({
  userNameOrEmailAddress: yup.string().min(5, 'Username should be longer than 5 characters')
    .max(32,'Username should be shorter than 32 characters').required('Required'),
  password: yup.string().min(6, 'Password should be longer than 6 characters').required('Required')
});

const boxSX = { '& > :not(style)': { m: 1 } ,marginBottom:'40px'}
const iconSX = { color: 'action.active', mr: 1, my: 0.5, marginTop:'20px' }
const labelCheckBoxSX = { '& .MuiSvgIcon-root': { fontSize: 25, color:'#3f51b5' }}

export const LoginForm = () =>{
    const navigate = useNavigate();
    const {handleSubmit, handleChange, values, touched, errors} = useFormik({
      initialValues:{
        userNameOrEmailAddress:'',
        password: '',
      },
      validationSchema: userSchema,
      onSubmit:async () => {
        axios.get('https://62ba7bf7573ca8f832856dda.mockapi.io/api/IST/user')
        .then(res => {
          const data = res.data;
          let check = false;
          data.forEach(e => {
            if(values.userNameOrEmailAddress === e.username && values.password === e.password){
              localStorage.userId = e.userId;
              localStorage.img = e.avatar;
              check = true;
            }
          })
          if(check){
            localStorage.setItem('login', true)     
            navigate('/')
            window.location.reload()
          }else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Login Falled!',
              
            })
          }
        })
      },
    })
    
    return (
      <form onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <Box sx={boxSX}>
          <Box id='Box'>
            <EmailIcon sx={iconSX} />
            <TextField label="User name or email" variant="standard" className='form__group'                 
              onChange={handleChange} value={values.userNameOrEmailAddress} 
              id="userNameOrEmailAddress" name="userNameOrEmailAddress" type="text"/>
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
        <div className='' style={{color:'#00bcd4', fontSize:'0.8rem', fontWeight:'600',marginLeft:'17px'}}>
          Forgot your password?
        </div>
        <div className='submit_login row_container'> 
          <FormGroup>
            <FormControlLabel control={
              <Checkbox value={values.rememberClient} onChange={handleChange} name='rememberClient'/>
            } label="Remember me"
              sx={labelCheckBoxSX} />
          </FormGroup>         
          <div>
            <button type="submit">Log in</button>                
          </div>
        </div>
      </form>          
    )
}