"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { title } from 'process';
import { DropDown, DropDownClose } from '@/utils/svgicons';

const faqData = [
  {
    title: 'How does invideo AI convert text to video, automatically?',
    content: 'Answer',
  },
  {
    title: 'Do you need to download anything to use article to video feature by invideo AI?',
    content: 'Answer',
  },
  {
    title: 'Which is the best AI powered text to video maker?',
    content: 'Answer',
  },
  {
    title: "How does invideo AI convert text to video, automatically?",
    content: "Answer",
  },
  {
    title: "Do you need to download anything to use article to video feature by invideo AI?",
    content: "Answer",
  },
  {
    title: "Which is the best AI powered text to video maker?",
    content: "Answer",
  },
];

const FaqBox: React.FC = () => {

  const [dropdownStates, setDropdownStates] = useState<boolean[]>(
    faqData.map(() => false)
  );

  const toggleDropdown = (index: number) => {
    setDropdownStates((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className='container'>   
    <div className="about-dropdown bg-[#f3f7f5] md:rounded-[32px] rounded-[20px] md:py-[80px] p-6 md:px-[65px]">
        <h2 className='section-title mb-5 md:mb-[45px] text-center'>Want To <span> Know More?</span></h2>
        <div className="">
          {faqData.map((dropdown, index) => (
            <div className='questions md:mb-[20px] mb-[10px] pb-[20px] border-b border-[#0000001a]' key={index}>
              <p
                className={`md:text-[20px] opacity-70 text-[#202020] text-base cursor-pointer flex justify-between md:items-center ${
                    dropdownStates[index] ? 'active' : ''
                  }`}
                onClick={() => toggleDropdown(index)}
              >
               {dropdown.title}
                <span className='drop mt-1 md:mt-0'>
                  {dropdownStates[index] ? (
                    <span className="transition duration-300 transform rotate-180"><DropDownClose/> </span>
                  ) : (
                    <span className="transition duration-300 transform rotate-0"><DropDown /> </span>
                  )}
                </span>
              </p>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  dropdownStates[index] ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className='pt-2 text-base text-[#686C78]'>{dropdown.content}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default FaqBox;
