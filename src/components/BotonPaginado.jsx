import React, { useState } from "react";
import { useEffect } from "react";
import "./botonPaginadoCss.css";

const BotonPaginado = ({ posActual, setPosActual, i, tam }) => {
  function handlePos() {
    switch (i) {
      case "<":
        setPosActual(posActual == 0 ? posActual : --posActual);
        break;

      case ">":
        setPosActual(
          posActual < Math.ceil(tam / 3) - 1 ? ++posActual : posActual
        );
        break;

      default:
        setPosActual(i - 1);
    }
  }

  return (
    <>
      <button
        className={`footer__section--button footer__button--${i + 1} texto2 ${
          i - 1 == posActual ? "activado" : ""
        }`}
        id={`btn${i}`}
        onClick={handlePos}
      >
        {i}
      </button>
    </>
  );
};

export default BotonPaginado;
