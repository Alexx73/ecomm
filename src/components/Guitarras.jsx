import React from "react";
import instrumentos from "../data/instrumentos.json";
import InstumentosCard from "./InstumentosCard";

const Bajos = () => {
  const categoria = "Guitarra eléctrica";

  const guitarras = instrumentos.filter(
    (guitarra) => categoria == guitarra.categoria
  );
  console.log(guitarras);
  return (
    <div>
      <h2>Guitarras</h2>
      <ul className="instrumentos_Grid">
        {guitarras.map((guitarra) => (
          <InstumentosCard instrumento={guitarra} />
        ))}
      </ul>
    </div>
  );
};

export default Bajos;
