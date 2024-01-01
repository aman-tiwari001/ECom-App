import { useEffect, useState } from 'react';
import {
  StarIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@heroicons/react/20/solid';
import { getSingleProduct } from './productDetailApi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetail({setProgress}) {
  const [product, setProduct] = useState(null);
  const [currImgIdx, setCurrentImgIdx] = useState(0);

  const handleNextImage = () => {
    if (currImgIdx >= product.images.length - 1) {
      setCurrentImgIdx(0);
    } else {
      setCurrentImgIdx(currImgIdx + 1);
    }
  };
  const handlePrevImage = () => {
    if (currImgIdx <= 0) {
      setCurrentImgIdx(product.images.length - 1);
    } else {
      setCurrentImgIdx(currImgIdx - 1);
    }
  };

  useEffect(() => {
    setProgress(40);
    const id = window.location.pathname.split('/')[2];
    const fetchProductDetails = async () => {
      setProduct(await getSingleProduct(id));
      setProgress(100);
    };
    fetchProductDetails();
  }, []);

  return (
    product && (
      <div className="bg-white mt-12">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li className="font-medium text-gray-500 hover:text-gray-600">
                {product.brand} {product.title}
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="flex items-center justify-center gap-2 col-span-2">
              <img
                className="hover:cursor-pointer hover:opacity-80"
                onClick={handlePrevImage}
                src="/back.png"
                width={30}
                alt=""
              />
              <img
                className="border w-[80vw] lg:w-[40vw] lg:h-[65vh] border-black shadow-2xl rounded-xl"
                src={product.images[currImgIdx]}
                alt={product.title}
              />
              <img
                className="hover:cursor-pointer hover:opacity-80"
                onClick={handleNextImage}
                src="/next.png"
                width={30}
                alt=""
              />
            </div>
            <div className="lg:p-0 p-4 mt-4 lg:row-span-3 pt-10 lg:mt-0">
              <div className="lg:col-span-3 mb-4 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.title}
                </h1>
                <p>{product.brand}</p>
              </div>
              <h2 className="sr-only">Product information</h2>
              <span className="text-2xl tracking-tight text-gray-900 line-through mr-3">
                ${product.price}
              </span>
              <span className="text-3xl tracking-tight text-gray-900">
                $
                {Math.round(
                  product.price * (1 - product.discountPercentage / 100)
                )}
              </span>
              <p className="mt-3">{product.discountPercentage}% Off</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? 'text-gray-900'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {product.rating} Rating
                  </p>
                </div>
              </div>

              <div className="mt-20">
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-3 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="lg:text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
              <p>{product.brand}</p>
            </div>

            {/* Options */}

            <div className="py-10 lg:col-span-3 lg:col-start-1 lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Stock</h3>

                <div className="mt-4 text-red-500 animate-pulse">
                  Hurry! only {product.stock} left in stock
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Category</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">#{product.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
