import { ITEMS_PER_PAGE } from '../../app/constants';
import { useDispatch } from 'react-redux';
import { fetchNewPageAsync } from '../product-list/productListSlice';
import { useState } from 'react';

export default function Pagination({ totalProducts }) {
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const dispatch = useDispatch();

  const [skip, setSkip] = useState(0);

  const handleNextPage = (idx) => {
    dispatch(fetchNewPageAsync(skip + 30));
    setSkip(skip + 30);
  };
  const handlePrevPage = (idx) => {
    if (skip - 30 < 0) return;
    dispatch(fetchNewPageAsync(skip - 30));
    setSkip(skip - 30);
  };

  return (
    <div className="flex items-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 justify-end gap-10">
      <button
        className="bg-indigo-600 p-2 rounded-lg text-white hover:opacity-85 w-24"
        onClick={handlePrevPage}
        disabled={skip === 0}
      >
        Previous
      </button>
      <button
        className="bg-indigo-600 p-2 rounded-lg text-white hover:opacity-85 w-24"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
}
