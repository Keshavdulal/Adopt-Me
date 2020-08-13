// Most code from reactjs.org/docs/error-boundaries.html
import React, { Component, ErrorInfo } from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundaries extends Component {
  public state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error. ", error, info);
  }

  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <div>
          <h1>
            There was error with this listing. <Link to="/">Return Home</Link>{" "}
          </h1>
          <span>Or Wait 5 Seconds</span>
        </div>
      );
    }

    // must return something
    return this.props.children;
  }
}
