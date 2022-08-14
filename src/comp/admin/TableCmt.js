import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { baseAPI } from '../../api/baseAPI';
import { format } from 'date-fns'
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton, Tooltip } from "@material-ui/core";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { CSVLink } from "react-csv";

export const TableCmt = (props) => {
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
    }, [])

    const columns = [
        { field: 'commentId', headerName: 'ID', width: 70 },
        { field: 'userId', headerName: 'User ID', width: 70 },
        { field: 'postId', headerName: 'Post ID', width: 70 },
        { field: 'content', headerName: 'Content', width: 570 },
        {
            field: 'createdAt', headerName: 'Create at', width: 180,
            valueGetter: (params) =>
                `${format(new Date(params.row.createdAt), 'MM/dd/yyyy h:mm b')}`,
        },
        {
            field: "action",
            headerName: " ",
            width: 100,
            renderCell: (params) => (
                <IconButton onClick={() => {
                    baseAPI.delete(`user/${params.row.commentId}`)
                        .then(() => {
                            setData(data.filter(e => e.commentId !== params.row.commentId))
                            props.setOpenSnackBar(true)
                        })
                }}>
                    <DeleteIcon />
                </IconButton>
            )
        }
    ];

    return (
        <div style={{ width: '74%' }}>
            <Tooltip title="Download Data" style={{ margin: '20px 50px 0px 101%' }}>
                <IconButton>
                    <CSVLink data={data} filename={"all-cmt-ist.csv"} target="_blank">
                        <DownloadForOfflineIcon sx={{ color: 'gray' }}></DownloadForOfflineIcon>
                    </CSVLink>
                </IconButton>
            </Tooltip>
            <div style={{ height: 640, width: '100%', margin: '40px 5%' }}>
                <DataGrid getRowId={(row) => row.commentId}
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </div>
    );
}
