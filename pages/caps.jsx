import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import TShirtItem from '../components/TShirtItem';
import Cap from '../models/Cap';
import db from '../utils/db';
import { Store } from '../utils/Store';

export default function ShoesScreen({ caps }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (cap) => {
    const existItem = cart.cartItems.find((x) => x.slug === cap.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...cap, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
        {caps.map((cap) => (
          <TShirtItem
            product={cap}
            key={cap.slug}
            addToCartHandler={addToCartHandler}
          ></TShirtItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const caps = await Cap.find().lean();
  return {
    props: {
      caps: caps.map(db.convertDocToObj),
    },
  };
}
