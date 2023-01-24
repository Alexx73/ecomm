import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <section>
      <h2 id="item-list-container">{greeting}</h2>
    </section>
  );
};

export default ItemListContainer;
