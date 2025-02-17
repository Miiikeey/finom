import React from 'react';
import LeftLogin from '../../layouts/SignIn/LeftLogin';
import RightLogin from '../../layouts/SignIn/RightLogin';

const LoginScreen = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center bg-white">
      <div className="w-[1440px] h-[900px] relative bg-white">
        {/* Left Side */}
        <LeftLogin />
        {/* Right Side */}
        <RightLogin />
      </div>
    </div>
  );
};

export default LoginScreen; 