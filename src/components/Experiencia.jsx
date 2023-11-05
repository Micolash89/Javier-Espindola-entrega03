const Experiencia = ({ element: { img, title1, title2, paragraph } }) => {
  return (
    <div className="section4__div1">
      <div className="section4__div1--div section4Div1">
        <div className="section4Div1__div1">
          <img className="section4Div1__div1--img" src={`${img}`} alt="" />
        </div>

        <div className="section4Div1__div2">
          <span className="section4Div1__div2--span texto3">{title2}</span>
          <h4 className="section4Div__div2--h4 texto2">{title1}</h4>
        </div>
      </div>
      <p className="section4__div1--p texto2">{paragraph}</p>
    </div>
  );
};

export default Experiencia;
