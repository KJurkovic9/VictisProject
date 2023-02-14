import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from './styles/tshirt-item.module.css';

export default function JerseyItem({ product, addToCartHandler }) {
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
            className={styles.card_picture}
          />
        </a>
      </Link>
      <div className="flex flex-col items-center mt-0">
        <div>
          <Link href={`/product/${product.slug}`} legacyBehavior>
            <a>
              <h2 className={styles.card_title}>{product.name}</h2>
            </a>
          </Link>
        </div>

        <div className={styles.card_info_div}>
          <p className="text-sm text-center md:mt-5 mb-5 md:mb-1 lg:mt-14 ">
            {product.brand}
          </p>
          <p className="text-base md:text-sm lg:text-base xl:text-base">
            ${product.newPrice}
          </p>
          <button
            className="primary-button"
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
