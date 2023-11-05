import React, { useEffect, useState } from "react";

import "./section3Css.css";
import DesktopCard from "./DesktopCard";

const Section3 = ({ ruta }) => {
  const [data, setData] = useState([false]);

  useEffect(() => {
    fetch(ruta)
      .then((response) => {
        if (!response.ok) throw "Hubo un error";

        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [ruta]);

  //console.log(data[0]);

  // vista grande de desktop
  return (
    <>
      <section className="main__section3">
        <div className="main__section3--div section3Div" id="tituloGrande">
          {data[0] && <DesktopCard element={data[0]} />}
        </div>
      </section>
    </>
  );
};

export default Section3;
