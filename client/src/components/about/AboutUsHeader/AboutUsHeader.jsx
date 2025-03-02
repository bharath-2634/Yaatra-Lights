import React from "react";
import { FaCrown, FaYoutube, FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";

const AboutUsHeader = () => {
  return (
    <section className="mt-4 bg-gradient-to-r from-[#CD212A] to-[#EC5F05] w-full text-white flex flex-col items-center justify-center gap-8 py-4">
      <div className="flex flex-col items-center justify-center gap-8 px-2">
        <h2 className="text-center text-xl md:text-2xl font-bold">
          India's No <span className="inline-flex items-center gap-1">#1 <FaCrown className="text-yellow-400" /></span> Consumer Durable Brand
        </h2>
        <div className="flex items-center justify-center gap-8">
          <div className="p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">3000+</h3>
            <p className="text-sm">Employees</p>
          </div>
          <div className="p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">10Cr+</h3>
            <p className="text-sm">Households</p>
          </div>
          <div className="p-4 rounded-md text-center">
            <h3 className="text-lg font-bold">314,000+</h3>
            <p className="text-sm">Retailers</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="w-16 h-16 bg-[#CD212A] rounded-full text-white flex items-center justify-center hover:bg-[#EC5F05] hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
          <a href="#" className="text-2xl">
            <FaYoutube />
          </a>
        </div>
        <div className="w-16 h-16 bg-[#CD212A] rounded-full text-white flex items-center justify-center hover:bg-[#EC5F05] hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
          <a href="#" className="text-2xl">
            <FaLinkedin />
          </a>
        </div>
        <div className="w-16 h-16 bg-[#CD212A] rounded-full text-white flex items-center justify-center hover:bg-[#EC5F05] hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
          <a href="#" className="text-2xl">
            <FaInstagramSquare />
          </a>
        </div>
        <div className="w-16 h-16 bg-[#CD212A] rounded-full text-white flex items-center justify-center hover:bg-[#EC5F05] hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
          <a href="#" className="text-2xl">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
