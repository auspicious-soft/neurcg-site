import { axiosInstance } from "@/utils/axios";
import { Facebook, Instagram, Linkedin } from "@/utils/svgicons";
import React, { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/landing/contact-us', {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.number,
        message: formData.description
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(response.data.success) {
        setFormData({
          name: '',
          number: '',
          email: '',
          description: ''
        });
        toast.success('Form submitted successfully')
      } else {
        toast.error('Form submission failed something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="container">
      <div className="grid  gap-10 items-center lg:grid-cols-[minmax(0,_5.5fr)_minmax(0,_6.5fr)]">
        <div className="rounded-[20px] bg-[#FCF0E8] py-[30px] px-[15px] md:py-[60px] md:px-[40px]">
          <h2 className="text-[28px] text-[#E56F20] font-[700]  mb-[20px] md:mb-10 md:text-[48px]">
            Book a <span className="text-[#343434]">DEMO</span>
          </h2>
          <h3 className="text-[#e56f20] text-sm mb-[10px] uppercase">
            Location
          </h3>
          <p className="text-[#202c2f] text-xl font-semibold mb-7">
            Fuerststr. 19, 72072 Tübingen, <br /> Germany
          </p>
          <h3 className="text-[#e56f20] text-sm mb-[10px] uppercase">
            Call Us
          </h3>
          <p className="text-[#202c2f] text-xl font-semibold mb-7">
            (+49) 1 768 148 97 37
          </p>
          <h3 className="text-[#e56f20] text-sm mb-[10px] uppercase">
            Mail Us
          </h3>
          <p className="text-[#202c2f] text-xl font-semibold mb-7">
            maity@maity.pro
          </p>
          <h3 className="text-[#e56f20] text-sm mb-[10px] uppercase">
            Follow Us
          </h3>
          <p className="flex items-center gap-[15px]">
            <Facebook /> <Instagram /> <Linkedin />{" "}
          </p>
        </div>
        <form className="right-section" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-[#212f33] flex flex-col mb-[20px] md:mb-[33px] md:flex-row text-xl md:text-3xl">
            My Name Is
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="placeholder:underline placeholder:text-[#C8C8C8]  m-1 md:mt-0 md:ml-3"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="number" className="text-[#212f33] flex flex-col mb-[20px] md:mb-[33px] md:flex-row text-xl md:text-3xl">
            You can call me on
            <input
              type="number"
              name="number"
              id="number"
              placeholder="this phone number"
              className="placeholder:underline placeholder:text-[#C8C8C8]  m-1 md:mt-0 md:ml-3"
              value={formData.number}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="text-[#212f33] flex flex-col mb-[20px] md:mb-[33px] md:flex-row text-xl md:text-3xl">
            and email me at
            <input
              type="text"
              name="email"
              id="email"
              placeholder="this email address"
              className="placeholder:underline placeholder:text-[#C8C8C8]  m-1 md:mt-0 md:ml-3"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description" className="text-[#212f33] mb-[18px] flex flex-col md:flex-row text-xl md:text-3xl">
            I’d like to book a demo to learn more about your technology. I’d also like to mention...
          </label>
          <textarea
            name="description"
            id="description"
            rows={3}
            className="w-full bg-[#F0F0F0] rounded-[10px] p-[14px] placeholder:text-[#B0B0B0]"
            placeholder="Type anything..."
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <button className="button mt-5 md:mt-[35px] md:px-[40px]" type="submit">Submit</button>
        </form>
      </div>
    </div>

  );
};

export default Contact;
