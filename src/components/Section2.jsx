import { useEffect } from "react";
import { useState } from "react";

import "./section2Css.css";
import Certificados from "./Certificados";
import { END_POINTS } from "./EndPoints.Constantes";

const Section2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(END_POINTS.CERTIFICATES())
      .then((response) => {
        if (!response.ok) throw "Hubo un error";

        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="main__section2">
      <div className="main__section2--div section2Div">
        <h2 className="section2Div__h2 titulo1">Certificados</h2>
        <div className="section2Div__div" id="certificados">
          {data.map((element, i) => (
            <Certificados key={i} element={element} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
