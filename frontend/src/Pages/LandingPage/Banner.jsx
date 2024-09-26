import React from "react";
import Banner1 from "../../Components/Images/banner1.jpg";
import Banner2 from "../../Components/Images/banner2.jpg";
import Banner3 from "../../Components/Images/banner3.jpg";
import Banner4 from "../../Components/Images/banner4.jpg";
import Banner5 from "../../Components/Images/banner5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import Swiper modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="m-2 rounded-3xl">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true} // Enable navigation buttons
        autoplay={{
          delay: 5000, // Set autoplay delay to 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div className=" rounded h-[200px]   bg-slate-100">
            <img src={Banner1} alt="" className="w-full object-cover rounded" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded h-[200px] bg-slate-100">
            <img src={Banner2} alt="" className="w-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded h-[200px] bg-slate-100">
            <img src={Banner3} alt="" className="w-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded h-[200px] bg-slate-100">
            <img src={Banner4} alt="" className="w-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded h-[200px] bg-slate-100">
            <img src={Banner5} alt="" className="w-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
