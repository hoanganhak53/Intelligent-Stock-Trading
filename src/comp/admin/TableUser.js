import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { baseAPI } from '../../api/baseAPI';
import { format } from 'date-fns'
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";


export const TableUser = () => {
    const [data, setData] = React.useState([{
        "username": "Hoanganh",
        "password": "123123",
        "avatar": "https://i.pinimg.com/736x/d7/da/ab/d7daab0ea9127c3b1eb8cc76988cbafb.jpg",
        "link": "hoanganhak53",
        "address": "Ha Noi Viet Nam",
        "phoneNumber": "phoneNumber 1",
        "name": "Hoang Anh",
        "role": 0,
        "about": "about 1",
        "numPost": 15,
        "createdAt": "2022-07-02T15:06:11.697Z",
        "numFollower": 37,
        "like": 1,
        "userId": "1"
    }])

    const columns = [
        { field: 'userId', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Full name', width: 130 },
        { field: 'phoneNumber', headerName: 'Phone number', width: 130 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        {
            field: 'role', headerName: 'Role', width: 150,
            valueGetter: (params) => {
                if (params.row.role === 0)
                    return 'Chuyên gia'
                else if (params.row.role === 1)
                    return 'Người dùng cấp 2'
                else if (params.row.role === 2)
                    return 'Người dùng cấp 1'
            },
        },
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
                    baseAPI.delete(`user/${params.row.userId}`)
                    .then(() => {
                        setData(data.filter(e => e.userId !== params.row.userId))
                    })
                }}>
                    <DeleteIcon />
                </IconButton>
            )
        }
    ];


    React.useEffect(() => {
        baseAPI.get(`user`)
            .then(res => {
                setData(res.data)
            })
    }, [])

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid getRowId={(row) => row.userId}
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}
