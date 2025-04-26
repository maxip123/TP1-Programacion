
const Main = ({ alumno }) => {
  return (
    <div>
      <h3>Soy Alumno de la UTN</h3>
      <img src={alumno.imagen} alt="" />
      <p>
        Nombre:{alumno.nombre} <br />
        Apellido: {alumno.apellido} <br />
        Edad:{alumno.edad} <br />
        Descripcion:{alumno.desc} <br />
      </p>
    </div>
  );
};

export default Main;
