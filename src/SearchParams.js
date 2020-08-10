import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
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

  useEffect(() => {
    setBreeds([]); //set array of breeds empty
    setBreed(""); //set current breed empty
    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal, setBreed, setBreeds]); //dependency array

  return (
    <div className="search-params">
      <form action="">
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
    </div>
  );
};

export default SearchParams;
