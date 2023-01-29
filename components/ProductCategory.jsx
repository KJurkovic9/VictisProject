import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductCategory() {
  return (
    <div className="flex flex-row items-center justify-center mt-24 pb-12 border-b border-black">
      <div className="flex flex-col items-center justify-center p-5 w-72 h-64 bg-slate-100 mr-8">
        <Image
          alt="Yeezy Shoes"
          src="/images/shoes/shoe8.png"
          width={240}
          height={100}
        />
        <div className="m-auto mb-3">
          <Link href="/shoes">
            <button className="betn">Shoes</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 w-72 h-64 bg-slate-100 mr-8">
        <Image
          alt="Jersey"
          src="/images/jerseys/jersey2.png"
          width={110}
          height={300}
          className="m-auto my-3"
        />
        <div className="m-auto mb-3">
          <Link href="jerseys">
            <button className="betn">Jerseys</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 w-72 h-64 bg-slate-100">
        <Image
          alt="T-Shirts"
          src="/images/t-shirts/shirt18.png"
          width={140}
          height={80}
          className="m-auto my-3"
        />
        <div className="m-auto mb-3">
          <Link href="t-shirts">
            <button className="betn">T-Shirts</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
