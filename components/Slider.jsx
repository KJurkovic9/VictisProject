import React, { useEffect, useRef, useState } from 'react';
import styles from './styles/slider.module.css';
import data from '../utils/data';
import Image from 'next/image';

const list = data.images;

export default function SliderShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideInOutClass, setSlideInOutClass] = useState(styles.slideIn);
  const [width, setWidth] = useState(0);
  const observer = useRef(null);
  const mobileObserver = useRef(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.current.unobserve(entry.target);
        }
      });
    });

    mobileObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mobileObserver.current.unobserve(entry.target);
        }
      });
    });
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + list.length - 1) % list.length);
    setSlideInOutClass(styles.slideOut);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % list.length);
    setSlideInOutClass(styles.slideIn);
  };

  return (
    <div className={styles.slider_container}>
      <p className={styles.slogan}>Where Family Is Meant To Be.</p>
      <div className={styles.slider_div}>
        <button onClick={handlePrevClick} className={styles.btnPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </button>
        <div className={styles.slider_images}>
          {width > 767
            ? list
                .slice(currentIndex, currentIndex + 2)
                .concat(
                  list.slice(
                    currentIndex === 7
                      ? currentIndex - 7
                      : currentIndex === 8
                      ? currentIndex - 8
                      : currentIndex + 2,
                    currentIndex > 6 ? currentIndex - 6 : currentIndex + 3
                  )
                )
                .map((list, index) => (
                  <div key={list.slug} className={`${slideInOutClass}`}>
                    <Image
                      src={list.image}
                      alt={list.slug}
                      width={1200}
                      height={2000}
                      className={styles.image}
                      loading="lazy"
                      ref={(el) => {
                        if (el) {
                          width > 767 && observer.current
                            ? observer.current.observe(el)
                            : mobileObserver.current &&
                              mobileObserver.current.observe(el);
                        }
                      }}
                    />
                    <p className={styles.quote}>{list.quote}</p>
                  </div>
                ))
            : list.slice(currentIndex, currentIndex + 1).map((list, index) => (
                <div key={list.slug} className={`${slideInOutClass}`}>
                  <Image
                    src={list.image}
                    alt={list.slug}
                    width={400}
                    height={800}
                    className={styles.image}
                    loading="lazy"
                    ref={(el) => {
                      if (el) {
                        width < 767 && mobileObserver.current
                          ? mobileObserver.current.observe(el)
                          : observer.current && observer.current.observe(el);
                      }
                    }}
                  />
                  <p className={styles.quote}>{list.quote}</p>
                </div>
              ))}
        </div>
        <button onClick={handleNextClick} className={styles.btnNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
