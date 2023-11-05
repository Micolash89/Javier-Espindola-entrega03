import React from "react";

const CertificadosCards = ({
  element: { img, hashTag, title, paragraph, demo, code },
}) => {
  return (
    <>
      <div className="main__section6--div section6Div1">
        <div className="section6Div1__div1">
          <img className="section6Div1__div1--img" src={`${img}`} alt="" />
        </div>
        <div className="section6Div1__div2">
          <span className="section6Div1__div2--span titulo2">{hashTag}</span>
          <h3 className="section6Div1__div2--h3 titulo1">{title}</h3>
        </div>
        <p className="section6Div1__p texto1">{paragraph}</p>
        <div className="section6Div1__div3">
          <a
            target="_blank"
            href={`${demo}`}
            className="section6Div1__div3--button texto1"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            target="_blank"
            href={`${code}`}
            className="section6Div1__div3--button texto1"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </>
  );
};

export default CertificadosCards;
