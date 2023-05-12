import React, { useState } from 'react';
import './Authpage.css';

const AuthPage = ({ onAuthentication }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegisterMode, setRegisterMode] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isRegisterMode) {
      // Registration logic
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      // Additional validation logic for email and password fields can be added here

      console.log('Registration:', email, password);
      onAuthentication(true);
    } else {
      // Login logic
      // Additional validation logic for email and password fields can be added here

      console.log('Login:', email, password);
      onAuthentication(true);
    }

    // Reset form fields and error state
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const toggleMode = () => {
    setRegisterMode(!isRegisterMode);
    setError('');
  };

  return (
    <div className="auth-container">
      <h2>{isRegisterMode ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        {isRegisterMode && (
          <>
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
          </>
        )}
        {error && <p className="error-message">{error}</p>}
        <button type="submit">{isRegisterMode ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegisterMode ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={toggleMode}>{isRegisterMode ? 'Login' : 'Register'}</button>
      </p>
    </div>
  );
};

export default AuthPage;
