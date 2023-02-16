import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import TShirtItem from '../components/TShirtItem';
// import TShirt from '../models/TShirt';
import db from '../utils/db';
import { Store } from '../utils/Store';
import allShirts from '../utils/tshirts';

const tshirts = allShirts.tshirts;

export default function ShoesScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (tshirt) => {
    const existItem = cart.cartItems.find((x) => x.slug === tshirt.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...tshirt, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <Layout>
      <div className="w-11/12 m-auto">
        <div className="w-11/12 m-auto">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 ml-10 mr-10">
            {tshirts.map((tshirt) => (
              <TShirtItem
                product={tshirt}
                key={tshirt.slug}
                addToCartHandler={addToCartHandler}
              ></TShirtItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   await db.connect();
//   const tshirts = await TShirt.find().lean();
//   return {
//     props: {
//       tshirts: tshirts.map(db.convertDocToObj),
//     },
//   };
// }
