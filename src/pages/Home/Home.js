import React from 'react';
import styles from './Home.module.css';
import { login, logout } from '../../services/firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Post from '../../components/Post/Post'

function Home(props) {
    return(
        <div>

            <div>
                <h1 className={styles.heading}>Homepage</h1>
            
            </div>
            <Sidebar className={styles.sidebar}/>
        </div>

    )
}

export default Home;