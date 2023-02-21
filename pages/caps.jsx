import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import CapItem from '../components/CapItem';
import allCaps from '../utils/products/caps';
import { Store } from '../utils/Store';

const caps = allCaps.caps;

export default function ShoesScreen() {
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
      <div className="w-full m-auto 2xl:w-11/12">
        <div className="w-full m-auto 2xl:w-11/12">
          <div className="w-full m-auto 2xl:w-[98.7%]">
            <h1 className="new-title">All Caps</h1>
            <p className="new-sentence">
              Get ready to make a statement with our all caps selection,
              featuring the latest trends in headwear fashion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
            {caps.map((cap) => (
              <CapItem
                product={cap}
                key={cap.slug}
                addToCartHandler={addToCartHandler}
              ></CapItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
