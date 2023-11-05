import React from "react";
import "./section1Css.css";
import Progreso from "./Progreso";

const Section1 = () => {
  return (
    <section className="main__section1">
      <div className="main__section1--div1 mainDiv1">
        <h2 className="mainDiv1__h2 titulo1">Skill</h2>

        <div className="mainDiv1__div ">
          <Progreso titulo="HTML" valor="95" />
          <Progreso titulo="CSS" valor="80" />
          <Progreso titulo="JS" valor="90" />
          <Progreso titulo="React" valor="80" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
