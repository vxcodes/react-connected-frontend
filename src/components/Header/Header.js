import { login, logout } from '../../services/firebase';
import styles from './Header.module.css';


function Header(props){
    return (
        <header className={styles.header}>
            <h1>{'⚛︎'} React Connected</h1>
            <nav>
                <ul>
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
                </ul>
            </nav>
        </header>
    )
}

export default Header