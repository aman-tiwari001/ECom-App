import React, { useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import CategoryFilter from '../components/category-filter/CategoryFilter';
import { useNavigate } from 'react-router-dom';
import Search from '../components/search/Search';

const Home = ({setProgress}) => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <Search />
      <CategoryFilter setProgress={setProgress} />
    </div>
  );
};

export default Home;
