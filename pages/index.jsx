import { Menu } from '@headlessui/react';
import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
const Poster = dynamic(() => import('../components/Poster'));
const ProductCategory = dynamic(() => import('../components/ProductCategory'));
const Filter = dynamic(() => import('../components/Filter'));
const SliderShow = dynamic(() => import('../components/Slider'));
import Product from '../models/Product';
import db from '../utils/db';
import { Store } from '../utils/Store';

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };
  return (
    <Layout title="Home">
      <Filter></Filter>
      <Poster></Poster>
      <ProductCategory></ProductCategory>
      <SliderShow></SliderShow>
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
