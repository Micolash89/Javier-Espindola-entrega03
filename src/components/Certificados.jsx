const Certificados = ({ element: { img, title1, title2 } }) => {
  return (
    <div className="section2Div__div--div section2DivDiv1">
      <div className="section2DivDiv1__div1">
        <img className="section2DivDiv1__div1--img" src={`${img}`} alt="" />
      </div>
      <div className="section2DivDiv1__div">
        <h3 className="section2DivDiv1__h3 texto2">{title1}</h3>
        <span className="section2DivDiv1__span texto3">{title2}</span>
      </div>
    </div>
  );
};

export default Certificados;
