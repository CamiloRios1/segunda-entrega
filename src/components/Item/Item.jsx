const Item = ({ name, category, price, image }) => {
    return (
      <article>
        <h4>Categoría: {category}</h4>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        <h4>Precio: {price}</h4>
        <a href="#">Ver detalle</a>
      </article>
    );
  };
  
  export default Item;
  