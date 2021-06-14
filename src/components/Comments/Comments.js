import React from 'react'
import styles from './Comments.module.css'

export default function Comments(props) {
    return (
        <>
        <div>
            Comments
        </div>
        <form className={styles.commentBox}>
            <label>Comment:
            <input  name="comment" value onChange/>
            </label>
            <button className="comment-button" disabled={!props.user}>{'POST'}</button>
        </form>
        </>
    )
}

