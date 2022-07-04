import { Button, Stack, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseAPI } from '../../api/baseAPI';

export const Follower = (props) => {
  const navigate = useNavigate()
  const [follow, setFollow] = useState(props.follow)
  const [data, setData] = React.useState(
    {
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
     }
);
React.useEffect(() => {
    baseAPI.get(`/user/${props.userId}`)
        .then(res => {
            setData(res.data);
        })
}, [])

  const handleUnfollow = async () => {
    await baseAPI.delete(`/follow/${props.id}`)
    setFollow(!follow);
    props.setRefresh(!props.refresh)
  }
  const handleFollow = async () => {
    await baseAPI.post('follow', {
      "follower": localStorage.userId,
      "followed": props.userId,
    })
    setFollow(!follow);
    props.setRefresh(!props.refresh)
  }
  return (
    <Stack direction='row' alignItems='center' sx={{padding:'15px 30px', marginTop:'20px', width:'400px', marginRight:'70px',
    borderRadius:'5px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} justifyContent='space-between'>
      <Stack direction='row' alignItems='center' onClick={() => {navigate(`/profile/${props.userId}`); window.location.reload()}}>
        <img style={{width:'64px', height:'64px', borderRadius:'8px'}} src={data.avatar}></img>
        <b style={{paddingLeft:'10px', fontSize:'1rem'}}>{data.name}</b>
          {data.role && <p className='chip'>PREMIUM</p>}
      </Stack>
        {follow ?
        <Button variant='outlined' sx={{ textTransform:'none'}} onClick={handleUnfollow}> Đang theo dõi</Button>
        :
        <Button variant='outlined' sx={{ textTransform:'none'}} onClick={handleFollow}>Theo dõi</Button>
        }
    </Stack>
  )
}
