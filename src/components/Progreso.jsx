//import React from 'react'
import "./progresoCss.css";

const Progreso = ({ titulo, valor }) => {
  return (
    <>
      <span className="mainDiv1__div--span1 titulo1">{titulo}</span>
      <div className="contenedorRange">
        <progress
          className="contenedorRange__progress"
          value={`${valor}`}
          max="100"
        ></progress>
      </div>
    </>
  );
};

export default Progreso;
