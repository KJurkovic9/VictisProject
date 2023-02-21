import React, { useContext } from 'react';
import Layout from '../components/Layout';
import LimitedItem from '../components/LimitedItem';
import allLimited from '../utils/products/limited';
import { Store } from '../utils/Store';
import { toast } from 'react-toastify';

const limited = allLimited.products;

export default function LimitedEditionScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };

  return (
    <Layout title="Limited Edition">
      <div className="w-full m-auto 2xl:w-11/12">
        <div className="w-full m-auto 2xl:w-11/12">
          <div className="w-full m-auto 2xl:w-[98.7%]">
            <h1 className="new-title">Exclusive Online Collection</h1>
            <p className="new-sentence">
              Get your hands on our exclusive limited edition collection,
              available only at our webshop!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
            {limited.map((product) => (
              <LimitedItem
                product={product}
                key={product.slug}
                addToCartHandler={addToCartHandler}
              ></LimitedItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
