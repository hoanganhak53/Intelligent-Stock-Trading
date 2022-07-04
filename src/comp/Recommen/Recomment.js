import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { baseAPI } from '../../api/baseAPI'
import { NewFrame } from './NewFrame'
import PushRecomment from './PushRecomment'

export const Recomment = () => {
  const [data, setData] = useState([
    {
      "createAt": "2022-06-29T17:52:24.471Z",
      "title": "Future Brand Consultant",
      "content": "Quaerm ri quisquam.",
      "like": 402,
      "image": "http://loremflickr.com/640/480/business",
      "postId": "2",
      "userId": "1",
      "tag": "Vàng / Đô la Mỹ (OANDA:XAUUSD) ",
     }
  ]);
  useEffect(() => {
    baseAPI.get('/posts')
    .then(res => {
      setData(res.data);
    })
  },[])

  return (
    <div style={{marginTop:'50px'}}>
        <div style={{marginBottom:'30px',marginRight:'15%', marginLeft:'15%'}}>
            <p style={{color:'gray',marginBottom:'20px'}}>Ý tưởng</p>
            <p style={{fontSize:'2rem', fontWeight:'600'}}>PHÂN TÍCH XU HƯỚNG</p>
        </div>
        <Divider variant='fullWidth'/>
        <PushRecomment/>
        <div style={{margin:'30px 15%',display:'flex', flexWrap:'wrap'}}>
          {data.map(e => (
            <NewFrame title={e.title} content={e.content} like={e.like} tag={e.tag} 
              image={e.image} userId={e.userId} time={e.createAt} postId={e.postId}/>
          ))}
        </div>
    </div>
  )
}
