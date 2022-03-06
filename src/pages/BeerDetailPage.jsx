import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BeerDetailPage() {
  const [beer, setBeer] = useState({});
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then((response) => setBeer(response.data));
  }, [params.beerId]);

  return beer._id ? (
    <div key={beer._id}>
      <img src={beer.image_url} alt="beer" />
      <h3>{beer.name}</h3>
      <p>{beer.tagline} </p>
      <p>{beer.first_brewed} </p>
      <p>{beer.attenuation_level} </p>
      <p>{beer.description} </p>
      <p>{beer.contributed_by} </p>
    </div>
  ) : (
    <div>
      <img
        src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
        alt="loading"
        width={300}
      />
      <p> Loading beer...</p>
    </div>
  );
}
