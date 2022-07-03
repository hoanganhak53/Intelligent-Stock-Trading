import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CommentIcon from '@mui/icons-material/Comment';
import {  TextField, Tooltip } from '@mui/material';
import { Cmt } from './Cmt';
import { Markup } from 'interweave';
import { baseAPI } from '../../api/baseAPI';

const datas = "Trong hai ngày cuối tuần diễn biến thị trường có thể sẽ biến động mạnh do bối cảnh LẠM PHÁT vẫn chưa hạ nhiệt, chúng ta không thể nắm rõ trước thông tin của thị trường vậy nên chúng ta nên cẩn trọng và hạn chế giao dịch hai ngày cuối tuần nhé !<br/>Khuyến nghị giao dịch :<br/>CANH BUY XAUUSD TẠI VÙNG GIÁ 1825 - 1828<br/>Stop Loss : 1810<br/>Take Profit 1 : 1845<br/>Take Profit 2 : 1850<br/>Take Profit 3 : 1860<br/>CANH SELL XAUUSD TẠI VÙNG GIÁ 1852 - 1855<br/>Stop Loss : 1865<br/>Take Profit 1 : 1840<br/>Take Profit 2 : 1830<br/>Take Profit 3 : 1820<br/>Lưu ý : Hãy điền TP và SL một cách cụ thể trong giao dịch, và nó sẽ giúp bạn an toàn hơn trong công cuộc chinh phục thị trường tài chính<br/>Sau cùng, chúc bạn đọc một ngày làm hiệu hiệu quả và thành công !"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogCmt(props) {
  const [t, setT] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const [data, setData] = React.useState([
    {
      "createdAt": "2022-07-02T10:04:57.778Z",
      "userId": 2,
      "postId": 1,
      "content": "Bài viết rất hay",
      "commentId": "1"
     }
  ]);
  React.useEffect(() => {
    baseAPI.get('/comments')
    .then(res => {
      setData(res.data);
    })
  },[refresh])

  const handlePostComment = async () => {
    await baseAPI.post('/comments', {
        "userId": localStorage.userId,
        "postId": props.postId,
        "content": t,
    })
    setT('');
    setRefresh(!refresh);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <Tooltip aria-label="add to favorites" sx={{color:'gray', marginLeft:'10px'}} title="Bình luận" onClick={handleClickOpen}>
            <IconButton>
              <CommentIcon />
            </IconButton>
        </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth='lg'
        sx={{padding:'20px'}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div className='row_container'>
            <img style={{width:'70px', height:'70px', borderRadius:'5px'}}
              src={props.avatar}></img>
            <div style={{marginLeft:'20px', paddingTop:'0px'}}>
              <p style={{fontSize:"1.2rem"}}>{props.title}</p>
              <p style={{color:'blue', fontSize:'0.9rem', fontWeight:'600'}}>{props.tag}</p>
              <div className='row_container'>
                <p style={{fontSize:'0.85rem',fontWeight:'550'}}>{props.name}</p>
                <p className='chip'>PREMIUM</p>
                <p style={{color:'gray', fontSize:'0.85rem', fontWeight:'550',marginLeft:'20px'}}>{props.time.split('T')[0]}</p>
              </div>
            </div>
          </div>
        </BootstrapDialogTitle>
        <DialogContent className='row_container'>
        <DialogContent dividers sx={{width:'70%'}}>
          <img style={{width:'100%', height:'400px',margin:'15px 0px'}} 
            src={props.image}></img>
          <Typography gutterBottom>
            <Markup content={datas}></Markup>
          </Typography>          
        </DialogContent>
        <DialogContent dividers sx={{width:'30%'}}>
          <p style={{fontSize:'1.2rem', fontWeight:'550', marginBottom:'10px'}}>Bình luận</p>
          <TextField variant="outlined" minRows='2' multiline
            placeholder="Hãy cùng nhau làmg chủ thị trường"
            style={{ width: '100%', marginBottom:'10px' }}
            value={t}
            onChange={(e) => setT(e.target.value)}
          />
          <Button variant="contained" size='small' onClick={handlePostComment}>Đăng bình luận</Button>
          {data.filter(e => {return e.postId == props.postId}).map(e => (
            <Cmt userId={e.userId} content={e.content} createdAt={e.createdAt}></Cmt>            
          ))

          }
        </DialogContent>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}