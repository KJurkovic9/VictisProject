import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Poster() {
  return (
    <div>
      <Link href="/shoes" legacyBehavior>
        <a className="shoes-btn">Shoes</a>
      </Link>
      <Link href="/jerseys" legacyBehavior>
        <a className="jerseys-btn">Jerseys</a>
      </Link>
      <Image
        src="/images/poster1.png"
        alt="poster adidas"
        width={1440}
        height={700}
        priority={true}
        className="w-full lg:h-[43rem] mb-10 md:h-80 sm:h-64"
      />
    </div>
  );
}
