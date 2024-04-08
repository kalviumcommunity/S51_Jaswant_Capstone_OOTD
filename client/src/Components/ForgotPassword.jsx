import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Password reset request for:", email);
    // Add your logic here for sending a password reset email...
    // For example, calling your backend API.

    // Navigate the user or display a confirmation message
    navigate("/login?reset=success"); // Optionally redirect back to the login with a query param indicating success.
  };

  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
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
        <button type="submit">Send Reset Link</button>
      </form>
      <div className="forgot-password">
        Remember your password? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
