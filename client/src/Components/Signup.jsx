import React, { useState } from 'react';
import "./Signup.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/signup', {
      name: email,
      password: password
    })
    .then((response) => {
      console.log(email, password);
      setIsLoggedIn(true);
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      <Link to="/home">
        <button type="submit" className="signup-button">Sign Up</button>
      </Link>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
