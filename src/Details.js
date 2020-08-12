import React, { Component } from "react";
import { navigate } from "@reach/router";
import pet from "@frontendmasters/pet";

import Caraousel from "./Carousel";
import ErrorBoundaries from "./ErrorBoundaries";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    // throw new Error("something went wrong");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url, // url to go to adopt the pet
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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  //encouraged to use redirect component instead of this
  adopt = () => navigate(this.state.url);

  render() {
    const {
      loading,
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal,
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
              {showModal && (
                <Modal>
                  <div>
                    <h1>Would you like to adopt {name}?</h1>
                    <div className="buttons">
                      <button onClick={this.adopt}>Yes</button>
                      <button onClick={this.toggleModal}>No</button>
                    </div>
                  </div>
                </Modal>
              )}
              <button onClick={this.toggleModal}>Adopt {name}</button>
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
