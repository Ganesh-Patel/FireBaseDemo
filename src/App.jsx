import React from 'react';
import './App.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginC from './Components/Login';
import SignUpC from './Components/SignUp';
import Main from './Components/Main';
import ProtectedRoute from './Components/ProtectedRoutes';
import Auth from './firebaseConfig';
import { AuthContext } from './AuthContext';

function App() {
  const navigator = useNavigate();
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(Auth, email, password)
    .then((d) => {
      return sendEmailVerification(d.user);
    })
    .then(() =>{
      alert(
        "Your account created!. Please verify it by the email sent to you"
      )
      navigator("/Login");
    }
   
    )
    .catch((err) => alert(err.message));
  }
  const signIn = (email, password) => {
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        alert("user login")
        navigator("/main");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
        // ..
      });
  }

  console.log(Auth)


  return (
    <div className="app-container">
      <header className="header">
        <h1>My App</h1>
      </header>
      <nav className="navbar">
      <a href="/">Sign Up</a>
        <a href="/login">Login</a>
    
      </nav>
      <main className="main-content">
        <AuthContext.Provider value={{ signIn, signUp }}>
          <Routes>
            <Route path="/login" element={<LoginC />} />
            <Route path="/" element={<SignUpC />} />
            <Route path="/main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
          </Routes>
        </AuthContext.Provider>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
