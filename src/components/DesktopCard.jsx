import CardA from "./CardA";
// lo usa section 3
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
        <CardA link={demo} name="demo activado section3Div" content="Demo" />
        <CardA link={code} name="code section3Div" content="Code" />
      </div>
    </>
  );
};

export default DesktopCard;
