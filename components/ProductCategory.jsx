import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles/productCategory.module.css';

export default function ProductCategory() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 border-b border-black">
      <div className={styles.card_shoes}>
        <Image
          alt="Yeezy Shoes"
          src="/images/shoes/shoe8.png"
          width={1000}
          height={1000}
          className="w-52"
        />
        <div className="m-auto mb-3">
          <Link href="/shoes">
            <button className="betn">Shoes</button>
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
          className="m-auto my-3 w-26"
        />
        <div className="m-auto mb-3">
          <Link href="jerseys">
            <button className="betn">Jerseys</button>
          </Link>
        </div>
      </div>
      <div className={styles.card_tshirts}>
        <Image
          alt="T-Shirts"
          src="/images/t-shirts/shirt18.png"
          width={140}
          height={80}
          className="m-auto my-3"
        />
        <div className="m-auto mb-3">
          <Link href="t-shirts">
            <button className="betn">T-Shirts</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
