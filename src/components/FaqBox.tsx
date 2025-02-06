"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { title } from 'process';
import { DropDown, DropDownClose } from '@/utils/svgicons';

const faqData = [
  {
    title: 'How does AI convert text to video, automatically?',
    content: 'When we humans speak, we follow a pattern of mouth tongue and lips shape to trap and release air in a specific way. This converts what we want to say into sound. Text is simply the frozen version of that sound on paper. Our neural network has learned how to convert these letters first into sound and then to what mouth articulation, head movement, and attitude the speaker most likely would have had if he/she were to speak this. Those articulations are then applied to the avatars you have created already. This is then done over time to produce a video.',
  },
  {
    title: 'Do you need to download anything to use text-to-video feature by AI',
    content: 'No. The offered solution is web-based. That means you simply copy-paste/type the text you want your avatar to speak and we take care of the rest. Under the hood, the text is encrypted and sent to use. We perform the animation, encrypt it, and send it back to you.',
  },
  {
    title: 'Which is the best AI powered text to video maker?',
    content: 'Obviously we are. :P jokes aside this depends upon what makes one better than other. There are several factors and metrics to compare under. The academic papers use several different metric none of which is complete. We let you judge on your own, and when you do - A few things to keep in mind are 1. Efficiency in time, 2. Energy efficiency, 3. Realism of image, 4. Realism of the movement, 5. Cost, etc.',
  },
  {
    title: "Can I customize the avatar’s?",
    content: "Yes. MaiTY lets you personalize every aspect of the avatar. You can choose from a range of pre-designed avatars or create your custom character using simply one photo from your webcam!",
  },
  {
    title: "What is the difference between the two offered products - audio-to-video and text-to-video?",
    content: "Well when you use audio to generate video you have direct control over the audio, e.g., introduce a long pause and sound of a sigh etc. you might not be able to control those when converting text-into videos.",
  },
  {
    title: "Can I talk to an avatar in real time?",
    content: "Yes! you definitely can. The product is in beta mode. Contact us directly by <a href='https://maity.pro/#contact-us'>clicking here</a> or write to us at neurcg@neurcg.com to get early access.",
  },
  {
    title: "Well, how do I get started?",
    content: "<a href=’https://app.maity.pro/login’>Click here</a> and follow the on-screen instructions or <a href=’https://youtu.be/Yge-FkJcixk’>watch a video</a> describing this.",
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
