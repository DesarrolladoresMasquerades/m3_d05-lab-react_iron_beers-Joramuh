import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BeersPage from "./pages/BeersPage";
import BeerDetailPage from "./pages/BeerDetailPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

      <Route exact path="/beers/:beerId" element={<BeerDetailPage/>} ></Route>
        <Route exact path="/beers" element={<BeersPage/>} ></Route>
        <Route exact path="/random-beer" element={<RandomBeerPage/>} ></Route>
        <Route exact path="/new-beer" element={<NewBeerPage/>} ></Route>
        <Route exact path="/" element={<HomePage />} ></Route>
      </Routes>
    </div>
  );
}

export default App;

// leer exact ath y prevent default