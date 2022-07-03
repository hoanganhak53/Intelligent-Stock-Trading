import React from 'react'
import { baseAPI } from '../../api/baseAPI';

export const Cmt = (prop) => {

    const [data, setData] = React.useState(
        {
            "username": "hoanganh",
            "password": "123123",
            "avatar": "https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg",
            "link": "hoanganhak53",
            "address": "Viet Nam",
            "phoneNumber": "091239412",
            "name": "Hoang Anh",
            "role": false,
            "followers": [],
            "hadFollowered": [],
            "about": "khong co gi ca",
            "userId": "1"
           }
    );
    React.useEffect(() => {
        baseAPI.get(`/user/${prop.userId}`)
            .then(res => {
                setData(res.data);
            })
    }, [])
    return (
        <div style={{ marginTop: '20px' }}>
            <div className='row_container'>
                <img style={{ width: '32px', height: '32px', borderRadius: '5px', marginRight: '10px' }}
                    src={data.avatar}
                ></img>
                <div style={{ marginLeft: '8px' }}>
                    <div className='row_container'>
                        <p style={{ fontSize: '1.0rem', fontWeight: '550' }}>{data.name}</p>
                        <p style={{ color: 'gray', fontSize: '0.8rem', fontWeight: '550', marginLeft: '8px' }}>
                            {prop.createdAt.split('T')[0]}</p>
                    </div>
                    <p style={{ fontSize: '0.88rem', fontWeight: '500', marginTop: '5px' }}>
                        {prop.content}
                    </p>
                </div>

            </div>
        </div>
    )
}
