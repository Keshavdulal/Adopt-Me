import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  // always ref to the same element; don't create new ones
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    // grab the modal we created in index.html
    const modalRoot = document.getElementById("modal");

    //append the newly created div to our modal
    modalRoot.appendChild(elRef.current);

    // at the end remove the "newly" created div using a cleanup func when the modal gets closed
    return () => modalRoot.removeChild(elRef.current);
  }, []); // [] -> means run this useEffect only once

  // coolest part here i.e. rendering our div to another part of DOM
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

//ps: not trapping focus on this modal here
