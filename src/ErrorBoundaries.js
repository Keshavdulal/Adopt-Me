//Most code from reactjs.org/docs/error-boundaries.html
import React, { Component } from "react";
import { Link } from "@reach/router";

export default class ErrorBoundaries extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error. ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was error with this listing. <Link to="/">Return Home</Link>{" "}
        </h1>
      );
    }

    // must return something
    return this.props.children;
  }
}
