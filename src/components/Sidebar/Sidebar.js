import React from 'react';
import { login, logout } from '../../services/firebase';
import styles from './Sidebar.module.css';

export default function Sidebar(props) {
  return (
    <>
      {props.user ? (
        <>
          <div className={styles.profilebox}>
            <h1>Profile Box</h1>
            <img style={{}} src={props.user.photoURL} alt='avatar' />
            <p>{props.user.displayName}</p>
          </div>

          <div className={styles.followingbox}>
            <h1>Following Box</h1>
          </div>
        </>
      ) : (
        <li className={styles.navLink} onClick={login}>
          Login
        </li>
      )}
    </>
  );
}
