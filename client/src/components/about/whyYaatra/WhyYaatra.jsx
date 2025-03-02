import React from "react";
import whyYaatraImg from "../../../assets/whyYaatra_img.png";
import ECS from "../../../assets/ECS.png";
import EnergyEff from "../../../assets/Energy-Efficiency.png";
import ID from "../../../assets/Innovative-Designs.png";
import SQ from "../../../assets/Superior-Quality.png";
import SF from "../../../assets/Sustainability-Focus.png";
import CP from "../../../assets/Competitive-Pricing.png";

const WhyYaatra = () => {
  return (
    <section className="mt-4 pb-12 text-center grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="flex flex-col items-center gap-6 lg:col-start-1">
        <div className="flex items-center gap-4">
          <img src={ECS} alt="Excellent Customer Service" className="w-28" />
          <h3 className="text-lg font-semibold text-primary">Excellent Customer Service</h3>
        </div>
        <div className="flex items-center gap-4">
          <img src={EnergyEff} alt="Energy Efficiency" className="w-20" />
          <h3 className="text-lg font-semibold text-primary w-40">Energy Efficiency</h3>
        </div>
        <div className="flex items-center gap-4">
          <img src={ID} alt="Innovative Designs" className="w-20" />
          <h3 className="text-lg font-semibold text-primary w-40">Innovative Designs</h3>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <h2 className="text-3xl font-bold text-primary mb-4">
            <span className="text-4xl block">Why</span> Yaatra
          </h2>
          <img src={whyYaatraImg} alt="Why Yaatra" className="w-40 h-40 mx-auto" />
        </div>
        <p className="text-gray-600 text-base max-w-md leading-6">
          <span className="text-primary font-bold">Yaatra Lights</span> is a leading name in the lighting industry, dedicated to providing high-quality lighting solutions that blend aesthetic appeal with cutting-edge technology.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center gap-6 lg:col-start-3">
        <div className="flex items-center gap-4">
          <img src={SQ} alt="Superior Quality" className="w-20" />
          <h3 className="text-lg font-semibold text-primary w-40">Superior Quality</h3>
        </div>
        <div className="flex items-center gap-4">
          <img src={SF} alt="Sustainability Focus" className="w-32" />
          <h3 className="text-lg font-semibold text-primary w-40">Sustainability Focus</h3>
        </div>
        <div className="flex items-center gap-4">
          <img src={CP} alt="Competitive Pricing" className="w-32" />
          <h3 className="text-lg font-semibold text-primary w-40">Competitive Pricing</h3>
        </div>
      </div>
    </section>
  );
};

export default WhyYaatra;
