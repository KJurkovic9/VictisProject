import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={100}
            priority={true}
            className="rounded m-auto h-[55%] w-[65%] md:w-full md:h-3/6"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center mt-0">
        <div className="">
          <Link href={`/product/${product.slug}`} legacyBehavior>
            <a>
              <h2 className="card-title">{product.name}</h2>
            </a>
          </Link>
        </div>

        <div className="card-info">
          <p className="text-lg md:text-sm lg:text-base xl:text-base text-center lg:mt-10 md:mt-5 mb-5 md:mb-1">
            {product.brand}
          </p>
          <p className="text-lg md:text-sm lg:text-base xl:text-base">
            ${product.price}
          </p>
          <button
            className="primary-button"
            type="button"
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
