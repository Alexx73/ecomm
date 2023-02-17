import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import NavBar2 from "./components/NavBar2";
import React from "react";

import { Routes, Route, BrowserRouter, Switch } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import Bajos from "./components/Bajos";
import Info from "./components/Info";
import Guitarras from "./components/Guitarras";

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
          <Route path="/bajos" element={<Bajos />} />
          <Route path="/guitarras" element={<Guitarras />} />

          <Route exact path="/info/:id" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
