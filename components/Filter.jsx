import React, { useEffect, useState } from 'react';
import styles from './styles/filter.module.css';
import Link from 'next/link';

export default function Filter() {
  const [isOpen, setOpen] = useState(true);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.filter_div}>
      {width > 767 ? (
        <div className={styles.filter}>
          <div className={styles.btn_new}>
            <Link href="/newproducts" legacyBehavior>
              <a>New</a>
            </Link>
          </div>
          <div className={styles.btn_sale}>
            <Link href="/onsale" legacyBehavior>
              <a>Sale</a>
            </Link>
          </div>
          <div className={styles.btn_brands}>
            <Link href="/brands" legacyBehavior>
              <a>Brands</a>
            </Link>
          </div>
          <div className={styles.btn_loved}>
            <Link href="/limited-edition" legacyBehavior>
              <a>Limited Edition</a>
            </Link>
          </div>
        </div>
      ) : isOpen ? (
        <div className={styles.filter}>
          <div
            className={`${isOpen ? `${styles.btn}` : `${styles.btn}`}`}
            onClick={() => setOpen(!isOpen)}
          >
            <div className={styles.spanDiv}>
              <span className={`${isOpen ? `${styles.spanOne}` : ''}`}></span>
              <span className={`${isOpen ? `${styles.spanTwo}` : ''}`}></span>
              <span className={`${isOpen ? `${styles.spanThree}` : ''}`}></span>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.filter}>
          <div
            className={`${isOpen ? `${styles.btn_clicked}` : `${styles.btn}`}`}
            onClick={() => setOpen(!isOpen)}
          >
            <div className={styles.spanDiv}>
              <span
                className={`${isOpen ? '' : `${styles.clickedSpanOne}`}`}
              ></span>
              <span
                className={`${isOpen ? '' : `${styles.clickedSpanTwo}`}`}
              ></span>
              <span
                className={`${isOpen ? '' : `${styles.clickedSpanThree}`}`}
              ></span>
            </div>
          </div>
          <div className={styles.mobileDiv}>
            <div className={styles.mobileFilter}>
              <div className={styles.btn_new_mobile}>
                <Link href="/newproducts" legacyBehavior>
                  <a>New</a>
                </Link>
              </div>
              <div className={styles.btn_sale_mobile}>
                <Link href="/onsale" legacyBehavior>
                  <a>Sale</a>
                </Link>
              </div>
              <div className={styles.btn_brands_mobile}>
                <Link href="/brands" legacyBehavior>
                  <a>Brands</a>
                </Link>
              </div>
              <div className={styles.btn_loved_mobile}>
                <Link href="/limited-edition" legacyBehavior>
                  <a>Most Loved</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
