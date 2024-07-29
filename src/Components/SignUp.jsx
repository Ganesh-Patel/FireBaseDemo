import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './SignUp.css'; // Import the CSS file

function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-container">
      <form className="signup-form" >
        <h1>Sign Up</h1>
        <input 
          type="text" 
          name="Email" 
          id="Email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          name="Password" 
          id="Password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={() => signUp(email, password)}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
