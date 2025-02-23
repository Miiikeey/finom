import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as TopImageSignUp } from '../../assets/images/TopImageSignUp.svg';

const TopSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[1440px] h-[470px] absolute top-0 left-0">
      <div className="w-full h-full relative">
        <TopImageSignUp 
          className="w-[1440px] h-[470px] absolute top-0 left-0 object-cover scale-[1.2] origin-top" 
        />
        {/* Exit Button */}
        <div 
          className="absolute top-[278px] left-[248px] cursor-pointer"
          onClick={() => navigate('/getstarted')}
        >
          <div className="w-[115px] h-[43px] pt-[13px] pb-3 rounded-[5px] border border-white justify-center items-center inline-flex overflow-hidden hover:bg-white group transition-colors">
            <div className="text-white text-sm font-bold font-['Helvetica Now Display'] leading-[18.20px] group-hover:text-[#16677A]">
              Exit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSignup;
