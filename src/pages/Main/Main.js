import React from 'react'
import styles from './Main.module.css'
import Carousel from '../../components/Carousel/Carousel'
import { CarouselData } from '../../components/Carousel/CarouselData'


export default function Main() {
    return (
        <>
        <div className={styles.main}>
            <h1>Connected</h1>
        </div>
        <div className={styles.carousel}>
            <Carousel slides={CarouselData} />
        </div>
        <div className={styles.cards}>
            <p>Three Section cards</p>
        </div>
        </>
    )
}
