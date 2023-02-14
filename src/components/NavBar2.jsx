import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar2.css";
import logo from "../img/guitar-logo.png";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <header className="header inline">
      {/* <Link to="/"> */}
      <div className="logo inline">
        <Link to={"/"}>
          <img className="logo inline" src={logo} alt="" />
        </Link>
      </div>
      {/* </Link> */}

      {/* <h3 className="logo-desc">Guitar Store</h3> */}

      <nav>
        <ul className="nav-links">
          <li>
            <Link to={"/"}>Inicio</Link>
            {/* <a href="#">Inicio</a> */}
          </li>
          <li>
            <a href="#">Guitarras</a>
          </li>
          <li>
            <Link to={"/bajos"}>bajos</Link>
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
