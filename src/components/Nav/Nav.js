import React from 'react';
import { login, logout } from '../../services/firebase';
import styles from './Nav.module.css';

function Nav (props) {
    return (
        <header className={styles.header}>
            <h1>{'⚛︎'} React Connected</h1>
            <nav>
                <ul>
                    <li>Welcome, User</li>
                    <li className={styles.navLink}>
                        Home
                    </li>
                    <li className={styles.navLink}>
                        Profile
                    </li>
                    <li 
                        className={styles.navLink}
                        onClick={logout}>
                        Logout
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
