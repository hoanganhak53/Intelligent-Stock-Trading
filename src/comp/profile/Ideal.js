import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseAPI } from '../../api/baseAPI';
import { NewFrame } from '../Recommen/NewFrame';

export const Ideal = () => {
    let params = useParams();
    const [data, setData] = useState([
        {
            "createAt": "2022-06-29T17:52:24.471Z",
            "title": "Future Brand Consultant",
            "content": "Quaerm ri quisquam.",
            "like": 402,
            "image": "http://loremflickr.com/640/480/business",
            "postId": "2",
            "userId": "2",
            "tag": "Vàng / Đô la Mỹ (OANDA:XAUUSD) ",
        }
    ]);
    useEffect(async () => {
        await baseAPI.get('/posts')
        .then(res => {
            setData(res.data);
        })
    }, [])
    return (
        <div>
            <div style={{ margin: '30px 0px', display: 'flex', flexWrap: 'wrap' }}>
                {data.filter(e => e.userId == params.id).map(e => (
                    <NewFrame title={e.title} content={e.content} like={e.like} tag={e.tag}
                    image={e.image} userId={e.userId} time={e.createAt} postId={e.postId}/>
                ))}
            </div>
        </div>
    )
}
