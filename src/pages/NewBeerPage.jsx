import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const navigate = useNavigate();

  function handleCreate(event) {
    event.preventDefault();
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, formData)
      .then((newData) => navigate(`/`))
      .catch((error) => navigate(`/new-beer`));
  }

  function handleInput(event) {
    const inputName = event.target.name;
    const value = event.target.value;
    setFormData((formData) => {
      return { ...formData, [inputName]: value };
    });
  }

  return (
    <div className="AddApartmentPage">
      <h3>Create new beer </h3>

      <form onSubmit={handleCreate}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={formData.name}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={handleInput}
          value={formData.tagline}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleInput}
          value={formData.description}
        />

        <label>First brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleInput}
          value={formData.first_brewed}
        />

        <label>Brewer tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleInput}
          value={formData.brewers_tips}
        />

        <label>Attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleInput}
          value={formData.attenuation_level}
        />

        <label>Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleInput}
          value={formData.contributed_by}
        />

        <button type="submit">Create beer</button>
      </form>
    </div>
  );
}
