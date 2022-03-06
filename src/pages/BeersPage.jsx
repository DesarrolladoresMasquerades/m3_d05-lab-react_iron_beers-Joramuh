import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchBarData, setSearchBarData] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data));
  }, []);

  function filterBeers(event) {
    const value = event.target.value;
    setSearchBarData(value);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then((response) => {
        response.data.length ? setBeers(response.data) : setBeers([]);
      });
  }

  return (
    <div>
      <h1>All beers</h1>
      <input
        className="search-bar"
        value={searchBarData}
        type="search"
        name="search-bar"
        onChange={filterBeers}
      />

      <div className="beers-container">
        {beers.map((beer) => (
          <div key={beer._id} className="beer-container">
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="beer" />
              <h3>{beer.name}</h3>
            </Link>
            <h4>{beer.tagline}</h4>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
