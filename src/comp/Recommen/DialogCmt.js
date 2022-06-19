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

export default function DialogCmt() {
  const [t, setT] = React.useState('')
  const [open, setOpen] = React.useState(false);
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
              src='https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/4/3/photo-1-164898078911925735845.jpg'></img>
            <div style={{marginLeft:'20px', paddingTop:'0px'}}>
              <p style={{fontSize:"1.2rem"}}>Nhận định thị trường GOLD Tuần 20/6/2022 - 24/6/2022</p>
              <p style={{color:'blue', fontSize:'0.9rem', fontWeight:'600'}}>Vàng / Đô la Mỹ (OANDA:XAUUSD)</p>
              <div className='row_container'>
                <p style={{fontSize:'0.85rem',fontWeight:'550'}}>Hoang Anh</p>
                <p className='chip'>PREMIUM</p>
                <p style={{color:'gray', fontSize:'0.85rem', fontWeight:'550',marginLeft:'20px'}}>Tháng 6 18</p>
              </div>
            </div>
          </div>
        </BootstrapDialogTitle>
        <DialogContent className='row_container'>
        <DialogContent dividers sx={{width:'70%'}}>
          <img style={{width:'100%', height:'400px',margin:'15px 0px'}} 
            src='https://nganhangviet.org/wp-content/uploads/2020/01/gia-vang-tay1-1-e1578715824651.jpg'></img>
          <Typography gutterBottom>
            <Markup content={t}></Markup>
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
          <Button variant="contained" size='small' onClick={() => console.log(t)}>Đăng bình luận</Button>
          <Cmt name='Hoang Duy' text='Hello anh em :)))' 
            time='10 giờ trước' img='https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'></Cmt>
          <Cmt name='Nguyen Anh' text='Lô cái *** gì????' 
            time='2 giờ trước' img='https://i.ytimg.com/vi/TqHYZE4k8Uc/maxresdefault.jpg'></Cmt>
        </DialogContent>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}