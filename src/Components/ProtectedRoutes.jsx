import React, { useEffect } from "react";
import  auth  from "../firebaseConfig";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    return auth.currentUser ? children : <Navigate to="/" />;
  }
