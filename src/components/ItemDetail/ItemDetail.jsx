import ItemCount from '../ItemCount/ItemCount';
import React from 'react';

const ItemDetail = ({ product }) => {
  const { name, category, price, image, description } = product;

  return (
    <article className='card2'>
        <div>
            <img src={image} alt={name} />
        </div>
        <div>
            <h3>{name}</h3>
            <h4>Categoría: {category}</h4>
            <h4>Precio: ${price}</h4>
            <p>{description}</p>
            
            <ItemCount initial={1} stock={10} />

      </div>
    </article>
  );
};

export default ItemDetail;
