import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { cartActions } from '../cart/cartSlice';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Categories', href: '#', current: false },
  { name: 'All Products', href: '#', current: false },
  { name: 'New Arrivals', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const navigate = useNavigate();
  const [user, SetUser] = useState({});

  const dispatch = useDispatch();

  // selecting the total cart items and total cart price from redux store
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);
  const totalCartPrice = useSelector((state) => state.cart.totalPrice);
  const cartItemList = useSelector((state) => state.cart.itemList);

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('login_token');
    navigate('/login');
    toast.success('User logged out!');
  };

  // Setting total cart price in store for displaying it on navbar top
  let total = 0;
  cartItemList.forEach((item) => {
    total += item.totalPrice;
  });

  useEffect(() => {
    dispatch(cartActions.setTotalPrice({ totalPrice: total }));
  }, [total]);

  useEffect(() => {
    // decoding user from the stored jwt login_toke
    const token = localStorage.getItem('login_token');
    if (token) {
      const user = jwtDecode(token);
      SetUser(user);
    }
  }, [dispatch, navigate]);

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 w-[100%] z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center gap-3">
                  <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="E-Commerce App"
                  />
                  <div className="text-white text-xl">ECom App</div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
                <p className="text-white text-md hidden md:block">
                  Hi {user.firstName}!
                </p>
                <Link to="/cart">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                      {totalCartItems}
                    </span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </Link>
                <span className="text-lg text-white">${totalCartPrice}</span>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.image}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            onClick={handleLogout}
                            className={classNames(
                              active ? 'bg-gray-100 cursor-pointer' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link to={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
