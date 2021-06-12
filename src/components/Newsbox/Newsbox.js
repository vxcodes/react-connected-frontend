import React from 'react'
import styles from './Newsbox.module.css'

export default function Newsbox(props) {
    return (
        <div>
            <div className={styles.newsbox}>
                <h1 className={styles.title}>News Headlines</h1>
                <div>
                    {
                        props.newsData.results.map(headline => <div className={styles.form} class="card"><a href={headline.url}>{headline.title}</a></div>)
                    }
                </div>
            </div>
        </div>
    )
}
