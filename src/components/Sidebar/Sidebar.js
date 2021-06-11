import React from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profilebox}>
                <h1>Profile Box</h1>
            </div>
            <div className={styles.followingbox}>
                <h1>Following Box</h1>
            </div>
        </div>
    )
}
