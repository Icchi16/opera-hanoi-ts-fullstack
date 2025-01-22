"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/global/Button";
import { ShowMetadata } from "@/types/extra";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import { NavigationOptions } from "swiper/types";

interface HighlightProps {
  highlightShows: ShowMetadata[];
}

const HighlightSlick: React.FC<HighlightProps> = ({ highlightShows }) => {
  dayjs.locale("vi");

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex space-x-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: nextRef.current!,
          prevEl: prevRef.current!,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            const navigation = swiper.params.navigation as NavigationOptions;

            if (navigation) {
              // Override prevEl & nextEl now that refs are defined
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        className="mySwiper py-4 pb-12"
      >
        {highlightShows.map((highlight) => (
          <SwiperSlide key={highlight.id}>
            <a href="#" className="group w-full">
              <figure className="absolute inset-0 z-0 shadow-2xl shadow-black group-hover:shadow-xl transition-all">
                <Image
                  alt={highlight.title}
                  src={highlight.cover}
                  layout="fill"
                  className="object-cover object-center"
                />
              </figure>
              <div className="h-[700px] relative overflow-hidden">
                <div className="h-full flex-col relative justify-center opacity-0 top-full transition-all group-hover:opacity-100 group-hover:top-[46%] bg-[linear-gradient(180deg,_rgba(24,22,22,0)_0%,_rgba(24,22,22,1)_2%)] duration-300">
                  {/* border */}
                  <div className="h-4 bg-gradient-to-b from-transparent to-secondary"></div>

                  {/* date */}
                  <div className="flex flex-col px-10 py-4 space-y-4">
                    <div className="flex justify-start space-x-4">
                      <div className="font-[family-name:var(--cta)] font-bold text-8xl italic flex justify-start items-center relative bottom-5 leading-none w-1/2">
                        {dayjs(highlight.date).format("D")}
                      </div>
                      <div className="flex flex-col uppercase space-y-1 ww-full">
                        <div>{dayjs(highlight.date).format("MMMM")}</div>
                        <div>{dayjs(highlight.date).format("dddd")}</div>
                        <div>{dayjs(highlight.date).format("YYYY")}</div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-8">
                      <div className="text-white font-medium text-xl">
                        {highlight.title}
                      </div>
                      <span className="h-2 bg-primary w-14"></span>
                      <div className="flex flex-col font-light space-y-8 text-sm text-white">
                        <div className="flex flex-col ">
                          {highlight.staff.map((staff) => (
                            <div
                              key={staff.id}
                              className="line-clamp-1"
                            >{`${staff.pos}: ${staff.name}`}</div>
                          ))}
                        </div>
                        <div className="line-clamp-2">{`Thời lượng: ${
                          highlight.time > 60
                            ? `${Math.floor(highlight.time / 60)} tiếng ${
                                highlight.time % 60 === 0
                                  ? ``
                                  : `${highlight.time % 60} phút`
                              }`
                            : `${highlight.time} phút`
                        } bao gồm giữa giờ`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col">
        <Button type="box" ref={prevRef} className="swiper-button-prev">
          Prev
        </Button>
        <Button type="box" ref={nextRef} className="swiper-button-next">
          Next
        </Button>
      </div>
    </div>
  );
};

export default HighlightSlick;
