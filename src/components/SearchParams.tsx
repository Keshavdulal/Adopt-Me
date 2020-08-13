import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent,
} from "react";
import { RouteComponentProps } from "@reach/router";
import pet, { Animal, ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "../ThemeContext";

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([] as string[]);
  const [animal, AnimalDropDown] = useDropdown("Animal", "Dog", ANIMALS); // Custom hooks
  const [breed, BreedDropDown, setBreed] = useDropdown("Breed", "", breeds); // Custom hooks
  const [pets, setPets] = useState([] as Animal[]);
  // const [theme, setTheme] = useContext(ThemeContext);

  // get pet results based on selection criteria
  async function requestPets() {
    const { animals } = await pet.animals({ location, breed, type: animal });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]); // set array of breeds empty
    setBreed(""); // set current breed empty
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedString = apiBreeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal, setBreed, setBreeds]); // dependency array

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
          {/* <label htmlFor="theme">
            Theme
            <select
              value={theme}
              onClick={(e) => setTheme(e.target.value)}
              onBlur={(e) => setTheme(e.target.value)}
            >
              <options value="Peru">Peru</options>
              <options value="darkBlue">Dark Blue</options>
              <options value="mediumOrchid">Orchid</options>
              <options value="chartreuse">Chartreuse</options>
            </select>
          </label> */}
          {/* <button type="submit" style={{ backgroundColor: theme }}> */}
          <button type="submit">Submit</button>
        </label>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
