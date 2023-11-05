const HeaderH3 = ({ name, content }) => {
  return (
    <>
      <h3 className="texto1">
        <i className={`${name}`}></i> {content}
      </h3>
    </>
  );
};

export default HeaderH3;
