import React from 'react';
import Cart from '../components/cart/Cart';
import NavBar from '../components/NavBar/NavBar';

const CartPage = () => {
  return (
    <>
      <NavBar />
      <div className='mt-20'> 
        <Cart btn={'Checkout'} />
      </div>
    </>
  );
};

export default CartPage;
