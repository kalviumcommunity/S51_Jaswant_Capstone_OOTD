import React, { useState } from 'react';
import "./Signup.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Modify this condition as needed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let formIsValid = true;
    const errors = {};

    // Validate email
    if (!validateEmail(email)) {
      errors.email = "Invalid email address";
      formIsValid = false;
    }

    // Validate password
    if (!validatePassword(password)) {
      errors.password = "Password must be at least 6 characters long";
      formIsValid = false;
    }

    setErrors(errors);

    if (formIsValid) {
      axios.post('http://localhost:3000/signup', {
        name: email,
        password: password
      }).then((response) => {
        console.log(email, password);
        setIsLoggedIn(true);
        navigate("/home");
      }).catch((error) => {
        alert(error)
        console.error(error);
      });
    }
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
          {errors.email && <p className="error-text">{errors.email}</p>}
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
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
