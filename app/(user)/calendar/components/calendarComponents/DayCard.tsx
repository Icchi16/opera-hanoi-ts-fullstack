"use client";

import { ShowMetadata } from "@/types/extra";
import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import { CalendarProps } from "../Calendar";
import { useState } from "react";
import _ from "lodash";
import Button from "@/components/global/Button";
import { useRouter } from "next/navigation";

interface DayCardProps {
  date: Dayjs;
  shows: ShowMetadata[];
  selectedMonth: CalendarProps["selectedMonth"];
}

const DayCard: React.FC<DayCardProps> = ({ date, shows, selectedMonth }) => {
  const router = useRouter();

  const MAX_STACKED_SHOWS = 3;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const visibleShows = _.slice(shows, 0, MAX_STACKED_SHOWS);

  return (
    <div
      className="h-64 overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setHoveredIndex(null);
        setIsHovering(false);
      }}
    >
      {/* Main box data */}
      <div
        className={clsx(
          "relative h-full",
          (date.isBefore(dayjs()) ||
            !date.isSame(dayjs(selectedMonth), "month")) &&
            "opacity-35 cursor-not-allowed"
        )}
      >
        {/* Date on top right corner */}
        <div
          className={clsx(
            "absolute right-2 top-3 mix-blend-difference leading-none z-20 pointer-events-none transition-all duration-300",
            hoveredIndex !== null && "opacity-0"
          )}
        >
          {dayjs(date).format("DD")}
        </div>

        {/* Cover Images */}
        {shows.length > 0 &&
          visibleShows.map((show, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={show.id}
                className="absolute h-full w-full transition-all duration-300"
                style={{
                  transform: isHovered
                    ? "translateX(0)"
                    : isHovering
                    ? "translateX(-100%)"
                    : `translateX(-${
                        100 *
                        ((visibleShows.length - index - 1) /
                          visibleShows.length)
                      }%)`,
                  zIndex: visibleShows.length - index,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Image
                  fill
                  className={clsx(
                    "object-cover object-center shadow-black shadow-xl transition-all duration-100",
                    !isHovered &&
                      index + 1 !== visibleShows.length &&
                      "rounded-r-2xl",
                    isHovered && "brightness-[0.3]"
                  )}
                  src={show.cover}
                  alt=""
                />
              </div>
            );
          })}

        {/* Hover Content */}
        {hoveredIndex !== null && (
          <div className="p-2 absolute inset-0 z-10 transition-all duration-300 backdrop-blur-sm pointer-events-none">
            <div
              className={clsx(
                "h-full flex flex-col justify-between items-start",
                date.isBefore(dayjs()) ||
                  !date.isSame(dayjs(selectedMonth), "month")
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              )}
            >
              {/* Title & Genre */}
              <div>
                <div className="font-[family-name:var(--title)] text-primary text-2xl font-semibold w-[80%] line-clamp-2">
                  {shows[hoveredIndex].title}
                </div>
                <div className="font-[family-name:var(--body)] text-md">
                  {shows[hoveredIndex].genre.genreText}
                </div>

                {/* Show's Date */}
                <div className="mt-2">
                  <span>
                    {dayjs(shows[hoveredIndex].date.startDate).format("DD/MM")}
                  </span>
                  <span>{" - "}</span>
                  <span>
                    {dayjs(shows[hoveredIndex].date.endDate).format("DD/MM")}
                  </span>
                </div>
              </div>
              {/* CTA Button */}
              <Button
                type="box"
                className="border-[2px] text-primary"
                onClick={() => {
                  router.push(`/shows/booking/${shows[hoveredIndex].link}`);
                }}
              >
                Đặt vé
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayCard;
