import React from 'react';
import './login.css';
import login from './Login.png';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const usernameInput = event.target.elements.name;
    const passwordInput = event.target.elements.password;

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    let errorMessage = '';

    // Validate username
    if (!username) {
      errorMessage = 'Username is required';
    } else if (
      !/^\d{10}$/.test(username) &&
      !/^[A-Za-z0-9]+[\w.-]+@\w+\.\w+$/.test(username)
    ) {
      errorMessage = 'number should be 10 digit or valid email';
    }

    // Validate password
    if (!password) {
      errorMessage = 'Password is required';
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}/.test(password)
    ) {
      errorMessage =
        'Password must contain at least 8 characters with one uppercase letter, one digit, and one special character';
    }

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    // Perform login logic if the form is valid
    console.log('Logging in...');
  };

  return (
    <div className="Main">
      <div className="Container">
        <div className="login_body">
          <div className="login">
            <h2>LOGIN </h2>
            <div className="imageportion">
              <img src={login} alt="image" />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputsection">
              <label htmlFor="name">User name/ email id</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="inputsection">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="inputsection">
              <button type="submit">Login</button>
            </div>
            <div className="inputsection">
              <p>Forget Password</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}