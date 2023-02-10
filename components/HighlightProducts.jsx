import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../utils/Store';
import styles from './styles/highlightProduct.module.css';

const images = [
  { link: '/images/shoes/shoe18.png', slug: 'shoe18' },
  { link: '/images/t-shirts/shirt2.png', slug: 'shirt2' },
  { link: '/images/caps/cap3.png', slug: 'cap3' },
  { link: '/images/shoes/shoe3.png', slug: 'shoe3' },
  { link: '/images/t-shirts/shirt17.png', slug: 'shirt17' },
  { link: '/images/shoes/shoe12.png', slug: 'shoe12' },
];

export default function HighlightProducts({ addToCartHandler }) {
  // const { state, dispatch } = useContext(Store);
  // const { cart } = state;

  // const addToCartHandler = (product) => {
  //   const existItem = cart.cartItems.find((x) => x.slug === product.slug);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;

  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

  //   toast.success('Product added to the cart');
  // };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MONTH PRODUCTS</h1>
      <div className={styles.main_container}>
        {images.map((images) => (
          <div key={images.slug} className={styles.conatiner_divs}>
            <div className={styles.image_div}>
              {images.slug === 'shirt17' ? (
                <Image
                  src={images.link}
                  alt={images.slug}
                  width={300}
                  height={300}
                  priority={true}
                  className={styles.image_shirt}
                />
              ) : images.slug === 'shirt2' ? (
                <Image
                  src={images.link}
                  alt={images.slug}
                  width={300}
                  height={300}
                  priority={true}
                  className={styles.image_shirt}
                />
              ) : images.slug === 'cap3' ? (
                <Image
                  src={images.link}
                  alt={images.slug}
                  width={300}
                  height={300}
                  className={styles.image_cap}
                />
              ) : (
                <Image
                  src={images.link}
                  alt={images.slug}
                  width={300}
                  height={300}
                  priority={true}
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.btn_div}>
              <button onClick={addToCartHandler} className={styles.btn}>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
