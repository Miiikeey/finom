import React from 'react';
import { ReactComponent as TopImageSignUp } from '../../assets/images/TopImageSignUp.svg';

const TopSignup = () => {
  return (
    <div className="w-[1440px] h-[470px] absolute top-0 left-0">
      <div className="w-full h-full relative">
        <TopImageSignUp 
          className="w-[1440px] h-[470px] absolute top-0 left-0" 
          style={{ 
            objectFit: 'cover',
            transform: 'scale(1.2)',
            transformOrigin: 'top'
          }} 
        />
      </div>
    </div>
  );
};

export default TopSignup;
