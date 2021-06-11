import React from 'react'
import styles from './Post.module.css'


function Post(props) {

    return (
        <>
            <div className={styles.postbox}>
                <p className={styles.post}>{props.post}</p>
                {/* <p>{props.comments}</p> */}
            </div>
            
        </>

    )
}

export default Post;