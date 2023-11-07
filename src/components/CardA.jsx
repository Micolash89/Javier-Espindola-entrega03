// lo usa certificadosCards y desktopCard
const CardA = ({ link, name, content }) => {
  return (
    <>
      <a
        target="_blank"
        href={`${link}`}
        className={`${name}__div3--button texto1 demo`}
        rel="noreferrer"
      >
        {content}
      </a>
    </>
  );
};

export default CardA;
