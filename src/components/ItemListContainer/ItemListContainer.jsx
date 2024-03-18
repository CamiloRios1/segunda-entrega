import React, { useState } from 'react';
import { gatoProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState(gatoProducts);

  // Manejador de clics para el botón "Ver detalle"
  const handleItemClick = (productId) => {
    // Lógica para mostrar los detalles del producto seleccionado
    console.log('Producto seleccionado:', productId);
  };

  return (
    <main className="Itemlistcontainerbody">
      <h1>{saludo}</h1>
      <ItemList products={productos} onItemClick={handleItemClick} />
    </main>
  );
};

export default ItemListContainer;
