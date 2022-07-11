import './Login.css';
import { HeaderLogin } from './HeaderLogin';
import { FooterLogin } from './FooterLogin';
import { LoginForm } from './form/LoginForm';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ForgotPassword } from './form/ForgotPassword';

function Login() {
  return (
    <Routes>
      <Route path='' element={
        <div className="login-wrapper">
          <HeaderLogin />
          <div className='form_login'>
            <LoginForm />
          </div>
          <FooterLogin />
        </div>} />
      <Route path='forgotpassword' element={<ForgotPassword/>}/>
    </Routes>

  );
}

export default Login;