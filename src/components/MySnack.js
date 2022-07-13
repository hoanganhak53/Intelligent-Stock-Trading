import { Alert, Snackbar } from '@mui/material';
import React from 'react'

export const MySnack = (props) => {

    const handleCloseSB = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setOpen(false);
    };

    return (
        <Snackbar open={props.open} autoHideDuration={6000} onClose={handleCloseSB}>
            <Alert onClose={handleCloseSB} severity={props.state} sx={{ width: '100%' }}>
                {props.content}
            </Alert>
        </Snackbar>
    )
}
