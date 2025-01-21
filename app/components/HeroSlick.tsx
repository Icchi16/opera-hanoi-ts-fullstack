"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Image from "next/image";
import Button from "@/components/global/Button";
import dayjs from "dayjs";
import { ShowMetadata } from "@/types/extra";

interface HeroProps {
  heroShows: ShowMetadata[];
}

const HeroSlick: React.FC<HeroProps> = ({ heroShows }) => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      direction={"vertical"}
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper h-screen w-screen"
    >
      {heroShows.map((hero) => (
        <SwiperSlide key={hero.id}>
          <a href="#">
            <Image
              alt=""
              className="object-cover object-left-top"
              layout="fill"
              src={hero.cover}
            />
            <div className="absolute block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1440px] md:px-16 mx-auto text-white text-3xl z-20">
              <div className="flex flex-col w-fit space-y-16 items-start">
                <div className="flex w-fit flex-col">
                  <div className="flex justify-end font-[family-name:var(--title)] font-bold text-[4rem] leading-none">
                    {dayjs(hero.date).format("DD/MM")}
                  </div>
                  <div className="flex justify-start  font-[family-name:var(--cta)] font-bold text-[4rem] italic leading-none">
                    {hero.title}
                  </div>
                </div>
                {/* staff and time */}
                <div className="flex flex-col text-xl font-light space-y-12">
                  <div className="flex flex-col space-y-2">
                    {hero.staff.map((staff) => (
                      <div key={staff.id}>{`${staff.pos}: ${staff.name}`}</div>
                    ))}
                  </div>
                  <div>{`Thời lượng: ${
                    hero.time > 60
                      ? `${Math.floor(hero.time / 60)} tiếng ${
                          hero.time % 60 === 0 ? `` : `${hero.time % 60} phút`
                        }`
                      : `${hero.time} phút`
                  } bao gồm giữa giờ`}</div>
                </div>
                {/* book btn */}
                <Button
                  type="box"
                  className="px-[96px] text-2xl py-4 !h-fit font-medium z-50 hover:bg-secondary hover:text-primary transition-all"
                  onClick={() => {
                    console.log("hero clocked");
                  }}
                >
                  ĐẶT VÉ
                </Button>
              </div>
            </div>
            <span className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(43,41,40,1)_14%,_rgba(96,90,83,0.46)_35%,_rgba(96,90,83,0.58)_58%,_rgba(45,41,39,1)_96%)] pointer-events-none z-10"></span>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlick;
