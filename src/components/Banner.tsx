import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface BannerProps {
    heading: string;
    orangetext: string;
    imageUrl: string | StaticImageData;
  }
const Banner: React.FC<BannerProps> = ({heading, imageUrl, orangetext }) => {
    return (
        <div className='relative'>
        <Image src={imageUrl} className="w-full object-cover"  alt={heading} /> 
        <div className='absolute inset-0 bg-opacity-50 bg-[#000] flex items-center justify-center px-5'>
        <h1 className='text-center text-[24px] max-w-[1015px] mx-auto leading-[normal] lg:leading-[84px] text-white md:text-[46px] lg:text-6xl font-[800]'>{heading} 
        <span className='text-[#E87021]'>{orangetext}</span>
        </h1>
        </div>
        </div>
    );
}

export default Banner;
