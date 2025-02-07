"use client";

import dayjs, { Dayjs } from "dayjs";
import { SwiperSlide, Swiper } from "swiper/react";
import "dayjs/locale/vi";
import Button from "@/components/global/Button";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { Navigation } from "swiper/modules";
import clsx from "clsx";
import _ from "lodash";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

interface Month {
  id: number;
  date: Dayjs;
  text: string;
}

const MonthSelector = () => {
  dayjs.locale("vi");

  const MonthArr: Month[] = [
    {
      id: 0,
      date: dayjs().month(0),
      text: "Tháng Một",
    },
    {
      id: 1,
      date: dayjs().month(1),
      text: "Tháng Hai",
    },
    {
      id: 2,
      date: dayjs().month(2),
      text: "Tháng Ba",
    },
    {
      id: 3,
      date: dayjs().month(3),
      text: "Tháng Tư",
    },
    {
      id: 4,
      date: dayjs().month(4),
      text: "Tháng Năm",
    },
    {
      id: 5,
      date: dayjs().month(5),
      text: "Tháng Sáu",
    },
    {
      id: 6,
      date: dayjs().month(6),
      text: "Tháng Bảy",
    },
    {
      id: 7,
      date: dayjs().month(7),
      text: "Tháng Tám",
    },
    {
      id: 8,
      date: dayjs().month(8),
      text: "Tháng Chín",
    },
    {
      id: 9,
      date: dayjs().month(9),
      text: "Tháng Mười",
    },
    {
      id: 10,
      date: dayjs().month(10),
      text: "Tháng Mười Một",
    },
    {
      id: 11,
      date: dayjs().month(11),
      text: "Tháng Mười Hai",
    },
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="font-[family-name:var(--body)]">
      <div className="flex w-full justify-between items-center space-x-8">
        <Button
          type="box"
          ref={prevRef}
          className="swiper-button-prev px-5 py-1"
        >
          <Icon icon="pajamas:arrow-left" className="text-5xl" />
        </Button>
        <Swiper
          slidesPerView={"auto"}
          modules={[Navigation]}
          navigation={{
            nextEl: nextRef.current!,
            prevEl: prevRef.current!,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              if (swiper.params && prevRef.current && nextRef.current) {
                const navigation = swiper.params
                  .navigation as NavigationOptions;

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
        >
          {MonthArr.map((month, index) => (
            <SwiperSlide
              key={month.id}
              className={clsx(
                "w-fit px-12 h-12 border-primary",
                index !== _.last(MonthArr)?.id && "border-r-[3px]"
              )}
            >
              <div className="flex h-full justify-between items-center">
                <div className="uppercase font-light text-2xl flex justify-center w-full tracking-[0.2em]">
                  {month.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          type="box"
          ref={prevRef}
          className="swiper-button-prev px-5 py-1"
        >
          <Icon icon="pajamas:arrow-right" className="text-5xl" />
        </Button>
      </div>
    </div>
  );
};

export default MonthSelector;
