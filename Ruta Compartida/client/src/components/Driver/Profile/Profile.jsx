import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    
    <div className="container">

      <div>
        <Link to="/Driver/Index">Go back</Link>
      </div>

      <div className="labels">
        <p>Profile</p>
        <p>See and edit your personal information</p>
      </div>

      {/* Datos del usuario */}
      <div id="data-spawn">
        <div>
          <p>Jared Garcia</p>
          <p>Personal information</p>
          <p>Student id: 0320158148</p>
          <p>Email: 0320158148@ut-tjuana.edu.mx</p>
          <p>Phone: 664-515-1841</p>
        </div>
        <div>
          <p>Vehicle data</p>
          <p>Car maker: Toyota</p>
          <p>Model: Corolla</p>
          <p>Year: 2017</p>
          <p>Color: Gray</p>
          <p>Frame: 8</p>
        </div>
      </div>

      <div className="botton">
        <Link to="/Profile/EditeProfile">Edit Profile</Link>
      </div>
    </div>
  );
};

export default Profile;
