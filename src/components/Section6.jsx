import { useEffect, useState } from "react";
import "./css/section6Css.css";
import CertificadosCards from "./CertificadosCards";
import Loader from "./Loader";
import Error from "./Error";

const Section6 = ({ ruta, setTam, posActual }) => {
  const [data, setData] = useState([]); //array de objetos
  const [inicio, setInicio] = useState(0); //posicion inicial
  const [fin, setFin] = useState(0); //posicion final
  const [loading, setLoading] = useState(true); //estado de carga
  const [error, setError] = useState(false); //estado de error
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
        setTam(data.length);
        setInicio(posActual * 3);
        setFin(data.length >= inicio + 3 ? inicio + 3 : data.length);
      })
      .catch((error) => {
        setError(true);
        setData([]);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [ruta, posActual, inicio, fin]);

  return (
    <>
      <section className="main__section6" id="sectionTitulos">
        {loading && <Loader />}
        {error && <Error />}
        {!loading &&
          data
            .map((element, i) => (
              <CertificadosCards loading={loading} key={i} element={element} />
            ))
            .slice(inicio, fin)}
      </section>
    </>
  );
};

export default Section6;
