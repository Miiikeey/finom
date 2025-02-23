import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

const TopGetStarted = () => {
  return (
    <div className="w-full h-[80px] bg-[#112227] border-b border-[#E5E5E5] flex justify-between items-center px-8">
      <div className="flex items-center gap-2">
        <Logo className="w-[32px] h-[32px]" />
        <span className="text-white text-2xl font-bold font-['Helvetica Now Display']">
          FINOM
        </span>
      </div>
      <button 
        className="px-8 py-2 bg-transparent border border-white rounded-[10px] text-center text-[#fbfbfb] text-base font-bold font-['Helvetica Now Display'] leading-normal hover:bg-white hover:text-[#112227] transition-colors"
        onClick={() => window.location.href = '/login'}
      >
        Login
      </button>
    </div>
  );
};

export default TopGetStarted;
