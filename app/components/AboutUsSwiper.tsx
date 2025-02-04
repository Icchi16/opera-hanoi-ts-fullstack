"use client";

import aboutUs from "@/samples/aboutUs";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AboutUsSwiper = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <div className="relative w-full ">
      <div className="absolute inset-0 bottom-16 right-16 border-4 border-primary "></div>
      <div className="flex justify-between pt-16">
        <div className="min-w-16"></div>
        <div className="w-full pr-16 ">
          <Swiper id="aboutUs" pagination={pagination} modules={[Pagination]}>
            {aboutUs.map((cover) => (
              <SwiperSlide key={cover.id} className="min-h-[700px]">
                <Image
                  alt="about us"
                  fill
                  className="object-cover object-center"
                  src={cover.src}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSwiper;
