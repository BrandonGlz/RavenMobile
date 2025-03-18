import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="container">
      <div className="return-button">
        <Link to="../Login/Login">Go Back</Link>
      </div>
      <div className="icon">
        <img src="" alt="icon" />
      </div>
      <form className="form">
        <div className="labels">
          <p>Your Email or</p>
          <p>Student ID</p>
        </div>
        <div className="input">
          <input type="password" placeholder="Email or ID" />
        </div>
        <div className="buttons">
          <Link to="/Forget_My_Password/VerifyCode">Continue</Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
