import { ITEMS_PER_PAGE } from '../../app/constants';
import { useDispatch } from 'react-redux';
import { fetchNewPageAsync } from '../product-list/productListSlice';
import { useState } from 'react';

export default function Pagination({ totalProducts }) {
  const dispatch = useDispatch();

  const [skip, setSkip] = useState(0);

  const handleNextPage = (idx) => {
    console.log('next clicked');
    dispatch(fetchNewPageAsync(skip + ITEMS_PER_PAGE));
    setSkip(skip + ITEMS_PER_PAGE);
  };
  const handlePrevPage = (idx) => {
    console.log('prev clicked');
    if (skip - ITEMS_PER_PAGE < 0) return;
    dispatch(fetchNewPageAsync(skip - ITEMS_PER_PAGE));
    setSkip(skip - ITEMS_PER_PAGE);
  };

  return (
    <div className="flex items-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 justify-end gap-10">
      <p>Total products : {totalProducts}</p>
      <p>Showing page {(skip/ITEMS_PER_PAGE)+1} out of {Math.ceil(totalProducts/ITEMS_PER_PAGE)}</p>
      <button
        className={`bg-indigo-600 p-2 rounded-lg text-white hover:bg-indigo-700 w-24 ${
          skip === 0 ? 'opacity-50 cursor-not-allowed ' : ''
        }`}
        onClick={handlePrevPage}
        disabled={skip === 0}
      >
        Previous
      </button>
      <button
        className={`bg-indigo-600 p-2 rounded-lg text-white hover:bg-indigo-700 w-24 ${
          skip + ITEMS_PER_PAGE > totalProducts
            ? 'opacity-50 cursor-not-allowed '
            : ''
        }`}
        onClick={handleNextPage}
        disabled={skip + ITEMS_PER_PAGE > totalProducts}
      >
        Next
      </button>
    </div>
  );
}
