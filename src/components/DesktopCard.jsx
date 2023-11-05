import React from "react";

const DesktopCard = ({
  element: { img, hashTag, title, paragraph, demo, code },
}) => {
  return (
    <>
      <div className="section3Div__div1">
        <img className="section3Div__div1--img" src={`${img}`} alt="" />
      </div>
      <div className="section3Div__div2">
        <span className="section3Div__div2--span titulo2">{hashTag}</span>
        <h3 className="section3Div__div2--h3 titulo1">{title}</h3>
      </div>
      <p className="section3Div__p texto1">{paragraph}</p>
      <div className="section3Div__div3">
        <a
          target="_blank"
          href={`${demo}`}
          className="section3Div__div3--button section3Button1 texto1"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          target="_blank"
          href={`${code}`}
          className="section3Div__div3--button section3Button2 texto1"
          rel="noreferrer"
        >
          Code
        </a>
      </div>
    </>
  );
};

export default DesktopCard;
