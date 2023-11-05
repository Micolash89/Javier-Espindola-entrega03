import React from "react";

import "./headerCss.css";

export default function Header() {
  return (
    <header className="header">
      <section className="header__section1">
        {/* <img
          className=" header__section1--img"
          src="images/fotoPerfil.jpeg"
          alt=""
        />  */}
      </section>

      <section className="header__section2">
        <div className="header__section2--div1 headerDiv1">
          <div className="headerDiv1__div1">
            <h1 className="headerDiv1__div1--h1 titulo1">Nombre</h1>
            <span className="headerDiv1__div1--span texto1">
              Front-end developer
            </span>
          </div>

          <div className="headerDiv1__div2">
            <h3 className="texto1">
              <i className="fa-solid fa-envelope"></i> ejemplo@mail.com
            </h3>
            <h3 className="texto1">
              <i className="fa-solid fa-phone"></i> +54 9 11-1234-5678
            </h3>
          </div>
        </div>

        <div className="header__section2--div2 headerDiv2">
          <p className="headerDiv2__p1 texto1">
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.
          </p>

          <p className="headerDiv2__p2 texto1">
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            quasi, illum voluptas exercitationem quisquam, doloremque dolor quia
          </p>
        </div>
      </section>
    </header>
  );
}
