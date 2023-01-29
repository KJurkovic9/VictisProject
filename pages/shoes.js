import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import TSHirtItem from '../components/TSHirtItem';
import Product from '../models/Product';
import db from '../utils/db';
import { Store } from '../utils/Store';

export default function ShoesScreen({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const filter = products.filter((product) => product.category === 'Shoes');

  const addToCartHandler = (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
        {filter.map((product) => (
          <TSHirtItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></TSHirtItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
