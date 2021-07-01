import React, { useState } from 'react';
import styles from './Carousel.module.css';
import { CarouselData } from './CarouselData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={styles.rightArrow}
        onClick={nextSlide}
      />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="connected image"
                className={styles.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
