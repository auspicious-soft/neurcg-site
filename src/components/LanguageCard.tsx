import React from 'react';
import Image, { StaticImageData } from "next/image";

interface LangProps {
    image: string | StaticImageData; // Make sure it can accept both string and StaticImageData types
}

const LanguageCard: React.FC<LangProps> = ({ image }) => {
    return (
        <div className='max-w-[183px] '>
            <Image
              src={image}
              alt="Card img"
              className=""
            />
        </div>
    );
}

export default LanguageCard;
