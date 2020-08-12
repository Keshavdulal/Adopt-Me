import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Navbar = () => {
  return (
    <header
      css={css`
        background-color: #d9c148;
        padding: 15px;
        margin-bottom: 10px;
        border-radius: 10px;
      `}
    >
      <Link to="/"> Adopt Me</Link>
      <span
        css={css`
          font-size: 60px;
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
