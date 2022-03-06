import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

export default function HomePage() {
  return (
    <div>
      <div>
        <Link to={"/beers"}>
          <img src={beers} alt="beers" height="200px" />
          <h1>All Beers</h1>
        </Link>
        <p>See all the beers here</p>
      </div>

      <div>
        <Link to={"/random-beer"}>
          <img src={randomBeer} alt="random-beer" height="200px" />
          <h1>Random Beer</h1>
        </Link>
        <p>See a random beer</p>
      </div>

      <div>
        <Link to={"/new-beer"}>
          <img src={newBeer} alt="new-beer" height="200px" />
          <h1>New Beer</h1>
        </Link>
        <p>Create your beer</p>
      </div>
    </div>
  );
}
