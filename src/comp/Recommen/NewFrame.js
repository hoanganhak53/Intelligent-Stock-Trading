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

export function NewFrame() {
  const [isLike,setLike] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 450, marginBlock:'20px', marginInline:'20px',boxShadow: '0 0 0 1px #e0e3eb', padding:'14px' }}>
      <p style={{fontSize:'1.5rem', fontWeight:'660'}}>Nhận định thị trường GOLD Tuần 20/6/2022 - 24/6/2022</p>
      <CardMedia
        sx={{marginTop:'10px'}}
        component="img"
        height="220"
        image="https://media.warriortrading.com/2019/08/shutterstock_775889491.jpg"
        alt="Paella dish"
      />
    <div style={{marginTop:'10px', alignItems:'center'}} className='row_container'>
        <img style={{width:'36px', height:'36px', borderRadius:'10px'}}
         src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/4/3/photo-1-164898078911925735845.jpg'></img>
        <p style={{fontWeight:'550', paddingLeft:'10px'}}>Hoang Anh</p>
        <p style={{position:'absolute', marginLeft:'360px', color:'gray', fontSize:'0.85rem'}}>Tháng 6 17</p>
    </div>

      <div style={{marginTop:'15px', marginBottom:'5px'}}>
        <Typography variant="body2" color="text.secondary" className='text_new_ideal'>
        Chúc mừng cả nhà ngày hôm nay, chúng ta đã có một xu hướng đi vô cùng chính xác và thành công khi chúng ta tham gia vào
vị thế BÁN của GOLD từ mốc 1850 về 1834 theo đúng nhận định và đã đạt được lợi nhuận + 160 PIP theo chiến lược . Một lần nữa xin chúc mừng các nhà đầu tư !
        </Typography>
      </div>
      <CardActions disableSpacing>
        <Tooltip aria-label="add to favorites" sx={{color:'gray'}} title="Thích" onClick={() => setLike(!isLike)}>
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
            <DialogCmt />     
        </div>

      </CardActions>
    </Card>
  );
}
