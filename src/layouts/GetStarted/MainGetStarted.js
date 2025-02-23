import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as StudentIcon } from '../../assets/images/StudentIcon.svg';
import { ReactComponent as EducatorIcon } from '../../assets/images/EducatorIcon.svg';
import { ReactComponent as IndustryIcon } from '../../assets/images/IndustryIcon.svg';

const MainGetStarted = () => {
  const navigate = useNavigate();

  const handleSignUp = (role) => {
    // Connect to FASTAPI
    navigate(`/signup/${role}`);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-[40px] font-bold font-['Helvetica Now Display'] mb-4 bg-gradient-to-r from-[#05303B] to-[#106D85] inline-block text-transparent bg-clip-text">
          Get Started with Experential Learning.
        </h1>
        <p className="text-[#4A4A4A] text-xl font-['Helvetica Now Display']">
          Connect students, educators, and industry partners through hands-on projects that drive real-world impact.
        </p>
      </div>

      {/* Selection Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Students Container */}
        <div className="bg-[#D1D6D8] rounded-[15px] p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 text-[#16677A]">
            <StudentIcon className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-bold font-['Helvetica Now Display'] mb-4">Students</h3>
          <p className="text-[#4A4A4A] mb-8">
            Apply what you have learnt in classroom by completing projects for real companies and organizations.
          </p>
          <button
            onClick={() => handleSignUp('student')}
            className="px-8 py-3 bg-transparent text-[#16677A] border border-[#16677A] rounded-[10px] font-bold font-['Helvetica Now Display'] hover:bg-[#16677A] hover:text-white transition-colors"
          >
            Sign up
          </button>
        </div>

        {/* Educators Container */}
        <div className="bg-[#D1D6D8] rounded-[15px] p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 text-[#16677A]">
            <EducatorIcon className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-bold font-['Helvetica Now Display'] mb-4">Educators</h3>
          <p className="text-[#4A4A4A] mb-8">
            Build and scale high impact experential learning programs that align with course objectives.
          </p>
          <button
            onClick={() => handleSignUp('educator')}
            className="px-8 py-3 bg-transparent text-[#16677A] border border-[#16677A] rounded-[10px] font-bold font-['Helvetica Now Display'] hover:bg-[#16677A] hover:text-white transition-colors"
          >
            Sign up
          </button>
        </div>

        {/* Industry Partners Container */}
        <div className="bg-[#D1D6D8] rounded-[15px] p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 text-[#16677A]">
            <IndustryIcon className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-bold font-['Helvetica Now Display'] mb-4">Industry Partners</h3>
          <p className="text-[#4A4A4A] mb-8">
            Grow your business through the completion of projects with students who get college credits completing tasks.
          </p>
          <button
            onClick={() => handleSignUp('partner')}
            className="px-8 py-3 bg-transparent text-[#16677A] border border-[#16677A] rounded-[10px] font-bold font-['Helvetica Now Display'] hover:bg-[#16677A] hover:text-white transition-colors"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainGetStarted;
