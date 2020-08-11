import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  //   const [animal, setAnimal] = useState("Dog");
  //   const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  //Custom hooks
  const [animal, AnimalDropDown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  //get pet results based on selection criteria
  async function requestPets() {
    const { animals } = await pet.animals({ location, breed, type: animal });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]); //set array of breeds empty
    setBreed(""); //set current breed empty
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedString = apiBreeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal, setBreed, setBreeds]); //dependency array

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <AnimalDropDown />
          <BreedDropDown />
          <button type="submit">Submit</button>
        </label>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
