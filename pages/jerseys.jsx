import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import JerseyItem from '../components/JerseyItem';
import db from '../utils/db';
import { Store } from '../utils/Store';
// import Jersey from '../models/Jersey';
import allJerseys from '../utils/jerseys';

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
      <div className="w-11/12 m-auto">
        <div className="w-11/12 m-auto">
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

// export async function getServerSideProps() {
//   await db.connect();
//   const jerseys = await Jersey.find().lean();
//   return {
//     props: {
//       jerseys: jerseys.map(db.convertDocToObj),
//     },
//   };
// }
