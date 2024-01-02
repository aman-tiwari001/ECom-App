import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { cartActions, selectAllCartItems } from './cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart({ btn }) {
  let total = 0;
  const products = useSelector(selectAllCartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  console.log(products);

  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
    console.log('Added to cart');
  };

  const delItemFromCart = (id) => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  products.forEach((item) => {
    total += item.totalPrice;
  });

  useEffect(() => {
    dispatch(cartActions.setTotalPrice({ totalPrice: total }));
  }, [total]);

  return (
    <div className="mx-auto my-3 bg-white max-w-7xl px-4 sm:px-6 lg:px-8 border-gray-300 border-2">
      <div className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-5">
          Shopping Cart
        </h1>
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200 px-5 py-5">
            {products.length ? (
              products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{product.title}</h3>
                        <p className="ml-4">${product.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500 text-md">
                        Quantity : {product.quantity}
                        <div className="flex gap-2 mt-1">
                          <img
                            onClick={() => handleRemoveFromCart(product.id)}
                            className="cursor-pointer hover:opacity-85"
                            src="/minus.png"
                            width={25}
                            alt=""
                          />
                          <img
                            onClick={() => handleAddToCart(product)}
                            className="cursor-pointer hover:opacity-85"
                            src="/plus.png"
                            width={27}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => delItemFromCart(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p className='text-center text-xl p-4'>No items in cart</p>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total Price</p>
          <p>${totalPrice}</p>
        </div>
        <div className="mt-6">
          <Link
            to={'/'}
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Place Order & Pay
          </Link>
        </div>
      </div>
    </div>
  );
}
