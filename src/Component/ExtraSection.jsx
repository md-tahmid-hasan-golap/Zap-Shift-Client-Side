import React from "react";

import liveTracking from "../../src/assets/banner/live-tracking.png";
import safeDelevery from "../../src/assets/banner/safe-delivery.png";

const ExtraSection = () => {
  return (
    <div>
      <div className="my-20 bg-gray-50 p-7 md:p-10 rounded-lg">
        {/* Card 1 */}
        <section className="flex flex-col md:flex-row items-center bg-white gap-6 md:gap-16 justify-center shadow-lg rounded-2xl p-6 mb-7">
          <div>
            <img
              src={liveTracking}
              alt=""
              className="w-24 md:w-32 object-contain"
            />
          </div>
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Live Parcel Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </section>

        {/* Card 2 */}
        <section className="flex flex-col md:flex-row items-center bg-white gap-6 md:gap-16 justify-center shadow-lg rounded-2xl p-6 mb-7">
          <div>
            <img
              src={safeDelevery}
              alt=""
              className="w-24 md:w-32 object-contain"
            />
          </div>
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              100% Safe Deliveries
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We ensure your parcels are handled with the utmost care and
              delivered securely. Our reliable process guarantees safe and
              damage-free delivery every time.
            </p>
          </div>
        </section>

        {/* Card 3 */}
        <section className="flex flex-col md:flex-row items-center bg-white gap-6 md:gap-16 justify-center shadow-lg rounded-2xl p-6 mb-7">
          <div>
            <img
              src={safeDelevery}
              alt=""
              className="w-24 md:w-32 object-contain"
            />
          </div>
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              24/7 Call Center Support
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our dedicated support team is available around the clock to assist
              you with questions, updates, or delivery concerns anytime you need
              us.
            </p>
          </div>
        </section>
      </div>

      <p className="border mb-7 border-gray-500 border-dashed"></p>
    </div>
  );
};

export default ExtraSection;
