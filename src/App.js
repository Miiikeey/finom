import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './screens/Login/LoginScreen';
import SignupStudent from './screens/Signup/SignupScreenStudent';
import GetStartedScreen from './screens/GetStarted/GetStartedScreen';
import SignUpScreenEducator from './screens/Signup/SignUpScreenEducator';
import SignUpScreenIndustry from './screens/Signup/SignUpScreenIndustry';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<GetStartedScreen />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/signup/student" element = {<SignupStudent />} />
          <Route path="/getstarted" element = {<GetStartedScreen />} />
          <Route path="/signup/educator" element = {<SignUpScreenEducator />} />
          <Route path="/signup/partner" element={<SignUpScreenIndustry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


