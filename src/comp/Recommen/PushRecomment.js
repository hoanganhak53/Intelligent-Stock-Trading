import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Snackbar, Stack, TextareaAutosize, TextField } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import LinkIcon from '@mui/icons-material/Link';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { baseAPI } from '../../api/baseAPI';

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

export default function PushRecomment() {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [image, setImage] = React.useState('');
    const [content, setContent] = React.useState('');
    const [tag, setTag] = React.useState('');

    const handleClickOpen = () => {
        if(localStorage.role === 'true'){
            setOpen(true)
        }
        else{
            setOpenSnackBar(true)
        }
    };

    const handleClose = () => {
        setOpen(false);
    }
    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const handleCloseSB = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackBar(false);
    };
    const handleSave = async () => {
        if(content === ''){
            setOpenSnackBar(true);
        }else{
            const text = content.replace(/\n/g, "<br/>")
            await baseAPI.post('/posts', {
                userId: localStorage.userId,
                title,
                image,
                content: text,
                like: 0,
                tag
            })
            setOpen(false);
            window.location.reload()            
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} sx={{margin:'20px 0px 0px 70%', textTransform:'none'}}>
                Xuất bản ý tưởng
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth
                maxWidth='md'
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Xuất bản ý tưởng
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div style={{padding:'10px 20px'}}>
                        <p style={{margin:'5px 0px'}}>Tiêu đề và Mô tả Ý tưởng</p>
                        <TextField size="small" sx={{width:'850px'}} onChange={(e) => setTitle(e.target.value)}></TextField>
                        <Stack direction='row'>
                            <div style={{marginRight:'50px'}}>
                                <p style={{margin:'5px 0px'}}>Đường dẫn ảnh</p>
                                <TextField size="small" sx={{width:'400px'}} onChange={(e) => setImage(e.target.value)}></TextField>                                
                            </div>
                            <div>
                                <p style={{margin:'5px 0px'}}>Hashtag</p>
                                <TextField size="small" sx={{width:'400px'}} onChange={(e) => setTag(e.target.value)}></TextField>
                            </div>
                        </Stack>

                        <Stack direction='row'>
                            <IconButton onClick={() => setContent(content + '<b></b>')}>
                                <FormatBoldIcon />
                            </IconButton>
                            <IconButton onClick={() => setContent(content + '<i></i>')}>
                                <FormatItalicIcon />
                            </IconButton>
                            <IconButton onClick={() => setContent(content + "<a href=''></a>")}>
                                <LinkIcon />
                            </IconButton>
                            <IconButton onClick={() => setContent(content + `\n<ul>\n\t<li></li>\n</ul>`)}>
                                <FormatListBulletedIcon />
                            </IconButton>
                        </Stack>
                        <TextareaAutosize value={content} onChange={(e) => {setContent(e.target.value)}}
                            style={{whiteSpace:'pre-line', width:'850px', padding:'5px', fontSize:'1rem'}} maxWidth minRows={10}>
                        </TextareaAutosize>                        
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSave} variant='contained' sx={{margin:'5px 20px 5px 0px', textTransform:'none'}}>
                        Đăng bài
                    </Button>
                </DialogActions>
            </BootstrapDialog>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSB}>
                <Alert onClose={handleCloseSB} severity="error" sx={{ width: '100%' }}>
                {localStorage.role == true ? "Hãy điền đủ nội dung" : "Tài khoản của bạn không được phép đăng bài"}
                </Alert>
            </Snackbar>
        </div>
    );
}