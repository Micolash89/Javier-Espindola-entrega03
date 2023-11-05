import "./section4Css.css";
import { useEffect, useState } from "react";
import Experiencia from "./Experiencia";
import { END_POINTS } from "./EndPoints.Constantes";

const Section4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(END_POINTS.EXPERIENCE())
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
    <>
      <section className="main__section4">
        <h3 className="main__section4--h3 titulo1">Experiencia</h3>

        <div className="main__section4--div section4" id="experiencia">
          {data.map((element, i) => (
            <Experiencia key={i} element={element} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Section4;
