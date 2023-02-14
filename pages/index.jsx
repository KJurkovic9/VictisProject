import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
const Poster = dynamic(() => import('../components/Poster'), { ssr: false });
const ProductCategory = dynamic(() => import('../components/ProductCategory'), {
  ssr: false,
});
const Filter = dynamic(() => import('../components/Filter'), { ssr: false });
const SliderShow = dynamic(() => import('../components/Slider'), {
  ssr: false,
});
import db from '../utils/db';
import HighlightProducts from '../components/HighlightProducts';
import Product from '../models/Product';

export default function Home() {
  return (
    <Layout title="Home">
      <Filter></Filter>
      <Poster></Poster>
      <ProductCategory></ProductCategory>
      <SliderShow></SliderShow>
      <HighlightProducts></HighlightProducts>
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
