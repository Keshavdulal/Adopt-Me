// styled component Navbar
import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";

import Colors from "../Colors";

const spin = keyframes`
  to{
    transform:rotate(360deg);
  }`;

const Navbar = () => {
  return (
    <header
      css={css`
        background-color: ${Colors.primary};
        padding: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
      `}
    >
      <Link to="/"> Adopt Me</Link>
      <span
        css={css`
          font-size: 60px;

          &:hover {
            animation: 1s ${spin} ease-in-out;
            cursor: pointer;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐶
      </span>
    </header>
  );
};

export default Navbar;
