import React from 'react';
import styles from './Main.module.css';
import Carousel from '../../components/Carousel/Carousel';
import { CarouselData } from '../../components/Carousel/CarouselData';

export default function Main() {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel slides={CarouselData} />
      </div>
      <div className={styles.main}>
        <h1>Connected</h1>
        <p>We bring communities together.</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className="container">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum." -
              Anonymous
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className="container">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum." -
              Anonymous
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className="container">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum." -
              Anonymous
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
