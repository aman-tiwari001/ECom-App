import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Checkout from '../components/checkout/Checkout';
import Cart from '../components/cart/Cart';

const CheckoutPage = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-5 mx-9 my-9">
        <div className="lg:col-span-3">
          <Checkout />
        </div>
        <div className="lg:col-span-2 lg:fixed lg:right-4 lg:top-16">
          <Cart btn={"Order and Pay Now"}/>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
