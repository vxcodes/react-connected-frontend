import React from 'react'


function Post(props) {

    return (
        <>
            <h1>POST</h1>
            <p>{props.title}</p>
            <br />
            <hr />
            <p>{props.userName}</p>
            <br />
            <hr />
            <p>{props.post}</p>
            <br />
            <hr />
        </>

    )
}

export default Post;