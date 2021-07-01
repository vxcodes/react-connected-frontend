import React from 'react';
import styles from './Messages.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';

function Messages(props) {
  return (
    <>
      <div>
        <h1 className={styles.title}>Your Direct Messages</h1>
      </div>
    </>
  );
}

export default Messages;
