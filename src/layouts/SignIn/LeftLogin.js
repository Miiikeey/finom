import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { ReactComponent as LeftImageLogin } from '../../assets/images/LeftImageLogin.svg';

const LeftLogin = () => {
  return (
    <div className="w-[735px] h-[900px] relative overflow-hidden">
      {/* Content */}
      <div className="absolute inset-0">
        <LeftImageLogin 
          className="w-[800px] h-[950px]" 
          style={{ 
            transform: 'translateX(-32px)',
          }}
        />
      </div>
      <div className="h-[168px] left-[67px] top-[550px] absolute flex-col justify-start items-start gap-5 inline-flex z-10">
        {/* Logo and Title */}
        <div className="justify-start items-center gap-[13px] inline-flex">
          <div className="w-[51px] h-[52px]">
            <Logo className="w-full h-full" />
          </div>
          <div className="text-white text-4xl font-bold font-['Helvetica Now Display'] leading-[54px]">
            FINOM
          </div>
        </div>
        
        {/* Sub Text */}
        <div className="self-stretch h-[94px] flex-col justify-start items-start gap-[30px] flex">
          <div className="self-stretch h-[94px] flex-col justify-start items-start gap-2.5 flex">
            <div className="w-[503px] text-white text-4xl font-bold font-['Helvetica Now Display'] leading-[54px]">
              Welcome Back!
            </div>
            <div className="self-stretch text-white text-xl font-normal font-['Helvetica Now Display'] leading-[30px]">
              Continue your journey and pick up where you left off!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftLogin;
