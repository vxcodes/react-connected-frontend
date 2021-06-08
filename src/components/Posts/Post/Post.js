import React from 'react'

function Post(props) {
    return (
        <>
            <h1>POST</h1>
            <p>{props.userName}</p>
            <p>{props.title}</p>
            <p>{props.post}</p>
        </>

    )
}

export default Post;