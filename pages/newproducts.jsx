import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import NewProducts from '../components/NewProducts';
import newProducts from '../utils/products/new';
import { Store } from '../utils/Store';

const newproducts = newProducts.new;

export default function ShoesScreen() {
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
      <div className="w-full m-auto 2xl:w-11/12">
        <div className="w-full m-auto 2xl:w-11/12">
          <div className="w-full m-auto 2xl:w-[98.7%]">
            <h1 className="new-title">New Collection Is Here</h1>
            <p className="new-sentence">
              Discover the latest additions to our wardrobe with our stunning
              new collection.
            </p>
          </div>
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
