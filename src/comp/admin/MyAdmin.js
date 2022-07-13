import { Stack } from '@mui/material';
import * as React from 'react';
import { TableCmt } from './TableCmt';
import { TablePosts } from './TablePosts';
import { TableUser } from './TableUser';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import CommentIcon from '@mui/icons-material/Comment';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import { Link, Route, Routes } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { MySnack } from '../../components/MySnack';

export const MyAdmin = () => {
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  return (
    <Stack direction='row'>
      <ProSidebar style={{height: '800px', backgroundColor:'#222'}} breakPoint='md'>
        <Menu iconShape="square">
          <MenuItem icon={<PersonIcon />}>Users  <Link to="/admin/user" /></MenuItem>
          <MenuItem icon={<BookIcon />}>Posts <Link to="/admin/posts" /></MenuItem>
          <MenuItem icon={<CommentIcon />}>Comments <Link to="/admin/comment" /></MenuItem>
          <MenuItem onClick={() => {window.location.reload()}} icon={<LogoutIcon />}>Out <Link to="/" /></MenuItem>
        </Menu>
      </ProSidebar>
      <Routes>
        <Route path='user' element={<TableUser setOpenSnackBar={setOpenSnackBar}/>} />
        <Route path='posts' element={<TablePosts setOpenSnackBar={setOpenSnackBar}/>} />
        <Route path='comment' element={<TableCmt setOpenSnackBar={setOpenSnackBar}/>} />
      </Routes>
      <MySnack  content='Xoá thành công' state='success' open={openSnackBar} setOpen={setOpenSnackBar} />
    </Stack>
  );
}
