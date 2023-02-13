import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import { Store } from '../utils/Store';
import 'react-toastify/dist/ReactToastify.css';
import DropdownLink from './DropdownLink';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon as CartIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setcartItemsCount] = useState(0);
  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - Victis' : 'Victis'}</title>
        <meta name="description" content="Victis Shop" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Serif+Ahom&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div>
        <header>
          <nav className="flex h-16 items-center px-4 justify-between border-b shadow-inner">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={35}
                height={35}
                priority
                className="ml-3"
              ></Image>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="text-[2.8rem] font-bold ml-10">Victis</a>
            </Link>

            <div className="inline-grid grid-cols-2 items-center">
              <Link href="/cart" legacyBehavior>
                <a>
                  {cartItemsCount === 0 ? (
                    <ShoppingCartIcon className="w-6"></ShoppingCartIcon>
                  ) : (
                    <CartIcon className="w-6"></CartIcon>
                  )}
                </a>
              </Link>

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600 ml-0">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </DropdownLink>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login" legacyBehavior>
                  <a className="ml-3">
                    <UserIcon className="w-6"></UserIcon>
                  </a>
                </Link>
              )}
            </div>
          </nav>
        </header>

        <main className="main-container m-auto">{children}</main>

        <footer className="footer-container">
          <div className="follow-us ">
            <div>
              <p className="flwtxt ">FOLLOW US</p>
            </div>
            <div className="media-icons">
              <Image
                src="/images/icons/instagram.png"
                alt="instagram icon"
                width={30}
                height={30}
              />
              <Image
                src="/images/icons/facebook.png"
                alt="facebook icon"
                width={30}
                height={30}
              />
              <Image
                src="/images/icons/twitter.png"
                alt="twitter icon"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="footer-links">
            <div className="terms">
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </div>
            <div className="privacy">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="cookie">
              <p>Cookie Settings</p>
            </div>
          </div>
          <div>
            <p>Copyright &copy; 2022 Victis</p>
          </div>
        </footer>
      </div>
    </>
  );
}
