import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseAPI } from '../../api/baseAPI';
import { Follower } from './Follower';

export const YourFollower = (props) => {
    let params = useParams();
    const [refresh, setRefresh] = useState(false)

    const [data, setData] = React.useState([
        {
            "createdAt": "2022-07-02T17:05:27.311Z",
            "follower": 1,
            "followed": 2,
            "id": "1"
        }
    ]
    );
    React.useEffect(() => {
        baseAPI.get(`/follow`)
            .then(res => {
                setData(res.data);
        })
    }, [refresh])
    const checkFollow = (x) => {
        if(data.filter(e => e.followed == x && e.follower == localStorage.userId).length === 0)
            return false
        else
            return true
    }

    if(props.yourFollower)
    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {data.filter(e => e.followed == params.id).map(e => (
                <Follower userId={e.follower} follow={checkFollow(e.follower)} id={e.id} refresh={refresh} setRefresh={setRefresh}></Follower>
            ))}
        </div>
    )
    else 
    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {data.filter(e => e.follower == params.id).map(e => (
                <Follower userId={e.followed} follow={true} id={e.id} refresh={refresh} setRefresh={setRefresh}></Follower>
            ))}
        </div>
    )
}
