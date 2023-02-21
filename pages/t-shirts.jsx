import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import TShirtItem from '../components/TShirtItem';
import { Store } from '../utils/Store';
import allShirts from '../utils/products/tshirts';

const tshirts = allShirts.tshirts;

export default function TShirtScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (tshirt) => {
    const existItem = cart.cartItems.find((x) => x.slug === tshirt.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...tshirt, quantity } });

    toast.success('Product added to the cart');
  };

  return (
    <Layout title="T-Shirts">
      <div className="w-full m-auto 2xl:w-11/12">
        <div className="w-full m-auto 2xl:w-11/12">
          <div className="w-full m-auto 2xl:w-[98.7%]">
            <h1 className="new-title">All T-Shirts</h1>
            <p className="new-sentence">
              Upgrade your wardrobe with our all t-shirts collection, available
              in a variety of colors and styles.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
            {tshirts.map((tshirt) => (
              <TShirtItem
                product={tshirt}
                key={tshirt.slug}
                addToCartHandler={addToCartHandler}
              ></TShirtItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
