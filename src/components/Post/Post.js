import React from 'react'
import styles from './Post.module.css'


function Post(props) {

    return (
        <>
            <h1 className={styles.heading}>POST</h1>
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