import React from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

let address = [
  {
    name: 'Aman',
    phone: '7827191435',
    street: 'street 11 main',
    city: 'Narela',
    state: 'Delhi',
    pincode: 110040,
  },
  {
    name: 'Nikhil',
    phone: '9827191435',
    street: 'street 12 DTU',
    city: 'Rohini',
    state: 'Delhi',
    pincode: 110038,
  },
];

const Checkout = () => {
  return (
    <div className="my-12 bg-white max-w-7xl py-5 px-4 sm:px-6 lg:px-8 border border-gray-400 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>
      <p className="mt-1 text-md leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>

      <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-md sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="street-address"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            Street address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="city"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="region"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            State / Province
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="postal-code"
            className="block text-md font-medium leading-6 text-gray-900"
          >
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            />
          </div>
        </div>
        <div className='col-span-6'>
          <button className='hover:bg-indigo-500 bg-indigo-600 p-3 text-base border-none text-white text-md rounded-xl font-medium'>Save Address</button>
        </div>
        <div className="sm:col-span-2 block text-md font-medium leading-6 text-gray-900">
          <label className="">Choose payment method</label>
          <div className="mt-2">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="payments"
                id="cash-pay"
                className="h-4 w-4 text-indigo-600 text-xl bg-red-600"
              />
              <label htmlFor="cash-pay">Cash</label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                name="payments"
                id="card-pay"
                className="h-4 w-4 text-indigo-600 text-xl bg-red-600"
              />
              <label htmlFor="card-pay">Card</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="mt-6 text-md font-medium leading-6 text-gray-900 mb-3">
          Saved Addresses
        </h2>
        {address.map((item, idx) => {
          return (
            <div
              className="flex gap-2 items-center border m-1 p-1 hover:bg-gray-200"
              key={idx}
            >
              <input
                type="radio"
                name="payments"
                id={`saved-address-${idx + 1}`}
                className="h-4 w-4 text-indigo-600 text-xl bg-red-600"
              />
              <label
                key={item.idx}
                className="mb-1 cursor-pointer"
                htmlFor={`saved-address-${idx + 1}`}
              >
                <p>{item.name}</p>
                <p>{item.phone}</p>
                <p>
                  {item.street}, {item.city}, {item.state}-{item.pincode}
                </p>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
