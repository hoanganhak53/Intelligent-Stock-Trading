import { Button, Tooltip } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';import EmailIcon from '@mui/icons-material/Email';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Facebook } from '@material-ui/icons';

export const HeaderProfile = () => {
  return (
    <div className='row_container' style={{margin:'30px 15%'}}>
        <img style={{width:'150px', height:'150px', borderRadius:"5px"}} 
            src='https://s3.tradingview.com/userpics/1285035-LLte_big.png'></img>
        <div style={{marginLeft:'40px'}}>
            <div className='row_container'>
                <p style={{fontSize:'1.75rem', fontWeight:'600'}}>Hoang Anh</p>
                <div><Button sx={{textTransform:'none', marginLeft:'500px'}} variant='outlined'>Theo dõi</Button></div>
            </div>
            <div className='row_container' style={{marginTop:'20px'}}>
                <CalendarMonthIcon color='action'></CalendarMonthIcon>
                <p style={{margin:'3px 5px 0px 3px', color:'gray'}}>Đã tham gian 1 năm trước</p>
                <EmailIcon color='action' sx={{marginLeft:'50px'}}/>
                <p style={{margin:'3px 5px 0px 3px', color:'gray'}}>hoanganhak53@gmail.com</p>
                <Facebook style={{color:'#1877F2', marginLeft:'50px'}}/>
                <p style={{margin:'3px 5px 0px 3px',color:'#1877F2'}}>hoanganhak53</p>
            </div>
            <div className='row_container' style={{marginTop:'20px'}}>
            <p style={{ fontSize:'1.3rem'}}>0</p>
            <Tooltip aria-label="add to favorites" sx={{color:'gray', marginLeft:'15px', marginRight:'100px'}} title="Ý tưởng đã xuất bản"  placement="top">
                <AutoStoriesIcon></AutoStoriesIcon>
            </Tooltip>
            <p style={{fontSize:'1.3rem'}}>0</p>
            <Tooltip aria-label="add to favorites" sx={{color:'gray', marginLeft:'15px', marginRight:'100px'}} title="Số lượt thích" placement="top">
                <ThumbUpIcon></ThumbUpIcon>
            </Tooltip>
            <p style={{ fontSize:'1.3rem'}}>0</p>
            <Tooltip aria-label="add to favorites" sx={{color:'gray', marginLeft:'15px'}} title="Người theo dõi"  placement="top">
                <PersonSearchIcon></PersonSearchIcon>
            </Tooltip>
            </div>
            <div className='row_container' style={{fontSize:'0.7rem',fontWeight:'600', marginTop:'5px'}}>
                <p style={{color:'gray',marginLeft:'15px'}}>Ý TƯỞNG</p>
                <p style={{marginLeft:'100px',color:'gray'}}>THÍCH</p>    
                <p style={{marginLeft:'87px',color:'gray'}}>NGƯỜI THEO DÕI</p>    
            </div>  
        </div>

    </div>
  )
}