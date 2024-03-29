import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import Tooltip from '@mui/material/Tooltip';
import { FacebookShareButton } from 'react-share';
import DialogCmt from './DialogCmt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';
import { baseAPI } from '../../api/baseAPI';
import { Markup } from 'interweave';
import { useNavigate } from 'react-router-dom';

export function NewFrame(props) {
  const navigate = useNavigate()
  const [isLike,setLike] = React.useState(false);
  const [numLike,setNumLike] = React.useState(Number(props.like));

  const [data, setData] = React.useState(
    {
        "username": "hoanganh",
        "password": "123123",
        "avatar": "https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg",
        "link": "hoanganhak53",
        "address": "Viet Nam",
        "phoneNumber": "091239412",
        "name": "Hoang Anh",
        "role": 0,
        "followers": [],
        "hadFollowered": [],
        "about": "khong co gi ca",
        "userId": "1"
       }
  );
  React.useEffect(() => {
      baseAPI.get(`/user/${props.userId}`)
          .then(res => {
              setData(res.data);
          })
  }, [])
  const handleLike = () => {
    if(isLike){
      setNumLike(numLike-1);
    }else{
      setNumLike(numLike+1);
    }
    setLike(!isLike);
  }
  return (
    <Card sx={{ maxWidth: 450, marginBlock:'20px', marginInline:'20px',boxShadow: '0 0 0 1px #e0e3eb', padding:'14px' }}>
      <div style={{height:'60px'}}><p style={{fontSize:'1.5rem', fontWeight:'660'}}>{props.title}</p></div>
      <CardMedia
        sx={{marginTop:'10px'}}
        component="img"
        height="220"
        image={props.image}
        alt="Paella dish"
      />
    <div style={{marginTop:'10px', alignItems:'center'}} className='row_container' onClick={() => navigate(`/profile/${props.userId}`)}>
        <img style={{width:'36px', height:'36px', borderRadius:'10px'}}
         src={data.avatar}></img>
        <p style={{fontWeight:'550', paddingLeft:'10px'}}>{data.name}</p>
        <p style={{position:'absolute', marginLeft:'360px', color:'gray', fontSize:'0.85rem', fontWeight:'550'}}>{props.time.split('T')[0]}</p>
    </div>

      <div style={{marginTop:'15px', marginBottom:'5px'}}>
        <Typography variant="body2" color="text.secondary" className='text_new_ideal'>
          <Markup content={props.content} className='text_new_ideal'></Markup>
        </Typography>
      </div>
      <CardActions disableSpacing>
        <Tooltip aria-label="add to favorites" sx={{color:'gray'}} title={numLike + " Like" } onClick={handleLike}>
          <IconButton>
           <ThumbUpIcon color={isLike ? 'primary' : ''}/>
          </IconButton>
        </Tooltip>
        <div style={{marginLeft:'300px'}}>
            <Tooltip aria-label="add to favorites"sx={{color:'gray'}} title="Chia sẻ">
            <FacebookShareButton
                url={"https://vn.tradingview.com/i/YMsuPu0m/"}
                quote={"ds"}
                hashtag={"#hashtag"}
                description={"aiueo"}
                className="Demo__some-network__share-button"
            ><IconButton><ShareIcon sx={{color:'gray'}}></ShareIcon></IconButton></FacebookShareButton>
            </Tooltip>
            <DialogCmt title={props.title} content={props.content}  postId={props.postId} name={data.name} avatar={data.avatar}
              image={props.image} userId={props.userId} time={props.time} tag={props.tag}/>     
        </div>
      </CardActions>
    </Card>
  );
}
