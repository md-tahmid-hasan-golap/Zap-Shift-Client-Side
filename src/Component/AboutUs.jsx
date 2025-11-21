import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white shadow-2xl rounded-2xl my-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-gray-700 border-b pb-2">
        <button className="text-green-700 border-b-2 border-green-700 pb-1">
          Story
        </button>
        <button className="hover:text-green-700">Mission</button>
        <button className="hover:text-green-700">Success</button>
        <button className="hover:text-green-700">Team & Others</button>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it’s a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it’s a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it’s a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
