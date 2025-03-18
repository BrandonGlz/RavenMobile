import { Link } from 'react-router-dom';

const VerifyCode = () => {
  return (
    <div className="container">
      <div className="return-button">
        <Link to="/Forget_My_Password/ResetPassword">Go Back</Link>
      </div>
      <div className="icon">
        <img src="" alt="icon" />
      </div>
      <form className="form">
        <div className="labels">
          <p>Verify</p>
          <p>Code</p>
        </div>
        <div className="input">
          <input type="number" placeholder="Enter the Code" />
        </div>
        <div className="buttons">
          <Link to="/Forget_My_Password/CreatePassword">Continue</Link>
        </div>
      </form>
    </div>
  );
};

export default VerifyCode;
