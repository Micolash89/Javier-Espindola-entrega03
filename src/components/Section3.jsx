import { useEffect, useState } from "react";

import "./css/section3Css.css";
import DesktopCard from "./DesktopCard";
import Loader from "./Loader";
import Error from "./Error";

const Section3 = ({ ruta }) => {
  const [data, setData] = useState([false]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(ruta)
      .then((response) => {
        if (!response.ok) throw "Hubo un error";

        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [ruta]);

  // vista grande de desktop
  return (
    <>
      <section className="main__section3">
        <div className="main__section3--div section3Div" id="tituloGrande">
          {error && <Error />}
          {loading && <Loader />}
          {!error && !loading && data[0] && <DesktopCard element={data[0]} />}
        </div>
      </section>
    </>
  );
};

export default Section3;
