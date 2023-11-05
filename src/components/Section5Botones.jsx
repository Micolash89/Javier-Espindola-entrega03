import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const Section5Botones = ({
  activo,
  SetActivo,
  setPosActual,
  setBtn,
  btn,
  url,
  titulo,
  id,
}) => {
  function handleClick() {
    setBtn(url);
    setPosActual(0);

    switch (titulo) {
      case "Responsivo":
        SetActivo("Responsivo");
        break;

      case "JavaScript":
        SetActivo("JavaScript");
        break;

      case "React":
        SetActivo("React");
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`mainDiv__div--button mainButton1 texto1 ${
          activo == titulo ? "activado" : ""
        } `}
        id={`${id}`}
      >
        {titulo}
      </button>
    </>
  );
};

export default Section5Botones;
