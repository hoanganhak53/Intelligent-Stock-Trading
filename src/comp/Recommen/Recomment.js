import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { baseAPI } from '../../api/baseAPI'
import { Paging } from '../../components/Paging'
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
      "postId": 2,
      "userId": 1,
      "tag": "Vàng / Đô la Mỹ (OANDA:XAUUSD) ",
      "role": 0
     }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [taskPerPage] = useState(6);
  const indexOfLastTask = currentPage * taskPerPage;
  const indexOfFirstTask = indexOfLastTask - taskPerPage;
  useEffect(() => {
    baseAPI.get('/posts')
    .then(res => {
      setData(res.data.sort((a, b) => b.postId - a.postId));
    })
  },[])
  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <div style={{marginTop:'50px'}}>
        <div style={{marginBottom:'30px',marginRight:'15%', marginLeft:'15%'}}>
            <p style={{color:'gray',marginBottom:'20px'}}>Ý tưởng</p>
            <p style={{fontSize:'2rem', fontWeight:'600'}}>PHÂN TÍCH XU HƯỚNG</p>
        </div>
        <Divider variant='fullWidth'/>
        <PushRecomment/>
        <div style={{margin:'30px 15%',display:'flex', flexWrap:'wrap'}}>
          {data.slice(indexOfFirstTask, indexOfLastTask).filter(e => e.role >= Number(localStorage.role)).map(e => (
            <NewFrame title={e.title} content={e.content} like={e.like} tag={e.tag} 
              image={e.image} userId={e.userId} time={e.createAt} postId={e.postId}/>
          ))}
        </div>
        <div style={{margin:'0px 0px 20px 70% '}}>
          <Paging taskPerPage={taskPerPage} totalTasks={data.filter(e => e.role >= Number(localStorage.role)).length}
          paginate={handleChangePage} currentPage={currentPage} />          
        </div>

    </div>
  )
}
