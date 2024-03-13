import { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <article className="inicio">
      <div>
        <h3> {count} </h3>
      </div>

      <div className="agregaralcarrito">
        <button onClick={decrement}> - </button>
        <div className="add-to-cart-container">
          <button onClick={() => onAdd(count)}> Llevar al guacal </button>
        </div>
        <button onClick={increment}> + </button>
      </div>
    </article>
  );
};

export default ItemCount;
