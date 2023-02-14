import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import NavBar2 from "./components/NavBar2";
import React from "react";

import { Routes, Route, BrowserRouter, Switch } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import Basses from "./components/Basses";

function App() {
  return (
    <div className="Ap">
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting={"Bienvenidos a Guitar Store !!"} />
            }
          />
          <Route path="/bajos" element={<Basses />} />

          <Route exact path="/cart" element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
