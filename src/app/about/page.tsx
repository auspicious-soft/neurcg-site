import Banner from "@/components/Banner";
import React from "react";
import banner from "@/assets/images/banner.png";
import img1 from "@/assets/images/cardimg1.png";
import Image from "next/image";
import FaqBox from "@/components/FaqBox";
import { ButtonArrow } from "@/utils/svgicons";
import TeamCard from "@/components/TeamCard";
import teamimg1 from "@/assets/images/teamimg1.png"
import teamimg2 from "@/assets/images/teamimg2.png"
import teamimg3 from "@/assets/images/teamimg3.png"
import Link from "next/link";

const TeamData =[
    {
        id: 1,
        imageUrl: teamimg1,
        name: "Partha Ghosh",
        position: "CEO/Founder",
    },
    {
        id: 2,
        imageUrl: teamimg2,
        name: "Ann Richmond",
        position: "Director",
    },
    {
        id: 3,
        imageUrl: teamimg3,
        name: "Alex Greenfield",
        position: "Manager",
    },
]

const Page = () => {
  return (
    <main>
      <section>
        <Banner
          imageUrl={banner}
          heading="The best way to predict the future is to"
          orangetext=" CREATE IT!"
        />
      </section>
      <section>
        <div className="container">
          <div className="text-center bg-[#f3f7f5] md:rounded-[32px] rounded-[20px] p-5 md:py-[67px] md:px-[88px] my-10 md:my-[80px] ">
            <h2 className="section-title capitalize">
              {" "}
              Who We
              <span> Are</span>
            </h2>
            <p className="md:mt-8 mt-4 text-[#202020] text-base md:text-lg font-normal opacity-70 md:leading-[30px]">
              NeurCG is a start-up project that started a year ago when two
              scientists specialists in machine learning and computer vision,
              decided to transform science into business. No one could possibly
              imagine that a paper could turn into a project, but with the
              guidance and support from MAX!mize (a program of the Max Planck
              Society) this desire turn into a reality. The support from
              Max!mize has not been just financial, we are trained in different
              aspects that are needed in a company, such as marketing,
              commercial and financial strategies.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid md:grid-cols-2 items-center gap-5 md:gap-[40px] bg-[#f3f7f5] md:rounded-[32px] rounded-[20px] p-5 md:py-[80px] md:px-[55px]">
            <div>
              {" "}
              <h2 className="section-title nd:mb-8 mb-4">
                Our <span>Dream</span>
              </h2>
              <p className=" text-[#202020] text-base md:text-lg font-normal opacity-70 md:leading-[30px]">
                NeurCG provides cutting-edge Ai-based graphics technologies and
                services that allow one to produce realistic human faces. We
                have scalable solutions for companies of all sizes. It all began
                as a game that rapidly became a dream. Today we offer innovative
                and intelligent services to different industries such as online
                fashion trail and videogame developers.
              </p>
              <p className="mt-2 text-[#202020] text-base md:text-lg font-normal opacity-70 md:leading-[30px]">
                We listen carefully to our potential clients to correctly
                understand their needs and exceed their expectations of our
                product. We know how to analyze information so that our offer is
                always adjusted to the changing needs of the market.{" "}
              </p>
            </div>
            <div>
              <Image alt="" src={img1} className="rounded-[20px] w-full " />{" "}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className=" bg-[#f3f7f5] md:rounded-[32px] rounded-[20px] p-5 md:py-[60px] md:px-[55px] my-10 md:my-[80px] ">
            <div className="grid gap-y-2 md:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] md:gap-x-[100px] md:pt-5 ">
              <h2 className="section-title ">
                Meet The Team <span>Our Professionals</span>
              </h2>
              <p className=" text-[#202020] text-sm md:text-lg font-normal opacity-70 md:leading-[30px]">
                NeurCG provides cutting-edge Ai-based graphics technologies and
                services that allow one to produce realistic human faces. We
                have scalable solutions for companies of all sizes. It all began
                as a game that rapidly became a dream. Today we offer innovative
                and intelligent services to different.
              </p>
            </div>
            <div className="mt-7 md:mt-0 grid md:grid-cols-3 gap-4 md:gap-x-[48px] ">
            {TeamData.map((data)=>(
           <TeamCard 
           key={data.id}
           name={data.name}
        position= {data.position}
        imageUrl={data.imageUrl}
           />     
            ))}
            </div>
          </div>
        </div>
      </section>  
      <section>
        <FaqBox />
      </section>
      <section className="bg-[#E56F20] py-10 md:py-[80px] px-5 mt-10 md:mt-[80px]">
        <div className="max-w-[910px] mx-auto text-center ">
          <h2 className=" mb-5 md:mb-10 text-[30px] md:text-[46px] lg:text-[80px] text-white font-bold md:font-[800] leading-[normal] lg:leading-[80px] ">Start creating videos. No experience needed.</h2>
         <div className="flex justify-center  ">
         <Link href={'/'} className="text-base md:text-lg font-[700] bg-white text-[#E56F20] flex items-center rounded-[25px] py-3 px-7 gap-[5px]">
         Get Started <ButtonArrow /></Link>
         </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
