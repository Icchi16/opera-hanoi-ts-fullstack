"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/global/Button";
import { News } from "@/types/extra";
import "dayjs/locale/vi";
import { NavigationOptions } from "swiper/types";
import ArrowLeftIcon from "@/components/svgs/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/components/svgs/icons/ArrowRightIcon";

interface NewsSlickProps {
  news: News[];
}

const NewsSwiper: React.FC<NewsSlickProps> = ({ news }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiperInstance = swiperRef.current;
      const navigation = swiperInstance.params?.navigation as NavigationOptions;

      if (navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;

        swiperInstance.navigation.destroy(); // Destroy previous navigation instance
        swiperInstance.navigation.init(); // Initialize new navigation instance
        swiperInstance.navigation.update(); // Update the navigation
      }
    }
  }, [news]);

  return (
    <div className="flex space-x-8">
      <Swiper
        slidesPerView={3}
        spaceBetween={70}
        modules={[Navigation]}
        navigation={{
          nextEl: nextRef.current!,
          prevEl: prevRef.current!,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            if (swiper.params && prevRef.current && nextRef.current) {
              const navigation = swiper.params.navigation as NavigationOptions;

              // Override prevEl & nextEl now that refs are defined
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }, 0); // Ensure immediate execution
        }}
        className="mySwiper py-4 pb-12"
      >
        {news.map((news) => (
          <SwiperSlide key={news.id}>
            <a href="#" className="group w-full">
              <div className="flex flex-col bg-cardBg shadow-lg shadow-black hover:shadow-2xl hover:shadow-black transition-all">
                {/* Cover */}
                <div className="relative min-h-[286px]">
                  <Image
                    alt={news.title}
                    layout="fill"
                    src={news.cover}
                    className="object-cover object-center"
                  />
                </div>
                {/* News Info */}
                <div className="flex flex-col px-8 py-6 space-y-6">
                  <h2 className=" line-clamp-2 text-2xl font-medium">
                    {news.title}
                  </h2>
                  <span className="h-2 bg-primary w-14"></span>
                  <div className="text-white line-clamp-6 min-h-[144px]">
                    {news.shortDesc}
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col justify-center space-y-4">
        <Button type="box" ref={prevRef} className="swiper-button-prev px-4">
          <span>
            <ArrowLeftIcon className="h-10 w-10" />
          </span>
        </Button>
        <Button type="box" ref={nextRef} className="swiper-button-next px-4">
          <span>
            <ArrowRightIcon className="h-10 w-10" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default NewsSwiper;
