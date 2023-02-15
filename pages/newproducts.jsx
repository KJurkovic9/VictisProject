import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import NewProducts from '../components/NewProducts';
import NewProduct from '../models/NewProduct';
import db from '../utils/db';
import { Store } from '../utils/Store';

export default function ShoesScreen({ newproducts }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (newproduct) => {
    const existItem = cart.cartItems.find((x) => x.slug === newproduct.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...newproduct, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <Layout>
      <div className="w-11/12 m-auto">
        <div className="w-11/12 m-auto">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
            {newproducts.map((newproduct) => (
              <NewProducts
                product={newproduct}
                key={newproduct.slug}
                addToCartHandler={addToCartHandler}
              ></NewProducts>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const newproducts = await NewProduct.find().lean();
  return {
    props: {
      newproducts: newproducts.map(db.convertDocToObj),
    },
  };
}
