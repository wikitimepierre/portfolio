import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userInfo } from '../../app/features/user/userSlice';
//TODO fake login for the demo (no server)

function Signin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    switch (email + "-" + password) {
      case 'tony@stark.com-password123':
        dispatch(userInfo({ email: "tony@stark.com", userName: "Iron", firstName: "Tony", lastName: "Stark" }));
        navigate('/2-Bank/user');
        break;
      case 'steve@rogers.com-password456':
        dispatch(userInfo({ email: "steve@rogers.com", userName: "Captain", firstName: "Steve", lastName: "Rogers" }));
        navigate('/2-Bank/user');
        break;
      default:
        navigate('/2-Bank/error');
    }
  }

  return (
    <div className="bg-dark">
      <br />
      <div className="main sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </div>
      <br /><br /><br /><br />
    </div>
  );
}

export default Signin;
