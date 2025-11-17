import React from "react";
import service from "../../src/assets/banner/service.png";

const Service = () => {
  return (
    <div className="bg-black py-14 px-4 md:px-10 rounded-lg my-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed pb-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col justify-center items-center space-y-4 hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <img src={service} alt="" className="w-20 h-20 object-contain" />

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Express & Standard Delivery
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="bg-[#CAEB66] shadow-lg rounded-2xl p-6 text-center flex flex-col justify-center items-center space-y-4 hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <img src={service} alt="" className="w-20 h-20 object-contain" />

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Nationwide Delivery
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col justify-center items-center space-y-4 hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <img src={service} alt="" className="w-20 h-20 object-contain" />

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Fulfillment Solution
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col justify-center items-center space-y-4 hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <img src={service} alt="" className="w-20 h-20 object-contain" />

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Cash on Home Delivery
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col justify-center items-center space-y-4 hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <img src={service} alt="" className="w-20 h-20 object-contain" />

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Corporate Service / Contract In Logistics
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center flex flex-col justify-center items-center space-y-4 hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <img src={service} alt="" className="w-20 h-20 object-contain" />

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Parcel Return
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
