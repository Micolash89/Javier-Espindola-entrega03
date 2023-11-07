import "./css/mainCss.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import { END_POINTS } from "./EndPoints.Constantes";
import { useState } from "react";

const Main = ({ posActual, setTam, setPosActual }) => {
  const [btn, setBtn] = useState(END_POINTS.RESPONSIVE());

  return (
    <>
      <main className="main">
        {/* <!-- medio --> */}

        {/* <!-- skill --> */}
        <Section1 />

        {/* <!-- certificados --> */}
        <Section2 />

        {/* <!-- titulo version grande desktop --> */}
        <Section3 ruta={`${btn}`} />

        {/* <!-- experiencia --> */}
        <Section4 />

        {/* <!-- botones --> */}
        <Section5 setBtn={setBtn} setPosActual={setPosActual} btn={btn} />

        {/* <!-- titulos --> */}
        <Section6 ruta={`${btn}`} setTam={setTam} posActual={posActual} />
      </main>
    </>
  );
};

export default Main;
