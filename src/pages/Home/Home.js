import React from 'react';
import styles from './Home.module.css';
import { login, logout } from '../../services/firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Home(props) {
    return(
        <div>
            <div>
                <h1>Homepage</h1>
            </div>
        </div>

    )
}

export default Home;