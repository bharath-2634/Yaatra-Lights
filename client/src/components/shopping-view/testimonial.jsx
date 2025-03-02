import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaShippingFast, FaRocket, FaPhoneAlt } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FcOnlineSupport } from "react-icons/fc";
import ceo from "../../assets/images_ceo.png";
import offerImg from "../../assets/testimonial__banner.jpg";

const Testimonials = () => {
  return (
    <section className="py-12 px-6 flex flex-col lg:flex-row lg:justify-center lg:items-start gap-12">
      {/* CEO Section */}
      <div className="w-full lg:w-2/5 flex flex-col items-center">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-red-600">Our CEO</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-2"></div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <img
            src={ceo}
            alt="CEO"
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold text-gray-800 mt-4">MAADESWARAN</h2>
          <h3 className="text-gray-500 text-sm">CEO & Founder Invision</h3>
          <RiDoubleQuotesL className="text-gray-400 text-3xl mx-auto mt-4" />
          <p className="text-gray-600 mt-2">
            Embrace the voyage, for it is in the journey that we find our true
            destination.
          </p>
          <RiDoubleQuotesR className="text-gray-400 text-3xl mx-auto mt-4" />
        </div>
      </div>

      {/* Offer Section */}
      <div className="flex flex-col gap-2 h-full lg:h-[calc(100%-2rem)]">
        <div className="w-full flex justify-center items-center h-full">
            <img
            src={offerImg}
            alt="Offer"
            className="rounded-lg shadow-md w-[90%] lg:w-[120%] h-full object-cover"
            />
        </div>
        <div className="w-full flex justify-center items-center h-full">
            <img
            src={offerImg}
            alt="Offer"
            className="rounded-lg shadow-md w-[90%] lg:w-[120%] h-full object-cover"
            />
        </div>
    </div>

      {/* Services Section */}
      <div className="w-full lg:w-2/5">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-600">Our Services</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            icon={<FaShippingFast className="text-indigo-600 text-3xl" />}
            heading="Fast And Reliable Delivery"
            description="Free Delivery For Orders Over ₹ 29999"
          />
          <ServiceCard
            icon={<FaRocket className="text-indigo-600 text-3xl" />}
            heading="Rocket Fast Service"
            description="Lightning-fast support and action"
          />
          <ServiceCard
            icon={<FaPhoneAlt className="text-indigo-600 text-3xl" />}
            heading="24/7 Customer Support"
            description="Always available for your queries"
          />
          <ServiceCard
            icon={<GiReturnArrow className="text-indigo-600 text-3xl" />}
            heading="Easy Returns"
            description="Hassle-free return policies"
          />
          <ServiceCard
            icon={<FcOnlineSupport className="text-3xl" />}
            heading="Online Support"
            description="Get expert advice instantly"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, heading, description }) => (
  <div className="flex flex-col items-start gap-4 p-4 bg-white shadow-md rounded-lg">
    <div>{icon}</div>
    <div>
      <h3 className="text-sm font-bold text-gray-800 md:text-sm">{heading}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </div>
);

export default Testimonials;
