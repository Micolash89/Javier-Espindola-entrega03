import { useEffect, useState } from "react";
import "./section6Css.css";
import CertificadosCards from "./CertificadosCards";

const Section6 = ({ ruta, setTam, posActual }) => {
  const [data, setData] = useState([]);

  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(0);
  useEffect(() => {
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
      .catch((error) => console.log(error));
  }, [ruta, posActual, inicio, fin]);

  return (
    <>
      <section className="main__section6" id="sectionTitulos">
        {data
          .map((element, i) => <CertificadosCards key={i} element={element} />)
          .slice(inicio, fin)}
      </section>
    </>
  );
};

export default Section6;
