import { Divider } from '@mui/material'
import React from 'react'
import { NewFrame } from './NewFrame'

export const Recomment = () => {
  return (
    <div style={{marginTop:'50px'}}>
        <div style={{marginBottom:'30px',marginRight:'15%', marginLeft:'15%'}}>
            <p style={{color:'gray',marginBottom:'20px'}}>Ý tưởng</p>
            <p style={{fontSize:'2rem', fontWeight:'600'}}>PHÂN TÍCH XU HƯỚNG</p>
        </div>
        <Divider variant='fullWidth'/>
        <div style={{margin:'30px 15%',display:'flex', flexWrap:'wrap'}}>
            <NewFrame />
            <NewFrame />
            <NewFrame />
            <NewFrame />

        </div>
    </div>
  )
}
