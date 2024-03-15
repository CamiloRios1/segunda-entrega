// ProductDetailPage.jsx
import React from 'react';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const ProductDetailPage = () => {
  return (
    <div className='product-detail-page'>
      <h1>Bienvenido a la página de detalles del producto</h1>
      <ItemDetailContainer />
    </div>
  );
};

export default ProductDetailPage;
