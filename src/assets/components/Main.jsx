const Main = ({alumno}) => {
  return (
    <div className="main">
      <div className="card">
        <h3>Soy Alumno de la UTN</h3>
        <img className="img" src={alumno.imagen} alt="" />
        <p>
          Nombre: {alumno.nombre} <br />
          Apellido: {alumno.apellido} <br />
          Edad: {alumno.edad} <br />
          Descripción: {alumno.desc} <br />
        </p>
      </div>
    </div>
  );
};

export default Main;