import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gatoProducts } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'; // Importa el componente ItemDetail

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Busca el producto en gatoProducts por su ID
    const foundItem = gatoProducts.find(product => product.id === parseInt(itemId));
    setItem(foundItem);
  }, [itemId]);

  return (
    <div>
      {item ? (
        <ItemDetail {...item} />
      ) : (
        <p>Item no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
