import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './Login.css'; // Import the CSS file

function Login() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input 
          type="text" 
          name="Email" 
          id="Email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.currentTarget.value)} 
        />
        <input 
          type="password" 
          name="Password" 
          id="Password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.currentTarget.value)} 
        />
        <button onClick={() => signIn(email, password)}>Sign In</button>
      </div>
    </div>
  );
}

export default Login;
