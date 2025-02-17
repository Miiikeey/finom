import React from 'react';
import { ReactComponent as EyeIcon } from '../../assets/images/eye.svg';
import { ReactComponent as GoogleIcon } from '../../assets/images/googleicon.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/linkedinicon.svg';
import { ReactComponent as CheckIcon } from '../../assets/images/check.svg';
import { useState } from 'react';

const SignUpForm = () => {
  /* Variables and Handlers */  
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    school,
    showPassword,
    showConfirmPassword,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSchoolChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    handleSignUp,
    handleGoogleSignUp,
    handleLinkedInSignUp,
    isTermsAccepted,
    handleTermsChange,
  } = useSignUpForm();

  return (
    <form className="flex flex-col gap-[30px] w-full" onSubmit={handleSignUp}>
      {/* Name Fields */}
      <div className="flex gap-[77px]">
        <div className="flex flex-col gap-2.5">
          <div className="text-[#141522] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            First Name
          </div>
          <label className="w-[396px] h-[50px] px-5 py-4 bg-white rounded-[10px] border border-black justify-start items-center gap-2.5 inline-flex cursor-text">
            <input 
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First Name"
              className="w-full text-black text-xs font-normal font-['Inter'] leading-none outline-none"
            />
          </label>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="text-[#141522] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Last Name
          </div>
          <label className="w-[396px] h-[50px] px-5 py-4 bg-white rounded-[10px] border border-black justify-start items-center gap-2.5 inline-flex cursor-text">
            <input 
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last Name"
              className="w-full text-black text-xs font-normal font-['Inter'] leading-none outline-none"
            />
          </label>
        </div>
      </div>

      {/* Password Fields */}
      <div className="flex gap-[77px]">
        <div className="flex flex-col gap-2.5">
          <div className="text-[#141522] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Password
          </div>
          <label className="w-[396px] h-[50px] px-5 py-4 bg-white rounded-[10px] border border-black flex justify-between items-center cursor-text">
            <input 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Input Your Password"
              className="w-[241px] text-black text-xs font-normal font-['Inter'] leading-none outline-none"
            />
            <button 
              type="button"
              onClick={togglePasswordVisibility}
              className="relative cursor-pointer"
            >
              <EyeIcon />
            </button>
          </label>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="text-[#141522] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Confirm Password
          </div>
          <label className="w-[396px] h-[50px] px-5 py-4 bg-white rounded-[10px] border border-black flex justify-between items-center cursor-text">
            <input 
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              className="w-[241px] text-black text-xs font-normal font-['Inter'] leading-none outline-none"
            />
            <button 
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="relative cursor-pointer"
            >
              <EyeIcon />
            </button>
          </label>
        </div>
      </div>

      {/* Email and School Fields */}
      <div className="flex gap-[77px]">
        <div className="flex flex-col gap-2.5">
          <div className="text-[#072229] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Enter your School Email
          </div>
          <label className="w-[396px] h-[50px] px-5 py-4 bg-white rounded-[10px] border border-black justify-start items-center gap-2.5 inline-flex cursor-text">
            <input 
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full text-black text-xs font-normal font-['Inter'] leading-none outline-none"
            />
          </label>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="text-[#141522] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            School
          </div>
          <select
            value={school}
            onChange={handleSchoolChange}
            className="w-[396px] h-[50px] px-5 py-4 bg-white rounded-[10px] border border-black text-black text-xs font-normal font-['Inter'] outline-none cursor-pointer"
          >
            <option value="">Select</option>
            <option value="SAIT">Southern Alberta Institute of Technology</option>
            <option value="NAIT">Northern Alberta Institute of Technology</option>
          </select>
        </div>
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="flex justify-center mt-20">
        <div className="flex items-start gap-2 max-w-[600px]">
          <div 
            onClick={handleTermsChange}
            className={`w-5 h-5 rounded border ${
              isTermsAccepted 
                ? 'bg-[#16677a] border-[#16677a]' 
                : 'border-[#dadfe1] bg-white'
            } flex items-center justify-center cursor-pointer`}
          >
            {isTermsAccepted && <CheckIcon className="w-3 h-3 text-white" />}
          </div>
          <div className="text-sm text-[#141522] leading-5">
            By clicking Create account, I agree that I have read and accepted the{' '}
            <span className="text-[#16677a] cursor-pointer hover:underline">Terms of Use</span>
            {' '}and{' '}
            <span className="text-[#16677a] cursor-pointer hover:underline">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Sign up button */}
      <div className="flex justify-center">
        <button 
          type="submit" 
          disabled={!isTermsAccepted}
          className={`w-[170px] h-[50px] px-6 py-[13px] rounded-[10px] text-white text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px] ${
            isTermsAccepted 
              ? 'bg-[#16677a] cursor-pointer' 
              : 'bg-[#16677a]/50 cursor-not-allowed'
          }`}
        >
          Sign up
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

      {/* Social Sign up */}
      <div className="flex flex-col items-center gap-5">
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-[385px] h-[50px] px-4 py-2 rounded-[10px] border border-[#eae9ed] justify-center items-center gap-2.5 inline-flex cursor-pointer"
        >
          <GoogleIcon />
          <span className="text-[#2e2c34] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Sign up with Google
          </span>
        </button>
        <button
          type="button"
          onClick={handleLinkedInSignUp}
          className="w-[385px] h-[50px] px-4 py-2 rounded-[10px] border border-[#eae9ed] justify-center items-center gap-2.5 inline-flex cursor-pointer"
        >
          <LinkedInIcon />
          <span className="text-[#2e2c34] text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px]">
            Sign up with LinkedIn
          </span>
        </button>
      </div>
    </form>
  );
};

/* State Management */
const useSignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [school, setSchool] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  /* Event Handlers */
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign up with:', { firstName, lastName, email, password, confirmPassword, school });
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
  };

  const handleLinkedInSignUp = () => {
    console.log('Sign up with LinkedIn');
  };

  const handleTermsChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    school,
    showPassword,
    showConfirmPassword,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSchoolChange,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
    handleSignUp,
    handleGoogleSignUp,
    handleLinkedInSignUp,
    isTermsAccepted,
    handleTermsChange,
  };
};

export { SignUpForm, useSignUpForm };
