import CardA from "./CardA";
import "./css/certificadosCardsCss.css";
// lo usa section6
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
          <CardA link={demo} name="demo activado section6Div1" content="Demo" />
          <CardA link={code} name="code section6Div1" content="Code" />
        </div>
      </div>
    </>
  );
};

export default CertificadosCards;
