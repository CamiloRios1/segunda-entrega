import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';
import ItemDetail from './components/ItemDetail/ItemDetail'; // Importa ItemDetail
import { gatoProducts } from './asyncMock';

function App() {
  // Simular un ID específico de producto para mostrar en el ItemDetail
  const productIdToShow = 1; // Cambia esto al ID del producto que deseas mostrar

  // Filtrar el producto específico por su ID
  const productToShow = gatoProducts.find(product => product.id === productIdToShow);

  return (
    <>
      {/* Header de la web */}
      <Navbar />

      {/* Body de la página */}
      <article className='inicio'>
        {/* Renderizar el componente ItemListContainer */}
        <ItemListContainer saludo={"Hola bienvenidos a los productos de mis gatos"} />

        {/* Renderizar el componente ItemDetail con el producto específico */}
        <ItemDetail product={productToShow} />
      </article>
    </>
  );
}

export default App;
