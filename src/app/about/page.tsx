import Banner from "@/components/Banner";
import React from "react";
import banner from "@/assets/images/banner.png";
import img1 from "@/assets/images/team.jpg";
import Image from "next/image";
import FaqBox from "@/components/FaqBox";
import { ButtonArrow } from "@/utils/svgicons";
import TeamCard from "@/components/TeamCard";
import teamimg1 from "@/assets/images/Partha.png"
import teamimg2 from "@/assets/images/Valen.png"
import teamimg3 from "@/assets/images/Kamil.png"
import Link from "next/link";

const TeamData =[
    {
        id: 1,
        imageUrl: teamimg1,
        name: "Dr.Partha Ghosh",
        position: "CEO/Co-Founder",
    },
    {
        id: 2,
        imageUrl: teamimg2,
        name: "Valentina Rodriguez",
        position: "CCO/Co-Founder",
    },
    {
        id: 3,
        imageUrl: teamimg3,
        name: "Dr.Kamil Adamczewski",
        position: "CTO/Co-Founder",
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
              We are a team of two scientists specializing in machine learning 
              and computer vision, joined by an entrepreneur with an MBA and a
              history of founding startups. United by our passion for innovation,
              we aim to transform science into business, bringing reality into
              the virtual world to simplify and connect lives globally.

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
                Our dream is to bridge the gap between reality and the virtual
                world, making technology as intuitive and immersive as life 
                itself. We envision a future where language barriers disappear,
                virtual interactions feel human, and everyone has access to 
                tools that simplify and connect their lives. Through innovation 
                and dedication, we strive to make this vision a reality for a
                more united and accessible world.
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
                Behind our vision is a diverse team of innovators who bring
                expertise, creativity, and passion to everything we do.
                Together, we’re combining science and entrepreneurship
                to reshape how the world interacts with technology.
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
