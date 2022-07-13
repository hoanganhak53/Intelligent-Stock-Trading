import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DangKyForm } from './form/DangKyForm'
import { FormFill } from './form/FormFill'
import { HeaderLogin } from './HeaderLogin'

export const DangKy = () => {
  return (
    <Routes>
      <Route path='' element={
        <div className="login-wrapper">
          <HeaderLogin />
          <div className='form_login'>
            <DangKyForm />
          </div>
          <div style={{ height: '20px' }}></div>
          <small style={{ paddingBottom: '60px' }}>© 2022 ITS.<b> Version </b>4.3.0.0 [20222005]</small>
        </div>} />
      <Route path='form_fill/*' element={<FormFill />}/>
    </Routes>
  )
}
