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
  const today = dayjs().startOf("day");
  const isPast = date.isBefore(today, "day");
  const isOutOfMonth = !date.isSame(dayjs(selectedMonth), "month");
  const isDisabled = isPast || isOutOfMonth;

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
      {/* Main Box */}
      <div
        className={clsx(
          "relative h-full transition-opacity",
          isDisabled && "opacity-35 cursor-not-allowed"
        )}
      >
        {/* Date on Top Right Corner */}
        <div
          className={clsx(
            "absolute right-2 top-3 mix-blend-difference leading-none z-20 pointer-events-none transition-opacity duration-300",
            hoveredIndex !== null && "opacity-0"
          )}
        >
          {date.format("DD")}
        </div>

        {/* Cover Images */}
        {visibleShows.map((show, index) => {
          const isHovered = hoveredIndex === index;
          const baseOffset = 100 * ((visibleShows.length - index - 1) / visibleShows.length);

          return (
            <div
              key={show.id}
              className="absolute h-full w-full transition-transform duration-300"
              style={{
                transform: isHovered
                  ? "translateX(0)"
                  : isHovering
                  ? "translateX(-100%)"
                  : `translateX(-${baseOffset}%)`,
                zIndex: visibleShows.length - index,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Image
                fill
                className={clsx(
                  "object-cover object-center shadow-black shadow-xl transition-all duration-100",
                  !isHovered && index + 1 !== visibleShows.length && "rounded-r-2xl",
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
          <div className="p-2 absolute inset-0 z-10 transition-all duration-300 backdrop-blur-sm">
            <div
              className={clsx(
                "h-full flex flex-col justify-between items-start",
                isDisabled ? "pointer-events-none" : "pointer-events-auto"
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

                {/* Show Date */}
                <div className="mt-2">
                  {dayjs(shows[hoveredIndex].date.startDate).format("DD/MM")} -{" "}
                  {dayjs(shows[hoveredIndex].date.endDate).format("DD/MM")}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                type="box"
                className="border-[2px] text-primary"
                onClick={() =>
                  router.push(`/shows/booking/${shows[hoveredIndex].link}`)
                }
                isDisabled={isDisabled}
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
