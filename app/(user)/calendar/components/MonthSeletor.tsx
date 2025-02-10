"use client";

import dayjs, { Dayjs } from "dayjs";
import { SwiperSlide, Swiper } from "swiper/react";
import "dayjs/locale/vi";
import Button from "@/components/global/Button";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
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
  const swiperRef = useRef<SwiperCore | null>(null);
  const [atEnd, setAtEnd] = useState(false);
  const [activeMonth, setActiveMonth] = useState<number>(dayjs().month());

  const handlePrevClick = () => {
    if (!swiperRef.current) return;
    if (activeMonth < 10) {
      swiperRef.current.slidePrev();
    }
    setTimeout(() => {
      setActiveMonth((prevMonth) => Math.max(0, prevMonth - 1));
    }, 0);
  };

  const handleNextClick = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
    setTimeout(() => {
      setActiveMonth((prevMonth) =>
        Math.min(prevMonth + 1, MonthArr.length - 1)
      );
    }, 0);
  };

  return (
    <div className="font-[family-name:var(--body)]">
      <div className="flex w-full justify-between items-center space-x-2">
        <Button
          type="box"
          ref={prevRef}
          className="swiper-button-prev px-5 py-1"
          onClick={handlePrevClick}
        >
          <Icon icon="pajamas:arrow-left" className="text-5xl" />
        </Button>

        {/* Swiper fade edge */}
        <div
          className={clsx(
            "relative overflow-hidden transition-all duration-300",
            !atEnd ? "edge-fade-right" : "edge-fade-left"
          )}
        >
          <Swiper
            slidesPerView={"auto"}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              //Shift to active month when initialize
              swiper.slideTo(activeMonth, 0);

              // Remove fade at end
              swiper.on("progress", function () {
                if (swiper.isEnd) {
                  setAtEnd(true);
                } else {
                  setAtEnd(false);
                }
              });

              // Handle Clock and shift to active slide
              swiper.on("click", function () {
                const clickedIndex = swiper.clickedIndex;
                if (clickedIndex !== undefined && clickedIndex !== null) {
                  swiper.slideTo(clickedIndex);
                  setActiveMonth(dayjs(MonthArr[clickedIndex].date).month());
                }
              });
            }}
          >
            {MonthArr.map((month, index) => (
              <SwiperSlide
                key={month.id}
                className={clsx(
                  "w-fit px-6 h-12 border-primary cursor-pointer",
                  index !== _.last(MonthArr)?.id && "border-r-[3px]"
                )}
              >
                <div className="flex h-full justify-between items-center relative">
                  <div
                    className={clsx(
                      "transition-all duration-300 h-[3px] bg-primary absolute w-full bottom-0",
                      activeMonth === dayjs(month.date).month()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  ></div>
                  {/* Invisible duplicate text with font-bold */}
                  <div
                    className={clsx(
                      "absolute uppercase text-2xl flex justify-center w-full tracking-[0.2em] transition-all duration-300 hover:font-semibold",
                      activeMonth === dayjs(month.date).month()
                        ? "font-semibold"
                        : "font-light"
                    )}
                  >
                    {month.text}
                  </div>
                  {/* Visible text */}
                  <div className="uppercase font-bold invisible text-2xl flex justify-center w-full tracking-[0.2em]">
                    {month.text}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button
          type="box"
          ref={nextRef}
          className="swiper-button-prev px-5 py-1"
          onClick={handleNextClick}
        >
          <Icon icon="pajamas:arrow-right" className="text-5xl" />
        </Button>
      </div>
    </div>
  );
};

export default MonthSelector;
