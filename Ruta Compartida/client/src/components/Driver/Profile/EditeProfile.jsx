import { Link } from 'react-router-dom';

const EditProfile = () => {
  return (
    <div id="form-spawn">
      <div>
        <Link to="/Profile/Profile">Go Back</Link>
      </div>

      <div className="inputs-personal">
        <input type="number" placeholder="Phone Number" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="inputs-car">
        <input type="text" placeholder="Car Maker" />
        <input type="text" placeholder="Model" />
        <input type="date" placeholder="Year" />
        <input type="text" placeholder="Color" />
      </div>

      <div className="confirm-button">
        <Link to="/Profile/Profile">Confirm</Link>
      </div>
    </div>
  );
};

export default EditProfile;
