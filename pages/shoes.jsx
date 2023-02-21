import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import ShoeItem from '../components/ShoeItem';
import allShoes from '../utils/products/shoes';
import { Store } from '../utils/Store';

const shoes = allShoes.shoes;

export default function ShoesScreen() {
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
      <div className="w-full m-auto 2xl:w-11/12">
        <div className="w-full m-auto 2xl:w-11/12">
          <div className="w-full m-auto 2xl:w-[98.7%]">
            <h1 className="new-title">All Shoes</h1>
            <p className="new-sentence">
              Explore our all shoes category and discover the perfect pair to
              match your personal style and taste.
            </p>
          </div>
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
