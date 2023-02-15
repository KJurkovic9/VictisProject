import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import ShoeItem from '../components/ShoeItem';
import Shoe from '../models/Shoe';
import db from '../utils/db';
import { Store } from '../utils/Store';

export default function ShoesScreen({ shoes }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (shoe) => {
    const existItem = cart.cartItems.find((x) => x.slug === shoe.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...shoe, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <Layout>
      <div className="min-[300px]:w-full md:w-11/12 m-auto">
        <div className="w-11/12 m-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
            {shoes.map((shoe) => (
              <ShoeItem
                product={shoe}
                key={shoe.slug}
                addToCartHandler={addToCartHandler}
              ></ShoeItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const shoes = await Shoe.find().lean();

  return {
    props: {
      shoes: shoes.map(db.convertDocToObj),
    },
  };
}
