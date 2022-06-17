import React from 'react'
import { FooterLogin } from './FooterLogin'
import { DangKyForm } from './form/DangKyForm'

export const DangKy = () => {
  return (
    <div className="login-wrapper">
    <h1>TradingView</h1>
    <div className='form_login'>
      <DangKyForm />
    </div>
    <div style={{height:'20px'}}></div>
    <FooterLogin/>
  </div>
  )
}
