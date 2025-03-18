import { Link } from 'react-router-dom';
import icon from '../img/icon.png';

import '../css/main.css';
import '../css/index.css';

export default function Index() {
  return (
    <div className="container">
      <div className="img">
        <img src={icon} alt="img" />
      </div>
      <div className="slogan">
        <p>Your Ride</p>
        <p>Your Choice</p>
      </div>

      <div className="button">
        <Link to='/Register/PersonalData'>Sign Up</Link> 
      </div>

      <div className="button">
        <Link to='/Login/Login'>Log in</Link> 
      </div>
    </div>
  );
}
