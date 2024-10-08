import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface TeamCardProps {
    name: string;
    position: string;
    imageUrl: string | StaticImageData;
}
const TeamCard: React.FC<TeamCardProps> = ({name, position, imageUrl}) => {
    return (
        <div className='text-center md:mt-[50px] leading-[normal]'>
              <Image src={imageUrl} className="w-full object-cover"  alt="" /> 
              <p className='text-[#e56f20] text-lg md:text-[22px] font-extrabold mt-2 md:mt-5  '>{name} </p>
            <p className='opacity-70 text-[#202020] text-sm md:text-lg md:mt-[10px]  '>{position} </p>
        </div>
    );
}

export default TeamCard;
