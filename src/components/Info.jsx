import React from "react";
import { useParams } from "react-router-dom";
import instrumentos from "../data/instrumentos.json";
import "./info.css";

const Info = () => {
  let params = useParams();
  let { id } = useParams();
  console.log(params);

  const obj = instrumentos.find((obj) => obj.id == id);
  console.log(obj.nombre);

  return (
    <div className="container">
      <img className="img" src={obj.poster_path} alt="" />
      <h2> {obj.nombre} </h2>
      <h4> {obj.precio} </h4>
      <h5> {obj.descripcion} </h5>
    </div>
  );
};

export default Info;
