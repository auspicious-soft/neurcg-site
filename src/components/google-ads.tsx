'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle?: {
      loaded?: boolean;
      push: (params: {}) => void;
    }[];
  }
}

interface GoogleAdProps {
  slot: string
  format?: 'auto' | 'fluid' | 'rectangle'
  responsive?: boolean
  style?: React.CSSProperties
}

export default function GoogleAd({ slot, format = 'auto', responsive = true, style }: GoogleAdProps) {
  useEffect(() => {
    try {
      const adElements = document.querySelectorAll('ins.adsbygoogle');
      const currentAd = adElements[adElements.length - 1];

      if (currentAd && !currentAd.getAttribute('data-ad-loaded')) {
        (window.adsbygoogle = window.adsbygoogle || [{ loaded: false, push: (params: {}) => { } }]).push({ loaded: true, push: (params: {}) => { } });
        currentAd.setAttribute('data-ad-loaded', 'true');
      };
    } catch (err) {
      console.error('AdSense error ----> ', err)
    }
  }, [])

    return (
        <div className='h-[300px]'>
            <div
                // data-ad-id={adId}
                className="adsense-container" 
                style={{
                    display: 'block',
                    height: '100%',
                    ...style
                }}
                data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive}
            >
                {/* <script data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}

            </div>
        </div>
    );
}