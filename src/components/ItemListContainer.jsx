import React from "react";
import "./ItemListContainer.css";
import instrumentos from "../data/instrumentos.json";
import InstumentosCard from "./InstumentosCard";

const ItemListContainer = ({ greeting }) => {
  return (
    <main>
      <h2 id="item-list-container">{greeting}</h2>
      <ul className="instrumentos_Grid">
        {instrumentos.map((instrumento) => (
          <InstumentosCard key={instrumento.id} instrumento={instrumento} />
        ))}
      </ul>
    </main>
  );
};

export default ItemListContainer;
