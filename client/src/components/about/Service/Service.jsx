import React from "react";
import recidentalService from "../../../assets/recidential_service.png";
import smartService from "../../../assets/smartLight_service.png";
import solorLight_service from "../../../assets/solorLight_service.png";
import streetLight_service from "../../../assets/streetLight_service.png";
import offical_service from "../../../assets/official_service.png";
import industrialLighting_service from "../../../assets/IndustrialLighting_service.png";

const Service = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-6 py-12 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-primary mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
          saepe nostrum incidunt in beatae rerum.
        </p>
      </div>

      {/* Service Boxes */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Street Lighting */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <img
            src={streetLight_service}
            alt="Street Lighting"
            className="w-28 h-28 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-700">
            <a href="#" className="text-primary hover:underline">
              Street Lighting
            </a>
          </h2>
        </div>

        {/* Solar Lighting */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <img
            src={solorLight_service}
            alt="Solar Lighting"
            className="w-28 h-28 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-700">
            <a href="#" className="text-primary hover:underline">
              Solar Lighting
            </a>
          </h2>
        </div>

        {/* Residential Lighting */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <img
            src={recidentalService}
            alt="Residential Lighting"
            className="w-28 h-28 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-700">
            <a href="#" className="text-primary hover:underline">
              Residential Lighting
            </a>
          </h2>
        </div>

        {/* Smart Lighting */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <img
            src={smartService}
            alt="Smart Lighting"
            className="w-36 h-36 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-700">
            <a href="#" className="text-primary hover:underline">
              Smart Lighting
            </a>
          </h2>
        </div>

        {/* Industrial Lighting */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <img
            src={industrialLighting_service}
            alt="Industrial Lighting"
            className="w-36 h-36 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-700">
            <a href="#" className="text-primary hover:underline">
              Industrial Lighting
            </a>
          </h2>
        </div>

        {/* Official Lighting */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <img
            src={offical_service}
            alt="Official Lighting"
            className="w-36 h-36 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-700">
            <a href="#" className="text-primary hover:underline">
              Official Lighting
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Service;
