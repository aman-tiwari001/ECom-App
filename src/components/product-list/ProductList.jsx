import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../cart/cartSlice';
import toast from 'react-hot-toast';

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product))
    toast.success('Added to cart');
    console.log('Added to cart');
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products && products.length ? (
            products.map((product) => (
              <div
                key={product.id}
                className="group relative hover:transform transition-all duration-200 hover:scale-110 p-1"
              >
                <div
                  id={`product-${product.id}`}
                  onClick={() => navigate(`/product-detail/${product.id}`)}
                  className="aspect-h-1 border-2 rounded-xl shadow-xl aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group group-hover:opacity-85 lg:h-64 "
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-sm text-gray-700">{product.title}</h3>

                  <p className="text-md font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>

                <button
                  id={`btn-add-to-cart-${product.title}`}
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 cursor-pointer bg-indigo-600 px-2 py-1 text-white rounded-xl hover:opacity-85"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-xl row-span-4 col-span-4 text-center">
              <img src="/loader.gif" alt="spinner" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
