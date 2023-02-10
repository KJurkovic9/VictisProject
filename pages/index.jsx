import React from 'react';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
const Poster = dynamic(() => import('../components/Poster'), { ssr: false });
const ProductCategory = dynamic(() => import('../components/ProductCategory'), {
  ssr: false,
});
const Filter = dynamic(() => import('../components/Filter'), { ssr: false });
const SliderShow = dynamic(() => import('../components/Slider'));
// import Product from '../models/Product';
// import db from '../utils/db';
// import HighlightProducts from '../components/HighlightProducts';

export default function Home() {
  return (
    <Layout title="Home">
      <Filter></Filter>
      <Poster></Poster>
      <ProductCategory></ProductCategory>
      <SliderShow></SliderShow>
      {/* <HighlightProducts></HighlightProducts> */}
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   await db.connect();
//   const products = await Product.find().lean();

//   return {
//     props: {
//       products: products.map(db.convertDocToObj),
//     },
//   };
// }
