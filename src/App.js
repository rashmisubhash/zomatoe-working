import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Food from "./components/Food";
import FoodOptions from "./components/FoodOptions";
import FilterButtons from "./components/FilterButtons";
import ColoredLine from "./components/ColoredLine";

import LandingPage from "../src/pages/landingPage/index";
import Footer from "../src/pages/landingPage/Footer";
import MainFooter from "../src/pages/landingPage/MainFooter";

function App() {
  const [location, setLocation] = useState("Chennai");
  const [searchQuery, setQuery] = useState("");
  const [filters, setFilters] = useState({ rating: 0 });

  const onChangeFilters = (filters) => {
    setFilters(filters);
  };

  return (
    <div className="App">
      <LandingPage />
      {/* <FoodOptions /> */}
      {/* <ColoredLine /> */}
      {/* <FilterButtons filters={filters} onChangeFilters={onChangeFilters} /> */}
      {/* <h1 className="mx-44 pt-4 text-3xl font-normal food-head" >Best Food in {location}</h1> */}
      <Food filters={filters} />
      {/* <Footer /> */}
      <MainFooter />
    </div>
  );
}

export default App;
