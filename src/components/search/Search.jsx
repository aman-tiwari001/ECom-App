import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { searchByQuery } from './SearchApi';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = async (event) => {
    setQuery(event.target.value);
    if (event.target.value.length) {
      document.getElementById('searchResContainer').style.display = 'block';
      const data = await searchByQuery(event.target.value, 7);
      console.log('api called for q : ', event.target.value);
      setSearchResults(data.products);
    } else {
      document.getElementById('searchResContainer').style.display = 'none';
      setSearchResults([]);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-20 text-center flex items-center gap-3 w-[80%] lg:w-[50%] ">
        <input
          className="w-[100%] p-2 rounded-lg text-lg border-2 border-gray-500 focus:shadow-xl"
          type="text"
          placeholder="Search products here..."
          value={query}
          onChange={getSearchResults}
        />
        <MagnifyingGlassIcon className="w-10" />
      </div>
      <div
        id="searchResContainer"
        className="hidden z-10 bg-slate-50 top-32 absolute rounded-lg text-lg border-2 border-gray-500 shadow-xl w-[80%] lg:w-[50%]"
      >
        {searchResults.length > 0 ? (
          searchResults.map((item) => {
            return (
              <div
                onClick={() => navigate(`/product-detail/${item.id}`)}
                className="border-2 hover:bg-gray-200 p-1 rounded-xl cursor-pointer mx-auto w-[100%] "
              >
                <div className="flex items-center gap-2">
                  <img width={37} height={37} src={item.thumbnail} alt="" />
                  <div>
                    <h2>
                      {item.title} in{' '}
                      <span className="text-gray-700">#{item.category}</span>
                    </h2>
                    <p>{item.brand}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="p-2">No results for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default Search;
