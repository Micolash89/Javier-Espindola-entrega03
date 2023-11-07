import BotonPaginado from "./BotonPaginado";
import "./css/footerCss.css";
import { useEffect, useState } from "react";

const Footer = ({ posActual, setPosActual, tam }) => {
  const [botones, setBotones] = useState([]);

  useEffect(() => {
    let newBotones = [];

    for (let index = 0; index < Math.ceil(tam / 3); index++) {
      newBotones.push(
        <BotonPaginado
          posActual={posActual}
          setPosActual={setPosActual}
          key={index}
          i={index + 1}
          tam={tam}
        />
      );
    }
    setBotones(newBotones);
  }, [posActual, tam]);

  return (
    <footer className="footer">
      {/* <!-- botones --> */}
      <section className="footer__section" id="footer_section">
        {tam != 0 && (
          <BotonPaginado
            posActual={posActual}
            setPosActual={setPosActual}
            i="<"
            tam={tam}
          />
        )}
        {botones}
        {tam != 0 && (
          <BotonPaginado
            posActual={posActual}
            setPosActual={setPosActual}
            i=">"
            tam={tam}
          />
        )}
      </section>
    </footer>
  );
};

export default Footer;
