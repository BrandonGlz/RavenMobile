import { Link } from 'react-router-dom';

const CreatePassword = () => {
  return (
    <div className="container">
      <div className="return-button">
        <Link to="/Forget_My_Password/VerifyCode">Go Back</Link>
      </div>
      <form className="form">
        <div className="labels">
          <p>Create a New</p>
          <p>Password</p>
        </div>
        <div className="inputs">
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Confirm your password" />
        </div>
        <div className="buttons">
          <Link to="../Login/Login">Continue</Link>
        </div>
      </form>
    </div>
  );
};

export default CreatePassword;
