import { Button, Tooltip } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; import EmailIcon from '@mui/icons-material/Email';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Facebook } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseAPI } from '../../api/baseAPI';

export const HeaderProfile = () => {
  let params = useParams();
  const [follow, setFollow] = useState(false);
  const [data, setData] = useState([{
    "username": "Hoanganh",
    "password": "123123",
    "avatar": "https://i.pinimg.com/736x/d7/da/ab/d7daab0ea9127c3b1eb8cc76988cbafb.jpg",
    "link": "hoanganhak53",
    "address": "Ha Noi Viet Nam",
    "phoneNumber": "phoneNumber 1",
    "name": "Hoang Anh",
    "role": false,
    "followers": [],
    "hadFollowered": [],
    "about": "about 1",
    "numPost": 15,
    "createdAt": "2022-07-02T15:06:11.697Z",
    "numFollower": 37,
    "userId": "1"
  }])
  const [followData, setFollowData] = React.useState([
    {
      "createdAt": "2022-07-02T17:05:27.311Z",
      "follower": 1,
      "followed": 2,
      "id": "1"
    }
  ]
  );
  useEffect(() => {
    if (localStorage.login) {
      baseAPI.get(`user/${params.id}`)
        .then(res => {
          setData(res.data)
        })
        baseAPI.get(`/follow`)
        .then(res => {
          setFollowData(res.data);
        })
    }
  }, [])

  const checkFollow = () => {
    if (followData.filter(e => e.followed == params.id && e.follower == localStorage.userId).length === 0)
      return false
    else
      return true
  }
  const handleUnfollow = async () => {
    const id = followData.find(e => e.followed == params.id && e.follower == localStorage.userId).id
    await baseAPI.delete(`/follow/${id}`)
    setFollow(!follow);
  }
  const handleFollow = async () => {
    await baseAPI.post('follow', {
      "follower": localStorage.userId,
      "followed": params.id,
    })
    setFollow(!follow);
  }
  useEffect(() => {
    if (localStorage.login) {
      baseAPI.get(`/follow`)
        .then(res => {
          setFollowData(res.data);
        })
    }
  }, [follow])
  return (
    <div className='row_container' style={{ margin: '50px 15%' }}>
      <img style={{ width: '150px', height: '150px', borderRadius: "5px" }}
        src={data.avatar}></img>
      <div style={{ marginLeft: '40px' }}>
        <div className='row_container' style={{ alignItems: 'center' }}>
          <p style={{ fontSize: '1.75rem', fontWeight: '600' }}>{data.name}</p>
          {data.role && <p className='chip' style={{ fontSize: '0.8rem', padding: '4px 8px' }}>PREMIUM</p>}
          {params.id !== localStorage.userId && <div><Button
            sx={{ textTransform: 'none', marginLeft: '450px' }} variant='outlined'
            onClick={checkFollow() ? handleUnfollow : handleFollow}
            >{checkFollow() ? 'Đang theo dõi':'Theo dõi'}</Button></div>}
        </div>
        <div className='row_container' style={{ marginTop: '20px' }}>
          <CalendarMonthIcon color='action'></CalendarMonthIcon>
          <p style={{ margin: '3px 5px 0px 3px', color: 'gray' }}>Đã tham gian 1 năm trước</p>
          <EmailIcon color='action' sx={{ marginLeft: '50px' }} />
          <p style={{ margin: '3px 5px 0px 3px', color: 'gray' }}>{data.link}@gmail.com</p>
          <Facebook style={{ color: '#1877F2', marginLeft: '50px' }} />
          <a style={{ margin: '3px 5px 0px 3px', color: '#1877F2' }}
            href={`https://www.facebook.com/${data.link}`} target='_blank'>{data.link}</a>
        </div>
        <div className='row_container' style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '1.3rem' }}>{data.numPost}</p>
          <Tooltip aria-label="add to favorites" sx={{ color: 'gray', marginLeft: '15px', marginRight: '100px' }} title="Ý tưởng đã xuất bản" placement="top">
            <AutoStoriesIcon></AutoStoriesIcon>
          </Tooltip>
          <p style={{ fontSize: '1.3rem' }}>142</p>
          <Tooltip aria-label="add to favorites" sx={{ color: 'gray', marginLeft: '15px', marginRight: '100px' }} title="Số lượt thích" placement="top">
            <ThumbUpIcon></ThumbUpIcon>
          </Tooltip>
          <p style={{ fontSize: '1.3rem' }}>{data.numFollower}</p>
          <Tooltip aria-label="add to favorites" sx={{ color: 'gray', marginLeft: '15px' }} title="Người theo dõi" placement="top">
            <PersonSearchIcon></PersonSearchIcon>
          </Tooltip>
        </div>
      </div>

    </div>
  )
}