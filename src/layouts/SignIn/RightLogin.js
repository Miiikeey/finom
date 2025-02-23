import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/forms/LoginForm';

const RightLogin = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/getstarted');
  };

  return (
    <div className="left-[895px] top-[150px] absolute flex-col justify-center items-start gap-5 inline-flex">
      {/* Title */}
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="text-[#141522] text-3xl font-bold font-['Helvetica Now Display'] leading-[42px]">Sign In </div>
        <div className="justify-start items-center gap-1 inline-flex">
          <div className="text-[#141522] text-sm font-normal font-['Helvetica Now Display'] leading-[18.20px]">New user?</div>
          <div 
            onClick={handleCreateAccount}
            className="text-[#16677a] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px] cursor-pointer hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>

      {/* Form Import */}
      <LoginForm />

      {/* Bottom Text */}
      <div className="w-[350px] text-xs leading-[18px]">
        <span className="text-[#b3bbbd] font-normal font-['Inter']">Protected by reCAPTCHA and subject to the Google </span>
        <span className="text-[#16677a] font-normal font-['Inter']">Privacy Policy </span>
        <span className="text-[#b3bbbd] font-normal font-['Inter']">and </span>
        <span className="text-[#16677a] font-normal font-['Inter']">Terms of Service.</span>
      </div>
    </div>
  );
};

export default RightLogin;