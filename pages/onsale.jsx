import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import OnSaleItem from '../components/OnSaleItem';
import onSaleProducts from '../utils/products/onsale';
import { Store } from '../utils/Store';

const onSale = onSaleProducts.onsale;

export default function onSaleScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <Layout title="On Sale">
      <div className="w-full m-auto 2xl:w-11/12">
        <div className="w-full m-auto 2xl:w-11/12">
          <div className="w-full m-auto 2xl:w-[98.7%]">
            <h1 className="new-title">Shop Now and Save Big</h1>
            <p className="new-sentence">
              Hurry and grab your favorite products at discounted prices with
              our exciting on sale promotion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
            {onSale.map((product) => (
              <OnSaleItem
                product={product}
                key={product.slug}
                addToCartHandler={addToCartHandler}
              ></OnSaleItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
