import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../src/assets/banner/banner1.png";
import banner2 from "../../src/assets/banner/banner2.png";
import banner3 from "../../src/assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="my-10 px-4 md:px-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
      >
        {/* Slide 1 */}
        <div>
          <img
            src={banner1}
            className="rounded-xl max-h-[400px] md:max-h-[500px] object-cover"
          />
          <p className="legend text-lg font-semibold">Fast & Secure Delivery</p>
        </div>

        {/* Slide 2 */}
        <div>
          <img
            src={banner2}
            className="rounded-xl max-h-[400px] md:max-h-[500px] object-cover"
          />
          <p className="legend text-lg font-semibold">
            Smart Logistic Solutions
          </p>
        </div>

        {/* Slide 3 */}
        <div>
          <img
            src={banner3}
            className="rounded-xl max-h-[400px] md:max-h-[500px] object-cover"
          />
          <p className="legend text-lg font-semibold">We Deliver Anywhere</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
