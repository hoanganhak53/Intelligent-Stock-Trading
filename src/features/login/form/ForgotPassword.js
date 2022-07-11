import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Button, Divider, TextField } from '@mui/material';
import { HeaderLogin } from '../HeaderLogin';
import { useNavigate } from 'react-router-dom';
import { Stack } from '../../../components/Stack';
import { baseAPI } from '../../../api/baseAPI';

export const ForgotPassword = () => {
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const navigate = useNavigate()
    const form = useRef();
    const [email, setEmail] = useState('')
    const newPassword = Math.random().toString(36).slice(2)
    const sendEmail = (e) => {
        // e.preventDefault();
        // emailjs.sendForm('service_w9um9sn', 'template_l1tmjnm', form.current, 'SiziTCVKwe7qKl1Bd')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // baseAPI.get(`user`)
        //     .then((res) => {
        //         res.data.map(element => {
        //             if (element.link === email){
        //                 baseAPI.post(`user/${element.userId}`, {
        //                     password: newPassword
        //                 })
        //             }
        //         })
        //     })
        setOpenSnackBar(true)
    }
    return (
        <div className='forgot-pass'>
            <HeaderLogin />
            <div className='send-email'>
                <h2>Tìm tài khoản của bạn</h2>
                <Divider />
                <form ref={form} onSubmit={sendEmail} className='form-send-mail'>
                    <p style={{ margin: '20px 0px', fontSize: '1.1rem' }}>Vui lòng nhập email để tìm kiếm tài khoản của bạn</p>
                    <TextField onChange={(e) => setEmail(e.target.value)} variant='outlined' label='Email' type="email" name="user_email" sx={{ marginBottom: '20px', width: '100%' }} />
                    <input type="password" name="password" value={newPassword} style={{ display: 'none' }} />
                    <Divider />
                    <Button onClick={() => navigate('/login')} sx={{ margin: '15px 10px 15px 250px' }} color='inherit' variant="contained">Hủy</Button>
                    <Button type='submit' variant="contained">Gửi</Button>
                </form>
            </div>
            <Stack content='Mật khẩu mới đã được gửi về mail của bạn' state='info' open={openSnackBar} setOpen={setOpenSnackBar} />
        </div>
    )
}