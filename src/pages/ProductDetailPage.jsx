import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ProductDetail from '../components/product-detail/ProductDetail';

const ProductDetailPage = ({setProgress}) => {
  return (
    <>
      <NavBar />
      <ProductDetail setProgress={setProgress} />
    </>
  );
};

export default ProductDetailPage;
