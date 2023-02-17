import React from "react";
import instrumentos from "../data/instrumentos.json";
import InstumentosCard from "./InstumentosCard";

const Bajos = () => {
  const categoria = "Bajo eléctrico";

  const bajos = instrumentos.filter((bajo) => categoria == bajo.categoria);
  console.log(bajos);
  return (
    <div>
      <h2>Bajos</h2>
      <ul className="instrumentos_Grid">
        {bajos.map((bajo) => (
          <InstumentosCard instrumento={bajo} />
        ))}
      </ul>
    </div>
  );
};

export default Bajos;
