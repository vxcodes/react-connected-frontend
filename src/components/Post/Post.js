import React from 'react'
import styles from './Post.module.css'


function Post(props) {

    return (
        <>
            <h1 className={styles.heading}></h1>
            <p>{props.post}</p>
            <br />
            <hr />
        </>

    )
}

export default Post;