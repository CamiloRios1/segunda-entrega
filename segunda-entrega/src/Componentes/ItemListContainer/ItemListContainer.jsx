import React, { useState, useEffect } from "react";
import { kittenData, donationProductData } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const combinedData = [...donationProductData];
        setProducts(combinedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <div className="hero">
        <h1>{greeting}</h1>
        <ItemList className="carddonation"products={products} />
      </div>
    </main>
  );
};

export default ItemListContainer;
