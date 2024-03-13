import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({ products }) => {
  const handleAddToCart = (count) => {
    // Aquí puedes agregar la lógica para manejar la adición del producto al carrito
    console.log(`Añadir ${count} producto(s) al carrito`);
  };

  return (
    <section className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <img src={product.image} alt={product.name} />
          <ItemCount className="itemcount" initial={1} stock={30} onAdd={handleAddToCart} />
        </div>
      ))}
    </section>
  );
};

export default ItemList;
