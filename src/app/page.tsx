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
//import stepvid3 from "public/assets/maity.mp4"
import Link from "next/link";
import GoogleAd from "@/components/google-ads";

const OverviewData = [
  {
    id: "card-1",
    title: "Your Digital Twin, Ready to Engage – Speak, Interact, and Connect Instantly",
    description: "Turn your photo into a real-time AI assistant. Engage, interact, and communicate with a virtual version of yourself.",
    imgSrc: img1,
    buttonLink: "#",
    icon1: <CardIcon1 />,
    icon2: <TypeIcon1 />,
  },
  {
    id: "card-2",
    title: "Turn your videos into interactive experiences",
    description:
      "Turn your traditional videos into interactive experiences by creating a real-time avatar of the presenter. Viewers can ask questions directly to the video, and the avatar responds instantly, offering personalized answers before seamlessly continuing with the content.",
    imgSrc: img2,
    buttonLink: "#",
    icon1: <CardIcon2 />,
    icon2: <TypeIcon2 />,
  },
  {
    id: "card-3",
    title: "Video Translation",
    description: [
      "Produce tailored video content in your preferred language.",
      "Voice Cloning in 28 Languages",
      "Translate video content in just a few clicks to reach a worldwide audience."],
    imgSrc: img3,
    buttonLink: "#",
    icon1: <CardIcon3 />,
    icon2: <TypeIcon3 />,
  },
];
const StepCardData = [
  {
    id: 1,
    title: "Upload Your Content",
    description: "Share any educational, instructional, or informational content, along with the key information where you want your avatar to respond.",
    imgSrc: stepimg1,
  },
  {
    id: 2,
    title: "AI Creates Your Real-Time Avatar",
    description: "The system generates a dynamic avatar based on the video, ready to interact with users.",
    imgSrc: stepimg2,
  },
  {
    id: 3,
    title: "Interactive Q&A",
    description: "Users can ask questions, and the avatar responds automatically, before continuing with the class or course seamlessly.",
    imgSrc: stepimg3,
  },
]
export default function Home() {

  return (
    <main className="main">
      <div className="container">
        <div className="pt-[10px] md:pt-[30px] lg:pt-[50px] text-center">
          <h1 className="text-black text-[30px] leading-[40px] md:text-[42px] lg:text-[66px] font-[800] md:leading-[66px] lg:leading-[86px]">
            Instant Avatars, Real-Time Talks: <br />
            <span className="text-[#e56f20]">
              Human-Like and Business-Ready{" "}
            </span>
          </h1>
          <h3 className="mt-[20px] md:text-[22px] font-[600] text-[#00000080] max-w-[800px] mx-auto md:mt-[34px]  ">
              Create your own AI Assistant for Education, Customer Support, HR, Sales, and Limitless Possibilities...
          </h3>
          <Link href={`${process.env.NEXT_PUBLIC_USER_LINK}`}
            className="button mt-[20px] md:mt-[40px] md:px-[45px]">Create Your AI Assistant</Link>
        </div>
        <div>
          <div className="relative pt-[50px]">
            <div className="video-frame">
              <VideoPlayer url="/assets/Avatarhomevideo.mp4" />
            </div>
            <div className="hidden md:flex p-[7px] items-center bg-white gap-4 rounded-lg pr-5 absolute top-[25%] translate-y-[-25%] left-[50px]  ">
              <VideoIcon1 />
              <h3 className="text-[#202C2F]">Realistic Human Interaction</h3>
            </div>
            <div className="hidden md:flex p-[7px] items-center bg-white gap-4 rounded-lg pr-5 absolute bottom-[30%] left-[100px] ">
              <VideoIcon2 />
              <h3 className="text-[#202C2F]">Real-Time Assistance</h3>
            </div>
            <div className="hidden md:flex p-[7px] items-center bg-white gap-4 rounded-lg pr-5 absolute top-[50%] translate-y-[-50%]  right-[60px] ">
              <VideoIcon3 />
              <h3 className="text-[#202C2F]">Translate Your Content</h3>
            </div>
          </div>
        </div>
      </div>
      <section id="use-case" className="pt-[30px] line-bg relative">
        <div className="container">
          <h2 className="section-title text-center mb-[20px] md:mb-[46px]  ">
            The fastest, easiest way to <br />
            <span>
              Transform your Business{" "}
            </span>
          </h2>
          <GoogleAd
            slot="5920617536"  // Replace with your ad slot ID
          // style={{ maxHeight: '300px' }}
          />
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
              {StepCardData.map((data) => (
                <StepsCard
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  imgSrc={data.imgSrc}
                />
              ))}
            </div>
            <div className="mt-[20px] md:mt-0 md:pl-[30px] lg:pl-[100px]">
              <div className="md:sticky md:top-[35%] px-2 md:px-0">
                <h4 className="text-[#202C2F] text-base"><span className="bg-[#E56F20] h-[9px] w-[9px] rounded-full inline-block mr-[10px] ">
                </span> Result-Driven</h4>
                <h2 className="section-title">How It <span>Works.</span></h2>
                <p className="text-[#202020] text-lg mt-[10px] mb-[20px] md:my-[30px] opacity-70">
                  Transforms traditional video content into an interactive AI-powered experience. Instead of just watching a pre-recorded explanation, users can ask questions directly to the video, and the avatar—created from the original speaker—will respond in real-time using AI.
                </p>
                <Link href={`/`} className="button mt-10 md:mt-[40px] md:px-[45px]">Get Started Now</Link>

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
