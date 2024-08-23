import React, { useState } from 'react';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from './Firebase.config'
import googleimg from '../assets/google.png'

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
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
      axios.post('http://localhost:3000/login', {
        name: email,
        password: password
      }).then((response) => {
        console.log(response);
        console.log(email, password);
        setIsLoggedIn(true);
        navigate("/home");
      }).catch((error) => {
        alert(error)
        console.error(error);
      });
    }
  };

  const google = async (e) => {
    const provider = new GoogleAuthProvider();

    function setCookie(name, value, daysToExpire) {
      let date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    }

    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      setCookie('logedin', true, 365);
      setCookie("username", result.user.displayName, 365);
      setCookie('token', result.user.accessToken, 365);
      setIsLoggedIn(true);
      navigate('/home');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="forgot-password">
        <Link to="/ForgotPassword">Forgot Password?</Link>
      </div>

      <div className='googleimg'>
        <img className='g_icon' src={googleimg} onClick={google} alt="google icon" />
      </div>

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
