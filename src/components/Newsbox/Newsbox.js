import React from 'react'
import styles from './Newsbox.module.css'

export default function Newsbox(props) {
    return (
        <div>
            <div className={styles.newsbox}>
                <h1>News Box</h1>
                <div className="form">
                    {
                        props.newsData.results.map(headline => <div class="card"><a href={headline.url}>{headline.title}</a></div>)
                    }
                </div>
            </div>
        </div>
    )
}
