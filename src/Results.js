import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pet Found!</h1>
      ) : (
        <div>
          <h1>Results</h1>
          {pets.map((pet) => (
            <Pet
              id={pet.id}
              key={pet.id}
              name={pet.name}
              animal={pet.type}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
