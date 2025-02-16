"use client";

import dayjs from "dayjs";
import { SwiperSlide, Swiper } from "swiper/react";
import "dayjs/locale/vi";
import Button from "@/components/global/Button";
import { useRef, useState } from "react";
import { Swiper as SwiperCore } from "swiper/types";
import clsx from "clsx";
import { Icon } from "@iconify-icon/react";

dayjs.locale("vi");

const monthNames = [
  "Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", 
  "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"
];

const MonthSelector = () => {
  const currentMonth = dayjs().month();
  const startMonth = currentMonth - 3;

  const months = Array.from({ length: 7 }, (_, i) => {
    const monthIndex = (startMonth + i + 12) % 12;
    return {
      id: i,
      date: dayjs().month(monthIndex),
      text: monthNames[monthIndex],
    };
  });

  const swiperRef = useRef<SwiperCore | null>(null);
  const [atEnd, setAtEnd] = useState(false);
  const [activeMonth, setActiveMonth] = useState(3);

  const handleNavigation = (direction: "prev" | "next") => {
    if (!swiperRef.current) return;
    
    setActiveMonth((prev) => {
      const newMonth = direction === "prev" ? Math.max(0, prev - 1) : Math.min(prev + 1, months.length - 1);
      swiperRef.current?.slideTo(newMonth, 200); // Reduce transition time to 200ms
      return newMonth;
    });
  };

  return (
    <div className="font-[family-name:var(--body)]">
      <div className="flex w-full justify-between items-center space-x-2">
        <Button type="box" className="px-5 py-1" onClick={() => handleNavigation("prev")}>
          <Icon icon="pajamas:arrow-left" className="text-5xl" />
        </Button>

        <div className={clsx("relative overflow-hidden transition-all duration-300", atEnd ? "edge-fade-left" : "edge-fade-right")}>
          <Swiper
            slidesPerView="auto"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.slideTo(3, 0); // Instantly set to active month on load
              
              swiper.on("progress", () => setAtEnd(swiper.isEnd));
              
              swiper.on("click", () => {
                if (swiper.clickedIndex !== null) {
                  setActiveMonth(swiper.clickedIndex);
                  swiper.slideTo(swiper.clickedIndex, 200); // Faster jump to clicked month
                }
              });
            }}
          >
            {months.map((month, index) => (
              <SwiperSlide key={month.id} className="w-fit px-6 h-12 border-primary cursor-pointer border-r-[3px]">
                <div className="flex h-full justify-center items-center relative">
                  <div className={clsx("absolute bottom-0 w-full h-[3px] bg-primary transition-opacity", activeMonth === index ? "opacity-100" : "opacity-0")} />
                  <div className={clsx("uppercase text-2xl tracking-[0.2em] transitio n-all", activeMonth === index ? "font-semibold" : "font-light")}>{month.text}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Button type="box" className="px-5 py-1" onClick={() => handleNavigation("next")}>
          <Icon icon="pajamas:arrow-right" className="text-5xl" />
        </Button>
      </div>
    </div>
  );
};

export default MonthSelector;
