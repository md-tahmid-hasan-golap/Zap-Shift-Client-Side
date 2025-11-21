import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../src/assets/brands/amazon.png";
import amazon2 from "../../src/assets/brands/amazon_vector.png";
import amazon3 from "../../src/assets/brands/casio.png";
import amazon4 from "../../src/assets/brands/moonstar.png";
import amazon5 from "../../src/assets/brands/randstad.png";
import amazon6 from "../../src/assets/brands/star.png";
import amazon7 from "../../src/assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandsLogos = [
  amazon,
  amazon2,
  amazon3,
  amazon4,
  amazon5,
  amazon6,
  amazon7,
];
//

const Brands = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        We've helped thousands of sales teams
      </h2>{" "}
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {brandsLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
