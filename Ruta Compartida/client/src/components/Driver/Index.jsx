import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="container">
      <div className="label">
        <p>Welcome to Raven Mobile</p>
      </div>
      {/* Implementar un div en la parte superior con el logo de la aplicacion y el nombre del usuario */}
      <div className="button">
        <Link to="/Create_Ride/CreateRide">Create Ride</Link>
      </div>

    </div>
  );
};

export default Index;
