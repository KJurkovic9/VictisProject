import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import AllProductItem from '../components/AllProductItem';
import { Store } from '../utils/Store';
import allProducts from '../utils/products/allproducts';
import { toast } from 'react-toastify';

const products = allProducts.products;
const categories = allProducts.categories;

export default function AllProductsScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [filteredCategory, setFilteredCateory] = useState(products);

  const addToCartHandler = (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };

  const handleTagFilter = (selectedCategory) => {
    if (selectedCategory === 'All') {
      setFilteredCateory(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredCateory(filteredProducts);
    }
  };
  return (
    <Layout title="All Products">
      <div className="w-full m-auto flex flex-wrap">
        <div className="w-full md:-ml-5">
          <h1 className="new-title">All Products</h1>
          <p className="new-sentence">
            Discover our complete range of products in the all products section.
          </p>
        </div>
        <div className="flex flex-wrap ml-10 mr-10 -mt-5 md:w-[20%] md:flex md:flex-col md:space-y-10 md:mt-3 md:ml-5">
          <h5
            className="cursor-pointer mr-5 mb-2"
            onClick={() => handleTagFilter('All')}
          >
            All
          </h5>
          {categories.map((category) => (
            <div
              onClick={() => handleTagFilter(category.category)}
              key={category.key}
              className="cursor-pointer mr-5 mb-2"
            >
              <h5>{category.category}</h5>
            </div>
          ))}
        </div>
        <div className="m-auto md:w-[70%] md:m-auto md:mr-4 lg:mr-10">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:ml-10 md:mr-10 lg:grid-cols-3 lg:ml-2 lg:mr-2">
            {filteredCategory.map((product) => (
              <AllProductItem
                product={product}
                key={product.slug}
                addToCartHandler={addToCartHandler}
              ></AllProductItem>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
