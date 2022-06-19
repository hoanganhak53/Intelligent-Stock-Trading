import React from 'react'

export const Cmt = (prop) => {
  return (
    <div style={{marginTop:'20px'}}>
        <div className='row_container'>
            <img style={{width:'32px', height:'32px',borderRadius:'5px', marginRight:'10px'}}
                src={prop.img}
            ></img>
            <div style={{marginLeft:'8px'}}>
                <div className='row_container'>
                    <p style={{fontSize:'1.0rem', fontWeight:'550'}}>{prop.name}</p>
                    <p style={{color:'gray', fontSize:'0.8rem', fontWeight:'550', marginLeft:'8px'}}>
                        {prop.time}</p> 
                </div>
                <p style={{fontSize:'0.88rem', fontWeight:'500',marginTop:'5px'}}>
                    {prop.text}
                </p>
            </div>

        </div>
    </div>
  )
}
