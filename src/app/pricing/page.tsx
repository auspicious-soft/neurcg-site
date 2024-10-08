import PricingPlans from "@/components/PricingPlans";
import React from "react";
import FaqBox from "@/components/FaqBox";
import { ButtonArrow } from "@/utils/svgicons";

const Page = () => {
  return (
    <div>
      <section>
        <div>
          <PricingPlans />
        </div>
      </section>
      <section className="bg-[#F5F5F5] py-[40px] md:py-[100px] mb-[40px] md:mb-[100px]">
        <div className="container text-center">
          <h2 className="section-title mb-5">
            Need An <span>Enterprise Plan?</span>
          </h2>
          <p className="max-w-[1000px] mx-auto text-[#202020] text-base md:text-lg font-normal opacity-70 leading-[30px]">
            If your business requires a tailored solution, our Enterprise Plan
            is designed to meet your specific needs. We offer flexible options
            to support your unique goals and challenges. Contact us today to
            discuss how we can create a customized plan that drives your
            business forward.
          </p>
          <button className="button mt-5 md:mt-10">Submit Request</button>
        </div>
      </section>
      <section>
        <FaqBox />
      </section>
      <section className="bg-[#E56F20] py-10 md:py-[80px] px-5 mt-10 md:mt-[80px]">
        <div className="max-w-[910px] mx-auto text-center ">
          <h2 className=" mb-5 md:mb-10 text-[30px] md:text-[46px] lg:text-[80px] text-white font-bold md:font-[800] leading-[normal] lg:leading-[80px] ">Start creating videos. No experience needed.</h2>
         <div className="flex justify-center  ">
         <button className="text-base md:text-lg font-[700] bg-white text-[#E56F20] flex items-center rounded-[25px] py-3 px-7 gap-[5px]">
         Get Started <ButtonArrow /></button>
         </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
