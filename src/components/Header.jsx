import HeaderH3 from "./HeaderH3";
import HeaderParrafo from "./HeaderParrafo";
import "./headerCss.css";

export default function Header() {
  const p1 =
      "Self-motivated developer, who is willing to learn and create outstanding UI applications.",
    p2 =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi, illum voluptas exercitationem quisquam, doloremque dolor quia";

  return (
    <header className="header">
      <section className="header__section1"></section>

      <section className="header__section2">
        <div className="header__section2--div1 headerDiv1">
          <div className="headerDiv1__div1">
            <h1 className="headerDiv1__div1--h1 titulo1">Nombre</h1>
            <span className="headerDiv1__div1--span texto1">
              Front-end developer
            </span>
          </div>

          <div className="headerDiv1__div2">
            <HeaderH3 name="fa-solid fa-envelope" content="ejemplo@mail.com" />
            <HeaderH3 name="fa-solid fa-phone" content="+54 9 11-1234-5678" />
          </div>
        </div>

        <div className="header__section2--div2 headerDiv2">
          <HeaderParrafo name="headerDiv2__p1" content={p1} />
          <br />
          <HeaderParrafo name="headerDiv2__p2" content={p2} />
        </div>
      </section>
    </header>
  );
}
