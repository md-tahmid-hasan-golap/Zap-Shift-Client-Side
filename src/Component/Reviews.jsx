import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import costomar from "../../src/assets/banner/customer-top.png";

const Reviews = ({ riviewsPromised }) => {
  const Reviews = use(riviewsPromised);
  //   console.log(Reviews);
  return (
    <div className="my-7">
      <div className="flex flex-col items-center justify-center text-center p-6 mx-auto max-w-lg">
        <img className="mb-5" src={costomar} alt="" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What our customers are saying
        </h2>
        <p className="text-gray-700 mb-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <>
        <Swiper
          effect={"coverflow"}
          loop={true}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {Reviews.map((reviewss) => (
            <SwiperSlide key={reviewss.id}>
              <ReviewCard reviewss={reviewss}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
