import React from "react";
import bookingsIcon from "../../src/assets/banner/bookingIcon.png";

const Works = () => {
  return (
    <div className="my-12 px-4 md:px-10">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold  mb-10">
        How it <span className="text-blue-600">Works</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="shadow-lg p-6 rounded-2xl bg-white hover:shadow-2xl transition-all text-center space-y-4">
          <img className="w-16 mx-auto" src={bookingsIcon} alt="" />
          <h3 className="text-xl md:text-xl font-semibold">
            Booking Pick & Drop
          </h3>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="shadow-lg p-6 rounded-2xl bg-white hover:shadow-2xl transition-all text-center space-y-4">
          <img className="w-16 mx-auto" src={bookingsIcon} alt="" />
          <h3 className="text-xl md:text-xl font-semibold">
            Real-Time Tracking
          </h3>
          <p className="text-gray-600">
            Track your shipment live and stay updated at every step of the
            journey.
          </p>
        </div>

        {/* Card 3 */}
        <div className="shadow-lg p-6 rounded-2xl bg-white hover:shadow-2xl transition-all text-center space-y-4">
          <img className="w-16 mx-auto" src={bookingsIcon} alt="" />
          <h3 className="text-xl md:text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-600">
            Our delivery experts ensure your product reaches safely and quickly.
          </p>
        </div>

        {/* Card 4 */}
        <div className="shadow-lg p-6 rounded-2xl bg-white hover:shadow-2xl transition-all text-center space-y-4">
          <img className="w-16 mx-auto" src={bookingsIcon} alt="" />
          <h3 className="text-xl md:text-xl font-semibold">Secure Packaging</h3>
          <p className="text-gray-600">
            We pack your items with care so they stay protected throughout the
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
