import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './screens/Login/LoginScreen';
import Signup from './screens/Signup/SignupScreen';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Login />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


