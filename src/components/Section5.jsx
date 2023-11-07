import { useState } from "react";

import "./css/section5Css.css";
import Section5Botones from "./Section5Botones";
import { END_POINTS } from "./EndPoints.Constantes";
// <!-- btonsetBtoon cambiar nombre -->
const Section5 = ({ setBtn, btn, setPosActual }) => {
  const [activo, SetActivo] = useState("Responsivo");

  return (
    <>
      <section className="main__section5">
        <div className="main__section5--div mainDiv">
          <h2 className="mainDiv__h2 titulo1">Proyectos(3)</h2>
          <div className="mainDiv__div">
            <Section5Botones
              activo={activo}
              SetActivo={SetActivo}
              setPosActual={setPosActual}
              setBtn={setBtn}
              btn={btn}
              url={END_POINTS.RESPONSIVE()}
              titulo="Responsivo"
              id="btnResponsive"
            />
            <Section5Botones
              activo={activo}
              SetActivo={SetActivo}
              setPosActual={setPosActual}
              setBtn={setBtn}
              btn={btn}
              url={END_POINTS.JS()}
              titulo="JavaScript"
              id="btnJS"
            />
            <Section5Botones
              activo={activo}
              SetActivo={SetActivo}
              setPosActual={setPosActual}
              setBtn={setBtn}
              btn={btn}
              url={END_POINTS.REACT()}
              titulo="React"
              id="btnReact"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
