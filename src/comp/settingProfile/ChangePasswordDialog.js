import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { baseAPI } from '../../api/baseAPI';

export function ChangePasswordDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSave = () => {
    baseAPI.put(`user/${localStorage.userId}`, {
      password
    }).then(() => {
      props.setOpenSnackBar(true);
    })
    setOpen(false);
  };


  return (
    <div>
      <Button variant='outlined' size='small'  onClick={handleClickOpen} sx={{textTransform:'none', marginBottom:'30px'}}>Đổi mật khẩu</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Đổi mật khẩu</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Mật khẩu cũ"
            type="password"
            fullWidth
            variant="standard"
            sx={{marginBottom:'30px'}}
          />
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mật khẩu mới"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            fullWidth
            variant="standard"
            sx={{marginBottom:'30px'}}
          />
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nhập lại mật khẩu mới"
            type="password"
            fullWidth
            variant="standard"
            sx={{marginBottom:'30px'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}