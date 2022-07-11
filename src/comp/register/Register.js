import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const Register = () => {
    const form = useRef();
    const newPassword = Math.random().toString(36).slice(2)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_w9um9sn', 'template_l1tmjnm', form.current, 'SiziTCVKwe7qKl1Bd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Email</label>
            <input type="email" name="user_email" />
            <input type="password" name="password" value={newPassword} style={{display: 'none'}}/>
            <input type="submit" value="Send" />
        </form>
    )
}