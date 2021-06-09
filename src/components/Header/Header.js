import React from 'react';
import { login, logout } from '../../services/firebase';
import styles from './Header.module.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Profile from '../../pages/Profile/Profile'

// use 'rfc' extension keyword


function Header(props){
    // async function onSubmit(){
    //     await fetch(login())
    //     .then(<Redirect from="/" to="/home/"/>)
    // }
    return (
        <header className={styles.header}>
            <h1 className={styles.headinglogo}>{'⚛︎'} React Connected</h1>
            <Router>
                <Switch>
                    <nav>
                        <ul>
                            <Route
                                path="/home"
                                exact
                                className={styles.navLink}
                                component={Home}
                            />
                            <Route
                                path="/profile"
                                exact
                                className={styles.navLink}
                                component={Profile}
                            />
                            <li>Welcome, User</li>
                            <li>IMG</li>
                            <li 
                                className={styles.navLink}
                                onClick={logout}>
                                Logout
                            </li>
                            <li 
                                className={styles.navLink}
                                onClick={login}>
                                Login
                            </li>
                            {/* <Route path="/home/" component={Home}/> */}
                        </ul>
                    </nav>
                </Switch>
            </Router>
        </header>
    )
}

export default Header;


