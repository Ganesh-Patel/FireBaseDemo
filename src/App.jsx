import React from 'react';
import './App.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification ,signOut} from 'firebase/auth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginC from './Components/Login';
import SignUpC from './Components/SignUp';
import Main from './Components/Main';
import ProtectedRoute from './Components/ProtectedRoutes';
import auth from './firebaseConfig';
import { AuthContext } from './AuthContext';

function App() {
  const navigate = useNavigate();
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const uerresp = data.user;

        if (uerresp.emailVerified == false) {
          alert("Hey please verify your email");
          signOut(auth).then(() => console.log(auth.currentUser));
        } else {
          alert("Login success");
          navigate("/main");
        }
      })
      .catch((err) => alert(err.message));
  };

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((d) => {
        return sendEmailVerification(d.user);
      })
      .then(() =>{
        alert(
          "Your account created!. Please verify it by the email sent to you"
        )
        navigate('/login')
      }
      )
      .catch((err) => alert(err.message));
  };

  console.log(auth)


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
          <Route path="/" element={<SignUpC />} />
            <Route path="/login" element={<LoginC />} />
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
