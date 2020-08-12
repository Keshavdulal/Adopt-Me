import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Caraousel from "./Carousel";
import ErrorBoundaries from "./ErrorBoundaries";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = { loading: true };

  componentDidMount() {
    // throw new Error("something went wrong");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    });
  }

  render() {
    const {
      loading,
      name,
      animal,
      breed,
      location,
      description,
      media,
    } = this.state;

    return (
      <div>
        {loading ? (
          <h1>Loading Data</h1>
        ) : (
          <div className="details">
            <Caraousel media={media} />
            <div>
              <h1>{name}</h1>
              <h2>{`${animal} - ${breed} - ${location}`}</h2>
              <p>{description}</p>
              <button>Adopt {name}</button>
              {/* <ThemeContext.Consumer>
                {(themeHook) => (
                  <button style={{ backgroundColor: themeHook[0] }}>
                    Adopt {name}
                  </button>
                )}
              </ThemeContext.Consumer> */}
            </div>
          </div>
        )}
      </div>
    );
  }
}

//HOC Element
export default function detailsWithErrorBoundaries(props) {
  return (
    <ErrorBoundaries>
      {/* be cautious with spread operator - decreases readability */}
      <Details {...props} />
    </ErrorBoundaries>
  );
}
