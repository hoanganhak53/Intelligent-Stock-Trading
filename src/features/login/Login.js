import './Login.css';
import { GoogleForm } from './form/GoogleForm';
import { HeaderLogin } from './HeaderLogin';
import { FooterLogin } from './FooterLogin';
import { LoginForm } from './form/LoginForm';
import React from 'react'

function Login() {
    return (
        <div className="login-wrapper">
          <HeaderLogin />
          <div className='form_login'>
            <LoginForm />
            <GoogleForm />
          </div>
          <FooterLogin/>
        </div>
  );
}

export default Login;