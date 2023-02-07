import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
const Poster = dynamic(() => import('../components/Poster'), { ssr: false });
const ProductCategory = dynamic(() => import('../components/ProductCategory'), {
  ssr: false,
});
const Filter = dynamic(() => import('../components/Filter'), { ssr: false });
const SliderShow = dynamic(() => import('../components/Slider'), {
  ssr: false,
});
import Product from '../models/Product';
import db from '../utils/db';

export default function Home({ products }) {
  return (
    <Layout title="Home">
      <Filter></Filter>
      <Poster></Poster>
      <ProductCategory></ProductCategory>
      <SliderShow></SliderShow>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await db.connect();
  const products = await Product.find().lean();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
