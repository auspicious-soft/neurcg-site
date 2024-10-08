"use client"
import VideoPlayer from "@/components/VideoPlayer";
import {
  CardIcon1,
  CardIcon2,
  CardIcon3,
  TypeIcon1,
  TypeIcon2,
  TypeIcon3,
  VideoIcon1,
  VideoIcon2,
  VideoIcon3,
} from "@/utils/svgicons";
import ProductDesc from "@/components/ProductDesc";
import img1 from "@/assets/images/cardimg1.png";
import img2 from "@/assets/images/cardimg2.png";
import img3 from "@/assets/images/cardimg3.png";
import Contact from "@/components/Contact";
import StepsCard from "@/components/StepsCard";
import stepimg1 from "@/assets/images/stepimg1.png"
import stepimg2 from "@/assets/images/stepimg2.png"
import stepimg3 from "@/assets/images/stepimg3.png"

const OverviewData = [
  {
    id: "card-1",
    title: "Convert Your Text And Image to Live Videos",
    description:
      "Creating over 500 unique text and photo-based avatar animations to bring your digital persona to life with vibrant, dynamic visuals.",
    imgSrc: img1,
    buttonLink: "#",
    icon1: <CardIcon1 />,
    icon2: <TypeIcon1 />,
  },
  {
    id: "card-2",
    title: "Convert Your Audio And Image to Live Videos",
    description:
      "Creating over 500 unique text and photo-based avatar animations to bring your digital persona to life with vibrant, dynamic visuals.",
    imgSrc: img2,
    buttonLink: "#",
    icon1: <CardIcon2 />,
    icon2: <TypeIcon2 />,
  },
  {
    id: "card-3",
    title: "Generate training video content in your language.",
    description: [
    "Clone your voice in 28 languages.",
    "Choose from more than 75+ languages and 450+ accents.",
    "Translate videos in just a few clicks."],
    imgSrc: img3,
    buttonLink: "#",
    icon1: <CardIcon3 />,
    icon2: <TypeIcon3 />,
  },
];
const StepCardData = [
  {
    id: 1,
    title: "Upload Your Video",
    description: "Discover our innovative solutions designed to empower your business, enhance efficiency, and drive success in new markets.",
    imgSrc: stepimg1,
  },
  {
    id: 2,
    title: "Select Your Video",
    description: "Discover our innovative solutions designed to empower your business, enhance efficiency, and drive success in new markets.",
    imgSrc: stepimg2,
  },
  {
    id: 3,
    title: "Export Your Translated Video",
    description: "Discover our innovative solutions designed to empower your business, enhance efficiency, and drive success in new markets.",
    imgSrc: stepimg3,
  },
]
export default function Home() {

  return (
    <main className="main">
<div className="container">
<div className="pt-[10px] md:pt-[30px] lg:pt-[50px] text-center">
        <h1 className="text-black text-[30px] leading-[40px] md:text-[42px] lg:text-[66px] font-[800] md:leading-[66px] lg:leading-[86px]">
          Effortless Video Production: <br />
          <span className="text-[#e56f20]">
            AI-Driven, Instant, and Multilingual{" "}
          </span>
        </h1>
        <h3 className="mt-[20px] md:text-[22px] font-[600] text-[#00000080] max-w-[800px] mx-auto md:mt-[34px]  ">
          Instantly Convert Videos into Multiple Languages with Just One Click,
          Expanding Your Global Reach
        </h3>
        <button className="button mt-[20px] md:mt-[40px] md:px-[45px]">Free Trial</button>
      </div>
      <div>
        <div className="relative pt-[50px]">
          <div className="video-frame">
            <VideoPlayer url="/assets/homevideo.mp4" />
          </div>
          <div className="hidden md:flex p-[7px] items-center bg-white gap-4 rounded-lg pr-5 absolute top-[25%] translate-y-[-25%] left-[50px]  ">
            <VideoIcon1 />
            <h3 className="text-[#202C2F]">Text And Image To Video</h3>
          </div>
          <div className="hidden md:flex p-[7px] items-center bg-white gap-4 rounded-lg pr-5 absolute bottom-[30%] left-[100px] ">
            <VideoIcon2 />
            <h3 className="text-[#202C2F]">Audio And Image To Video</h3>
          </div>
          <div className="hidden md:flex p-[7px] items-center bg-white gap-4 rounded-lg pr-5 absolute top-[50%] translate-y-[-50%]  right-[60px] ">
            <VideoIcon3 />
            <h3 className="text-[#202C2F]">Video Translation</h3>
          </div>
        </div>
      </div>
   </div>
    <section id="use-case" className="pt-[30px] line-bg relative">
     <div className="container">
     <h2 className="section-title text-center mb-[20px] md:mb-[46px]  ">
      The fastest, easiest way to <br />
          <span>
          Transform your Videos{" "}
          </span>
        </h2>
       <div className="sticky-cards">
       {OverviewData.map((item) => (
          <ProductDesc
          id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
            icon1={item.icon1}
            icon2={item.icon2}
            buttonLink={item.buttonLink}
          />
        ))}
       </div>
     </div>
      </section>
 <section className="my-[40px] relative md:my-[80px]">
  <div className="container">
  <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid gap-[20px] md:gap-[40px] ">
        {StepCardData.map((data)=> (
          <StepsCard
          key={data.id}
          title= {data.title}
          description= {data.description}
          imgSrc={data.imgSrc}
          />
        )) }
        </div>
        <div className="mt-[20px] md:mt-0 md:pl-[30px] lg:pl-[100px]">
         <div className="md:sticky md:top-[35%] px-2 md:px-0">
         <h4 className="text-[#202C2F] text-base"><span className="bg-[#E56F20] h-[9px] w-[9px] rounded-full inline-block mr-[10px] ">
          </span> Result-Driven</h4>
          <h2 className="section-title">How It <span>Works.</span></h2>
          <p className="text-[#202020] text-lg mt-[10px] mb-[20px] md:my-[30px] opacity-70">Our goal is to be the most successful Marketing Automation service provider in the market through deliverance and diligence. We aim to automate the business with best practices and make it simple for business owners.</p>
        <button className="button md:px-[43px]">Get Started Now</button>
        
         </div> 
        </div>
       </div>
</div>
</section>
  <section id="contact-us">
  <Contact />
  </section>

    </main>
  );
}
