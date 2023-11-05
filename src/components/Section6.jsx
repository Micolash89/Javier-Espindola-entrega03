import React, { useEffect, useState } from "react";

import "./section6Css.css";
import CertificadosCards from "./CertificadosCards";

const Section6 = ({ ruta, setTam, posActual }) => {
  const [data, setData] = useState([]);
  //sacar vec
  const [vec, setVec] = useState([]);
  //let vec
  //const [tam, setTam] = useState(0);
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
        // console.log("posiciio actual ",posActual," posicion acutual *3 (SLICE) ",posActual*3, " inicio ",inicio, " fin ",  fin);
        setInicio(posActual * 3);
        setFin(data.length >= inicio + 3 ? inicio + 3 : data.length);

        // console.log(data.length);

        setVec(data.slice(inicio, fin));
        // console.log("vector" + vec);
      })
      .catch((error) => console.log(error));
  }, [ruta, posActual, inicio, fin]);

  //console.log(data.slice(inicio,fin));

  return (
    <>
      <section className="main__section6" id="sectionTitulos">
        {data
          .map((element, i) => <CertificadosCards key={i} element={element} />)
          .slice(inicio, fin)}
        {/* {vec.map((element, i)=><CertificadosCards key={i} element={element} />)} */}
      </section>
    </>
  );
};

export default Section6;
