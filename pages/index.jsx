import React from 'react';
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
import HighlightProducts from '../components/HighlightProducts';
import db from '../utils/db';

export default function Home() {
  const dbConnection = async () => {
    try {
      await db.connect();
    } catch (err) {
      console.log(err);
    }
  };

  dbConnection();

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
