import React from "react";
import { gatoProducts } from "../../asyncMock";
import Item from "../Item/Item";

const ItemList = () => {
    return (
        <section className="item-list-container">
            {gatoProducts.map(product => ( // Cambié las llaves por paréntesis
                <Item key={product.id} {...product} /> // Cambié Key a key y agregué cierre de etiqueta />
            ))}
        </section>
    );
};

export default ItemList;
