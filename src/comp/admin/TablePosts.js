import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { baseAPI } from '../../api/baseAPI';
import { format } from 'date-fns'
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";


export const TablePosts = () => {
    const [data, setData] = React.useState([
        {
            "createAt": "2022-06-29T17:52:24.471Z",
            "title": "Future Brand Consultant",
            "content": "Quaerm ri quisquam.",
            "like": 402,
            "image": "http://loremflickr.com/640/480/business",
            "postId": "2",
            "userId": "2",
            "tag": "Vàng / Đô la Mỹ (OANDA:XAUUSD) ",
            "role": 0
        }
    ]);

    const columns = [
        { field: 'postId', headerName: 'ID', width: 70 },
        { field: 'userId', headerName: 'User Id', width: 70 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'tag', headerName: '#HashTag', width: 200 },
        { field: 'content', headerName: 'Content', width: 240 },
        {
            field: 'createAt', headerName: 'Create at', width: 180,
            valueGetter: (params) =>
                `${format(new Date(params.row.createAt), 'MM/dd/yyyy h:mm b')}`,
        },
        {
            field: "action",
            headerName: " ",
            width: 100,
            renderCell: (params) => (
                <IconButton onClick={() => {
                    baseAPI.delete(`posts/${params.row.postId}`)
                    .then(() => {
                        setData(data.filter(e => e.postId !== params.row.postId))
                    })
                }}>
                    <DeleteIcon />
                </IconButton>
            )
        }
    ];


    React.useEffect(() => {
        baseAPI.get(`posts`)
            .then(res => {
                setData(res.data)
            })
    }, [])

    return (
        <div style={{ height: 640, width: '100%', margin: '50px 5%' }}>
            <DataGrid getRowId={(row) => row.postId}
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
            />
        </div>
    );
}
