import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles/onsaleitem.module.css';

export default function OnSaleItem({ product, addToCartHandler }) {
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <Image
            src={product.image}
            alt={product.slug}
            width={200}
            height={100}
            className={
              product.category === 'Caps'
                ? styles.card_picture_caps
                : product.category === 'Jerseys'
                ? styles.card_picture_jerseys
                : product.category === 'T-Shirts'
                ? styles.card_picture_tshirts
                : styles.card_picture_shoes
            }
          />
        </a>
      </Link>
      <div className="flex flex-col items-center mt-0">
        <div>
          <Link href={`/product/${product.slug}`} legacyBehavior>
            <a>
              <h2
                className={
                  product.category === 'Jerseys'
                    ? styles.card_title_jerseys
                    : product.category === 'T-Shirts'
                    ? styles.card_title_tshirts
                    : product.category === 'Shoes'
                    ? styles.card_title_shoes
                    : styles.card_title_caps
                }
              >
                {product.name}
              </h2>
            </a>
          </Link>
        </div>
        <div
          className={
            product.category === 'T-Shirts'
              ? styles.card_info_div_tshirt
              : product.category === 'Jerseys'
              ? styles.card_info_div_tshirt
              : product.category === 'Shoes'
              ? styles.card_info_div_shoes
              : styles.card_info_div_caps
          }
        >
          <p className="text-sm text-center md:mt-5 mb-5 md:mb-1 lg:mt-10 ">
            {product.brand}
          </p>
          <p className="line-through text-sm md:text-sm lg:text-sm xl:text-sm">
            ${product.oldPrice}
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
