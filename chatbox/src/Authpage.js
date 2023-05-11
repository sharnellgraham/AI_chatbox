import React, { useState } from 'react';
import './Authpage.css';


const AuthPage = ({ onAuthentication }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterMode, setRegisterMode] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //  authentication logic based on the form mode (login or registration)
    if (isRegisterMode) {
      // Registration logic
      

      console.log('Registration:', email, password);
      // Call the authentication callback to update the authentication status in the App component
      onAuthentication(true);
    } else {
      // Login logic
      //
      // 
      console.log('Login:', email, password);
      // Call the authentication callback to update the authentication status in the App component
      onAuthentication(true);
    }

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  const toggleMode = () => {
    setRegisterMode(!isRegisterMode);
  };

  return (
    <div className="auth-container">
      <h2>{isRegisterMode ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
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
