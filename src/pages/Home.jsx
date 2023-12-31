import React, { useEffect } from 'react';
import NavBar from '../components/NavBar/NavBar';
import CategoryFilter from '../components/category-filter/CategoryFilter';
import { useNavigate } from 'react-router-dom';
import Search from '../components/search/Search';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('login_token')) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <NavBar />
      <Search />
      <CategoryFilter />
    </div>
  );
};

export default Home;
