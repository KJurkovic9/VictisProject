import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from './styles/poster.module.css';

const PosterImage = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    if (mediaQuery.matches) {
      setSrc('mobile-banner.webp');
    } else {
      setSrc('desktop-banner.webp');
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setSrc('mobile-banner.webp');
    } else {
      setSrc('desktop-banner.webp');
    }
  };

  return (
    <div className={styles.banner}>
      <p className={styles.title}>
        STYLISH AND <br /> <span>AFFORDABLE</span>
      </p>
      <p className={styles.slogan}>Enjoy in life. Buy on Victis.</p>
      <Link href="/allproducts" legacyBehavior>
        <div className={styles.productsWraper}>
          <button className={styles.productsBtn}>
            <p>VIEW PRODUCTS</p>
          </button>
        </div>
      </Link>
      <Link href="/onsale" legacyBehavior>
        <div className={styles.saleWrapper}>
          <button className={styles.saleBtn}>
            <p>ON SALE</p>
          </button>
        </div>
      </Link>

      <Image
        src={`/images/${src}`}
        alt="Victis Banner"
        width={2000}
        height={2000}
        priority={true}
        className={styles.bannerImg}
      />
    </div>
  );
};

export default PosterImage;
