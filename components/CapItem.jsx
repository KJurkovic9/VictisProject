import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from './styles/capitem.module.css';

export default function TShirtItem({ product, addToCartHandler }) {
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={100}
            priority={true}
            className={styles.card_picture_caps}
          />
        </a>
      </Link>
      <div className="flex flex-col items-center mt-0">
        <div>
          <Link href={`/product/${product.slug}`} legacyBehavior>
            <a>
              <h2 className={styles.card_title_caps}>{product.name}</h2>
            </a>
          </Link>
        </div>

        <div className={styles.card_info_div_caps}>
          <p className="text-sm text-center md:mt-5 mb-5 md:mb-1 lg:mt-14 ">
            {product.brand}
          </p>
          <p className="text-base md:text-sm lg:text-base xl:text-base">
            ${product.newPrice}
          </p>
          <button
            className={styles.primary_button}
            type="button"
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
