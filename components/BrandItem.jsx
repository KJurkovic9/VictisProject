import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Store } from '../utils/Store';
import allBrands from '../utils/products/brands';
import ProductItem from './ProductItem';

const products = allBrands.products;
const brands = allBrands.names;

export default function BrandItem() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [filterBrands, setFilterBrands] = useState(products);

  const addToCartHandler = (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };

  const handleTagFilter = (selectedBrand) => {
    if (selectedBrand === 'All') {
      setFilterBrands(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.brand === selectedBrand
      );
      setFilterBrands(filteredProducts);
    }
  };

  return (
    <div className="w-full m-auto flex flex-wrap">
      <div className="w-full md:-ml-5">
        <h1 className="new-title">Discover Your Fit with Our Brand Finder</h1>
        <p className="new-sentence">
          Explore the diverse range of brands that we offer and find the perfect
          fit for your needs and preferences.
        </p>
      </div>
      <div className="flex flex-wrap ml-10 mr-10 -mt-5 md:w-[20%] md:flex md:flex-col md:space-y-10 md:mt-3 md:ml-5">
        <h5
          className="cursor-pointer mr-5 mb-2"
          onClick={() => handleTagFilter('All')}
        >
          All
        </h5>
        {brands.map((brand) => (
          <div
            onClick={() => handleTagFilter(brand.name)}
            key={brand.key}
            className="cursor-pointer mr-5 mb-2"
          >
            <h5>{brand.name}</h5>
          </div>
        ))}
      </div>
      <div className="m-auto md:w-[70%] md:m-auto md:mr-4 lg:mr-10">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:ml-10 md:mr-10 lg:grid-cols-3 lg:ml-2 lg:mr-2">
          {filterBrands.map((product) => {
            return (
              <ProductItem
                product={product}
                key={product.slug}
                addToCartHandler={addToCartHandler}
              ></ProductItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
