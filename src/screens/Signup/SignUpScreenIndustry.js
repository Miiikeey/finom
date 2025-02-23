import React from 'react';
import { ReactComponent as LogoBlue } from '../../assets/images/LogoBlue.svg';
import TopSignup from '../../layouts/SignUp/TopSignup';
import { SignUpForm } from '../../components/forms/Signup/SignUpFormIndustry';

function SignUpScreenIndustry() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-[1440px] h-[1519px] relative mx-auto">
        {/* Background Image Section */}
        <TopSignup />

        {/* Main Form Container */}
        <div className="h-[1048px] pl-[54px] pr-[53px] pt-10 pb-14 left-[231px] top-[345px] absolute bg-white rounded-[15px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] border border-[#dadfe1] flex-col justify-start items-center inline-flex overflow-hidden">
          {/* Title Section */}
          <div className="h-[113px] flex-col justify-start items-center gap-[23px] flex mb-8">
            <div className="justify-start items-center inline-flex">
              <div className="w-[216px] text-[#050a0c] text-4xl font-bold font-['Helvetica Now Display'] leading-[54px]">Welcome to </div>
              <div className="justify-start items-center gap-2.5 flex">
                <LogoBlue className="w-[40px] h-[40px]" />
                <div className="w-[117px] text-[#16677a] text-4xl font-bold font-['Helvetica Now Display'] leading-[54px]">Finom!</div>
              </div>
            </div>
            <div className="self-stretch text-center text-black text-2xl font-normal font-['Helvetica Now Display'] leading-9">Sign up as an Employer!</div>
          </div>

          {/* Form */}
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpScreenIndustry;
