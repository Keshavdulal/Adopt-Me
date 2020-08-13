import React, { Component } from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import pet, { Photo } from "@frontendmasters/pet";

import Caraousel from "./Carousel";
import ErrorBoundaries from "../ErrorBoundaries";
import ThemeContext from "../ThemeContext";
import Modal from "./Modal";

class Details extends Component<RouteComponentProps<{ id: string }>> {
  public state = {
    loading: true,
    showModal: false,
    name: "",
    animal: "",
    location: "",
    description: "",
    media: [] as Photo[],
    url: "",
    breed: "",
  };

  public componentDidMount() {
    if (!this.props.id) {
      navigate("/");
      return;
    }

    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
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
      })
      .catch((err: Error) => this.setState({ error: err }));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  // Encouraged to use redirect component instead of this
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
          <div className="details">
            <h1>Loading Data</h1>
          </div>
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

// HOC Element
export default function detailsWithErrorBoundaries(
  props: RouteComponentProps<{ id: string }>
) {
  return (
    <ErrorBoundaries>
      {/* be cautious with spread operator - decreases readability */}
      <Details {...props} />
    </ErrorBoundaries>
  );
}
