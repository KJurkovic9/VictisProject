import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './styles/productCategory.module.css';

export default function ProductCategory() {
  return (
    <div className={styles.products}>
      <div className={styles.mainDiv}>
        <div className={styles.card_shoes}>
          <Image
            alt="Yeezy Shoes"
            src="/images/shoes/shoe8.png"
            width={1000}
            height={1000}
            className="w-40 md:mb-16 2xl:w-[12rem] 2xl:mb-20"
          />
          <div className="m-auto mb-3 md:absolute md:mt-20">
            <Link href="/shoes">
              <button className={styles.betn}>Shoes</button>
            </Link>
          </div>
        </div>
        <div className={styles.card_jerseys}>
          <Image
            alt="Jersey"
            src="/images/jerseys/jersey2.png"
            width={110}
            height={300}
            priority={true}
            className="m-auto mb-14 w-20 md:w-[4.5rem] md:mt-1 2xl:w-[5rem] 2xl:-mt-2"
          />
          <div className="m-auto absolute mt-[4.5rem]">
            <Link href="jerseys">
              <button className={styles.betn}>Jerseys</button>
            </Link>
          </div>
        </div>
        <div className={styles.card_tshirts}>
          <Image
            alt="T-Shirts"
            src="/images/t-shirts/shirt18.png"
            width={140}
            height={80}
            className="m-auto w-24 mb-[3.7rem] md:w-[5.5rem] 2xl:w-[6.5rem] 2xl:mb-[4rem]"
          />
          <div className="m-auto absolute mt-[4.5rem]">
            <Link href="t-shirts">
              <button className={styles.betn}>T-Shirts</button>
            </Link>
          </div>
        </div>
        <div className={styles.card_caps}>
          <Image
            alt="T-Shirts"
            src="/images/caps/cap1.png"
            width={140}
            height={80}
            className="m-auto w-24 mb-[3.7rem] md:w-[5.5rem] 2xl:w-[6.5rem] 2xl:mb-[4rem]"
          />
          <div className="m-auto absolute mt-[4.5rem]">
            <Link href="caps">
              <button className={styles.betn}>Caps</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
