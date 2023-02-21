import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import JerseyItem from '../components/JerseyItem';
import { Store } from '../utils/Store';
import allJerseys from '../utils/products/jerseys';

const jerseys = allJerseys.jerseys;

export default function ShoesScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (jerseys) => {
    const existItem = cart.cartItems.find((x) => x.slug === jerseys.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...jerseys, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <Layout>
      <div className="w-full m-auto 2xl:w-11/12">
        <div className="w-full m-auto 2xl:w-11/12">
          <div className="w-full m-auto 2xl:w-[98.7%]">
            <h1 className="new-title">All Jerseys</h1>
            <p className="new-sentence">
              Cheer on your team in style with our all jerseys collection,
              available in a variety of designs and sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
            {jerseys.map((jerseys) => (
              <JerseyItem
                product={jerseys}
                key={jerseys.slug}
                addToCartHandler={addToCartHandler}
              ></JerseyItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
