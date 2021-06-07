import React from 'react';
import styles from './Home.module.css';
import Nav from '../../components/Nav/Nav';
import Profile from '../Profile/Profile';
import { login, logout } from '../../services/firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Home(props) {
    return(
        <Router>
            <div>
                <Nav />
                <Profile />
                <h1>Homepage</h1>
            </div>
        </Router>
    )
}

export default Home;