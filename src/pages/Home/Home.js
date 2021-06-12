import React from 'react';
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Newsbox from '../../components/Newsbox/Newsbox' 

function Home(props) {
    return(
        <div>

            <div>
                <h1 className={styles.heading}>Homepage</h1>
            
            </div>
            <Sidebar className={styles.sidebar}/>
            <Newsbox className={styles.newsbox} />
        </div>

    )
}

export default Home;