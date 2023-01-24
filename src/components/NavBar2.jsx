import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar2.css";
import logo from "../img/guitar-logo.png";

const NavBar2 = () => {
  return (
    <header className="header inline">
      <div className="logo inline">
        <img className="logo inline" src={logo} alt="" />
        {/* <h3 className="logo-desc">Guitar Store</h3> */}
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Guitarras</a>
          </li>
          <li>
            <a href="#">Bajos</a>
          </li>
        </ul>
      </nav>
      {/* <a class="btn" href="#">
        <button>Contact</button>
      </a> */}
      <CartWidget />
    </header>
  );
};

export default NavBar2;
