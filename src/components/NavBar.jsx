import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header-container">
      NavBar
      <FontAwesomeIcon icon={faBars} size="lg" color="red" />
      <small>Menu</small>
      <nav>
        <ul id="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>

          <li className="products-items">
            <a href="/">
              Productos <span className="arrow"></span>{" "}
            </a>
          </li>

          <li>
            <a href="/">Blog</a>
          </li>

          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
      {/* Logo de la marca */}
      <div className="logo-container">
        <img src="" alt=""></img>
      </div>
      {/* Cart Widget */}
      <div className="cart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
