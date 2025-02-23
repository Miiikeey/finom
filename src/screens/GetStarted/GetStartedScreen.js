import React from 'react';
import TopGetStarted from '../../layouts/GetStarted/TopGetStarted';
import MainGetStarted from '../../layouts/GetStarted/MainGetStarted';

const GetStartedScreen = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}  
      <TopGetStarted />
      {/* Main Section */}
      <MainGetStarted />
    </div>
  );
};

export default GetStartedScreen;
