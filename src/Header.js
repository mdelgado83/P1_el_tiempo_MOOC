

export default function Header(props) {

  return (
    <>
      <div className="row justify-content-center" id="cabecera">
        <div className="col-1">
          <img className="logo" src={process.env.PUBLIC_URL + "/sun.webp"} alt="logo de la pagina" />
        </div>
        <div className="col-7 align-self-center">
          <h3 className="mensaje">Bienvenido a la página de Manuel Delgado Morte</h3>
        </div>


      </div>
    </>
  );
}