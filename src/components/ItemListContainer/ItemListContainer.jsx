import React, { useState, useEffect } from "react";
import { gatoProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Simulando una llamada asíncrona para cargar los productos
        setTimeout(() => {
            setProductos(gatoProducts);
            setLoading(false);
        }, 1000); // Simulamos una carga 
    }, []);

    return (
        <main className="Itemlistcontainerbody">
            <h1>{saludo}</h1>

            {loading ? (
                <p>Cargando productos...</p>

            ) : (

                <ItemList gatoProducts={productos} />
            )}
        </main>
    );
};

export default ItemListContainer;
