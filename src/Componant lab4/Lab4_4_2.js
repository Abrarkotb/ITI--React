import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Lab4_4_2() {
    
    const [post, setPost] = useState({});
    const [userId, setuserId] = useState(1);
    const [idFromBTN, setIdFromBTN] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(response => {
            console.log(response);
            setPost(response.data)
        })
       
    }, [idFromBTN])

    const handeleClick = () => {
        setIdFromBTN(userId)
    }


  return (
    <div>
        <input type="text" value={userId} onChange={e => setuserId(e.target.value)} />
        <button onClick={handeleClick}>Search</button>
        <h3>{post.title}</h3>
    </div>
  )
}

export default Lab4_4_2;