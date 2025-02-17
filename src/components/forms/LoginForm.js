import React from 'react';
import { ReactComponent as EyeIcon } from '../../assets/images/eye.svg';
import { ReactComponent as GoogleIcon } from '../../assets/images/googleicon.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/linkedinicon.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  /* Variables and Handlers */  
  const {
    email,
    password,
    showPassword,
    handleEmailChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleSignIn,
    handleGoogleSignIn,
    handleLinkedInSignIn,
    handleForgotPassword,
    handleCreateAccount
  } = useLoginForm();

  return (
    <form className="flex flex-col gap-[30px] w-full" onSubmit={handleSignIn}>
      {/* Email Text Field */}
      <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2.5 flex">
        <div className="text-[#141522] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
          Email Address
        </div>
        <div className="self-stretch h-[50px] px-5 py-4 bg-white rounded-[10px] border border-[#16677a] justify-start items-center gap-2.5 inline-flex">
          <input 
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Johndoe@gmail.com"
            className="w-[275px] text-[#262d33] text-xs font-normal font-['Inter'] leading-none outline-none"
          />
        </div>
      </div>

      {/* Password Text Field */}
      <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2.5 flex">
        <div className="text-[#141522] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
          Password
        </div>
        <div className="self-stretch h-[50px] px-5 py-4 bg-white rounded-[10px] border border-[#16677a] justify-between items-center inline-flex">
          <input 
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Input Your Password"
            className="w-[241px] text-[#262d33] text-xs font-normal font-['Plus Jakarta Display'] leading-[18px] outline-none"
          />
          <button 
            type="button"
            onClick={togglePasswordVisibility}
            className="relative cursor-pointer"
          >
            <EyeIcon />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="self-stretch justify-between items-center inline-flex">
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-[#16677a] text-sm font-medium font-['Helvetica Now Display'] leading-[18.20px]"
        >
          Forgot password?
        </button>
        <button
          type="submit"
          className="w-[170px] h-[50px] px-6 py-[13px] bg-[#16677a] rounded-[10px] justify-center items-center gap-2.5 flex cursor-pointer"
        >
          <span className="text-white text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Sign In
          </span>
        </button>
      </div>

      {/* LINE SEPARATOR */}
      <div className="self-stretch justify-between items-center inline-flex overflow-hidden">
        <div className="w-[150px] h-px bg-[#f5f5f7]" />
        <div className="text-center text-[#141522] text-sm font-normal font-['Plus Jakarta Display'] leading-7">
          or
        </div>
        <div className="w-[150px] h-px bg-[#f5f5f7]" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex-col justify-start items-start gap-5 flex">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-[385px] h-[50px] px-4 py-2 rounded-[10px] border border-[#eae9ed] justify-center items-center gap-2.5 inline-flex cursor-pointer"
        >
          <GoogleIcon />
          <span className="text-[#2e2c34] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Sign in with Google
          </span>
        </button>
        <button
          type="button"
          onClick={handleLinkedInSignIn}
          className="w-[385px] h-[50px] px-4 py-2 rounded-[10px] border border-[#eae9ed] justify-center items-center gap-2.5 inline-flex cursor-pointer"
        >
          <LinkedInIcon />
          <span className="text-[#2e2c34] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Sign in with LinkedIn
          </span>
        </button>
      </div>
    </form>
  );
};

/* State Management */
const useLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /* Event Handlers */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Sign in with:', { email, password });
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
  };

  const handleLinkedInSignIn = () => {
    console.log('Sign in with LinkedIn');
  };

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  return {
    email,
    password,
    showPassword,
    handleEmailChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleSignIn,
    handleForgotPassword,
    handleGoogleSignIn,
    handleLinkedInSignIn,
    handleCreateAccount
  };
};

export { LoginForm, useLoginForm };
