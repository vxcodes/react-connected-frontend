import React from 'react';
import { login, logout } from '../../services/firebase';
import styles from './Header.module.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
// import Home from '../../pages/Home/Home'
// import Profile from '../../pages/Profile/Profile'

// use 'rfc' extension keyword


function Header(props){

    return (
        <header className={styles.header}>
            <h1 className={styles.headinglogo}>{'⚛︎'} React Connected</h1>
             <nav>
                <ul>
                    {
                        props.user ?
                        <>
                        <Link className={styles.navLink} to="/">
                            <li>Home</li>
                        </Link>
                        <Link className={styles.navLink} to="/profile">
                            <li>Profile</li>
                        </Link>
                        <li>Welcome, {props.user.displayName}</li>
                        <li>
                            <img
                                style={{}}
                                src={props.user.photoUrl}
                                alt={props.user.displayName} 
                            />
                        </li>
                        <li 
                            className={styles.navLink}
                            onClick={logout}>
                            Logout
                        </li>
                        </>
                        :
                        <li 
                            className={styles.navLink}
                            onClick={login}>
                            Login
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;


