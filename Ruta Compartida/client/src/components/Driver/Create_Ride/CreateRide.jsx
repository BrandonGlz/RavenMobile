import { Link } from 'react-router-dom';


const CreateRide = () => {
  return (
    <div className="container">
      {/* Botón para regresar */}

      /* Al momento de añadir el punto de partida al punto de destino, debe de haber una opcion que permita editar la ruta antes de confirmarla */


      <div className="return-button">
        <Link to="/Driver/Index">Go Back</Link>
      </div>

      <form>
        <div className="label">
          <p>Formulario</p>
        </div>

        <label htmlFor="fromLocation">From:</label>
        <input type="text" id="fromLocation" name="fromLocation" required />

        <label htmlFor="toLocation">To:</label>
        <input type="text" id="toLocation" name="toLocation" required />

        <label htmlFor="capacity">Capacity:</label>
        <input type="number" id="capacity" name="capacity" required />

        <label htmlFor="personalData">Personal Data ID:</label>
        <input type="number" id="personalData" name="personalData" required />

        <div className="button">
          <Link to="/Create_Ride/DaysOfWeek">Day of Week</Link>
        </div>
      </form>
    </div>
  );
};

export default CreateRide;