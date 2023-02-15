import React from "react";
import "./InstumentosCard.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

const InstumentosCard = ({ instrumento }) => {
  //   const imgUrl = "../img" + instrumento.poster_path;
  //   const imgUrl2 = instrumento.poster_path;

  //     "poster_path": "../img/bass-spector-euro-5.jpg",

  //   const logo = require("../img/bass-spector-euro-5.jpg");
  //   <img src={logo} />
  //  const url={require('../img/' + instrumento.poster_path)}

  return (
    <li className="movieCard">
      {/* <Link to={`/info/${instrumento.id}`} className="btn btn-light">
        <img className="movieImage" src={instrumento.poster_path} />
      </Link> */}

      <Link to={`/info/${instrumento.id}`}>
        <img className="movieImage" src={instrumento.poster_path} />
      </Link>

      {/* <Link
        to={{
          pathname: "/register",
          state: data_you_need_to_pass,
        }}
      ></Link> */}

      {/* <img src={require(`img${instrumento.poster_path}`)} /> */}

      {/* <img src={require(`../../folder-path/${dynamic - filename}.png`)} /> */}
      <div>
        <h3>{instrumento.nombre}</h3>
        <h5> {instrumento.precio} </h5>
      </div>
    </li>
  );
};

export default InstumentosCard;
