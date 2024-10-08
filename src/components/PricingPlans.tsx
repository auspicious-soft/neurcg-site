import Link from 'next/link';
import React from 'react';

const PricingPlans: React.FC = () => {
  return (
    <div className="container">
      <div className="my-[40px] md:mt-[55px] md:mb-[100px] text-center">
        <h2 className="section-title mb-5 md:mb-[45px]">Choose Your <span>Pricing Plan</span></h2>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-[57px] ">
          {/* Free Trial Plan */}
          <div className="border border-[#262626] rounded-[10px] py-5 px-4 bg-white md:mt-10">
            <div className='flex flex-col justify-between h-full'>
              <div>
                <p className="text-[24px] font-semibold mb-3 border border-[#262626] text-[#262626] rounded-[10px] inline-block px-5 py-1">Free Trial</p>
                <h2 className="md:text-[40px] text-[30px] lg:text-[60px] font-[600] leading-[normal] text-[#262626]">€0</h2>
                <p className="text-sm text-[#81A7BA] mb-5">User/Month</p>
                <ul className="text-left orange-check list-design">
                  <li>3 Credits</li>
                  <li>Avatar with just a picture (Unlimited)</li>
                  <li>Workspace users (1)</li>
                  <li>Recording your audio</li>
                </ul>
              </div>
              <div>
                <Link href={`${process.env.NEXT_PUBLIC_USER_LINK}/login`} className=" px-4 lg:px-[50px] mt-7 py-3 text-base lg:text-[20px] text-white bg-[#E56F20] rounded-[10px] font-semibold font-inter">
                  Choose Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Intro Plan */}
          <div className="rounded-[10px] px-[17px] pt-5 md:pt-[13px] pb-7 bg-[#E56F20] text-white">
            <p className="text-[24px] font-semibold mb-[30px] border border-white rounded-[10px] inline-block px-5 py-1">Intro Plan</p>
            <h2 className="md:text-[40px] text-[30px] lg:text-[60px] font-[600] leading-[normal] ">€12.50</h2>
            <h3 className="text-[15px] text-[#D3E7F0] mb-5 ">User/Month</h3>
            <ul className="white-checks half-list text-left list-design ">
              <li>100 Credits</li>
              <li>80 Voices</li>
              <li>+30 Languages</li>
              <li>Text to voice</li>
              <li>Translation</li>
              <li>Subtitles</li>
              <li>60 Ai Avatars</li>
              <li>Workspace Users (1)</li>
              <li>Create your avatar with just a picture (Unlimited)</li>
            </ul>
            <Link href={`${process.env.NEXT_PUBLIC_USER_LINK}/login`} className=" px-4 lg:px-[50px] mt-7 py-3 text-base lg:text-[20px] bg-white text-[#E56F20] rounded-[10px] font-semibold font-inter">
              Choose Plan
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="border border-[#262626] rounded-[10px] py-5 px-4 bg-white md:mt-10">
            <div className='flex flex-col justify-between h-full'>
              <div>
                <p className="text-[24px] font-semibold mb-3 border border-[#262626] text-[#262626] rounded-[10px] inline-block px-5 py-1">Pro Plan</p>
                <h2 className="md:text-[40px] text-[30px] lg:text-[60px] font-[600] leading-[normal] text-[#262626]">€37.50</h2>
                <p className="text-sm text-[#81A7BA] mb-5">User/Month</p>
                <ul className="text-left half-list orange-check list-design">
                  <li>300 Credits</li>
                  <li>Text to Voice</li>
                  <li>Video Translation</li>
                  <li>Subtitles</li>
                  <li>60 AI Avatars</li>
                  <li>API</li>
                  <li>80 Voices</li>
                  <li>Workspace users (5)</li>
                  <li>Voice Cloning</li>
                  <li>Creat your own</li>
                </ul>
              </div>
              <div>
                <Link href={`${process.env.NEXT_PUBLIC_USER_LINK}/login`} className=" px-4 lg:px-[50px] mt-7 py-3 text-base lg:text-[20px] text-white bg-[#E56F20] rounded-[10px] font-semibold font-inter">
                  Choose Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
