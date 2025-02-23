"use client";

import dayjs, { Dayjs } from "dayjs";
import { SwiperSlide, Swiper } from "swiper/react";
import "dayjs/locale/vi";
import Button from "@/components/global/Button";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import clsx from "clsx";
import _ from "lodash";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

interface Month {
  id: number;
  date: Dayjs;
  text: string;
}

interface MonthSelectorProps {
  setSelectedMonth: (date: Dayjs) => void;
}

dayjs.locale("vi");

const monthNames = [
  "Tháng Một",
  "Tháng Hai",
  "Tháng Ba",
  "Tháng Tư",
  "Tháng Năm",
  "Tháng Sáu",
  "Tháng Bảy",
  "Tháng Tám",
  "Tháng Chín",
  "Tháng Mười",
  "Tháng Mười Một",
  "Tháng Mười Hai",
];

const MonthSelector: React.FC<MonthSelectorProps> = ({ setSelectedMonth }) => {
  // Create Current Month Array
  const currentMonth = dayjs().month();
  const startMonth = currentMonth - 3;

  const monthsArr: Month[] = Array.from({ length: 7 }, (_, i) => {
    // Adjust length as needed
    const monthIndex = (startMonth + i + 12) % 12;
    const currentYear = dayjs().year();
    const defaultValue = dayjs()
      .year(currentYear)
      .month(monthIndex)
      .startOf("month");

    // Dynamically adjust year based on position relative to current month
    const date =
      monthIndex === 0 && startMonth < 0
        ? defaultValue.year(currentYear + 1) // Force January to next year
        : defaultValue.year(currentYear + Math.floor((startMonth + i) / 12));

    return {
      id: i,
      date,
      text: monthNames[monthIndex],
    };
  });

  // comp hooks
  const swiperRef = useRef<SwiperCore | null>(null);
  const [atEnd, setAtEnd] = useState(false);
  const [activeMonthIndex, setActiveMonthIndex] = useState<number>(3);

  // handle button
  const handleNavigation = (direction: "prev" | "next") => {
    if (!swiperRef.current) return;

    setActiveMonthIndex((prev) => {
      const newMonth =
        direction === "prev"
          ? Math.max(0, prev - 1)
          : Math.min(prev + 1, monthsArr.length - 1);

      if (newMonth !== prev) {
        // Only slide if the index actually changes
        setTimeout(() => {
          swiperRef.current?.slideTo(newMonth, 200);
        }, 0);
      }

      return newMonth;
    });
  };

  useEffect(() => {
    setSelectedMonth(monthsArr[activeMonthIndex].date);
  }, [activeMonthIndex]);

  return (
    <div className="font-[family-name:var(--body)]">
      <div className="flex w-full justify-between items-center space-x-2">
        <Button
          type="box"
          className="swiper-button-prev px-5 py-1"
          onClick={() => handleNavigation("prev")}
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
            slidesPerView="auto"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              //Shift to active month when initialize
              swiper.slideTo(3, 0);

              // Remove fade at end
              swiper.on("progress", () => setAtEnd(swiper.isEnd));

              // Handle Clock and shift to active slide
              swiper.on("click", () => {
                if (swiper.clickedIndex !== null) {
                  setActiveMonthIndex(swiper.clickedIndex);
                  setTimeout(() => {
                    swiper.slideTo(swiper.clickedIndex, 200);
                  }, 0);
                }
              });
            }}
          >
            {monthsArr.map((month, index) => (
              <SwiperSlide
                key={month.id}
                className={clsx(
                  "w-fit px-6 h-12 border-primary cursor-pointer",
                  index !== _.last(monthsArr)?.id && "border-r-[3px]"
                )}
              >
                <div className="flex h-full justify-between items-center relative">
                  <div
                    className={clsx(
                      "transition-all duration-300 h-[3px] bg-primary absolute w-full bottom-0",
                      activeMonthIndex === month.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  ></div>
                  {/* Visible text */}
                  <div
                    className={clsx(
                      "absolute uppercase text-2xl flex justify-center w-full tracking-[0.2em] transition-all duration-300 hover:font-semibold",
                      activeMonthIndex === month.id
                        ? "font-semibold"
                        : "font-light"
                    )}
                    onClick={() => setSelectedMonth(month.date)}
                  >
                    {month.text}
                  </div>
                  {/* Invisible duplicate text with font-bold */}
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
          className="swiper-button-prev px-5 py-1"
          onClick={() => handleNavigation("next")}
        >
          <Icon icon="pajamas:arrow-right" className="text-5xl" />
        </Button>
      </div>
    </div>
  );
};

export default MonthSelector;
