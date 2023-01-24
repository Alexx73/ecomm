import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import NavBar2 from "./components/NavBar2";

function App() {
  return (
    <div className="App">
      <NavBar2 />
      {/* <NavBar /> */}
      <ItemListContainer greeting={"Bienvenidos a Guitar Store !!"} />
    </div>
  );
}

export default App;
