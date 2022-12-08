import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function HomePage({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Victis' : 'Victis'}</title>
        <meta name="description" content="Victis Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/" legacyBehavior>
              <a className="text-lg font-bold">Home</a>
            </Link>

            <div>
              <Link href="/cart" legacyBehavior>
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/Login" legacyBehavior>
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright &copy; 2022 Victis</p>
        </footer>
      </div>
    </>
  );
}
