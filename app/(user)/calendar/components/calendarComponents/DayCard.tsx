"use client";

import { ShowMetadata } from "@/types/extra";
import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import { CalendarProps } from "../Calendar";
import { useEffect, useRef, useState } from "react";
import _, { escape } from "lodash";
import Button from "@/components/global/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

interface DayCardProps {
  date: Dayjs;
  shows: ShowMetadata[];
  selectedMonth: CalendarProps["selectedMonth"];
}

const DayCard: React.FC<DayCardProps> = ({ date, shows, selectedMonth }) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const MAX_STACKED_SHOWS = 3;
  const today = dayjs().startOf("day");
  const isPast = date.isBefore(today, "day");
  const isOutOfMonth = !date.isSame(dayjs(selectedMonth), "month");
  const isDisabled = isPast || isOutOfMonth;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isHoveredOnBox, setIsHoveredOnBox] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const visibleShows = _.slice(shows, 0, MAX_STACKED_SHOWS);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setSelectedIndex(null);
      }
    }

    if (selectedIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedIndex]);

  useEffect(() => {
    console.log("Updated hoveredIndex:", hoveredIndex);
  }, [hoveredIndex]);

  return (
    <div className="h-64 overflow-hidden relative" ref={cardRef}>
      {/* Main Box */}
      <div
        className={clsx(
          "relative h-full transition-opacity",
          isDisabled
            ? "opacity-35 cursor-not-allowed pointer-events-none"
            : "cursor-pointer"
        )}
      >
        {/* Date on Top Right Corner */}
        <div
          className={clsx(
            "absolute right-2 top-3 mix-blend-difference leading-none z-20 pointer-events-none transition-opacity duration-300",
            selectedIndex !== null && "opacity-0"
          )}
        >
          {date.format("DD")}
        </div>

        {/* Cover Images */}
        {visibleShows.map((show, index) => {
          const isSelected = selectedIndex === index;
          const isHovered = hoveredIndex === index;
          const showsLength = visibleShows.length;

          const baseOffset = 100 * ((showsLength - index - 1) / showsLength);

          const hoverOffset = (() => {
            const dynamicCover = { min: 10, max: 90 };
            const staticCover = 0;

            if (hoveredIndex === null) {
              return staticCover;
            }
            if (index === showsLength - 1) {
              return staticCover;
            }
            if (hoveredIndex === index) {
              return dynamicCover.min + (showsLength - 2 - index) * 10;
            }
            if (hoveredIndex !== index) {
              if (index > hoveredIndex) {
                return dynamicCover.min;
              } else return dynamicCover.max - index * 10;
            } else return 0;
          })();

          return (
            <div
              key={show.id}
              className="absolute h-full w-full transition-transform duration-300"
              style={{
                transform: isSelected
                  ? "translateX(0)"
                  : selectedIndex
                  ? "translateX(-100%)"
                  : isHoveredOnBox
                  ? `translateX(-${hoverOffset}%)`
                  : `translateX(-${baseOffset}%)`,
                zIndex: visibleShows.length - index,
              }}
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setIsHoveredOnBox(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsHoveredOnBox(false);
              }}
            >
              <Image
                fill
                className={clsx(
                  "object-cover object-center shadow-black shadow-2xl transition-all duration-100",
                  !isHovered &&
                    !isSelected &&
                    index + 1 !== visibleShows.length &&
                    "rounded-r-2xl",
                  isSelected && "brightness-[0.3]", // Ensure selected card gets dimmed
                  isHovered && !isSelected && "brightness-[1.2]", // Hover effect
                  !isHovered &&
                    !isSelected &&
                    isHoveredOnBox &&
                    "brightness-[0.5]" // Dim non-hovered cards when one is hovered
                )}
                src={show.cover}
                alt=""
              />
            </div>
          );
        })}
        {/* Hover Content */}
        <div
          className={clsx(
            "absolute inset-0 z-10 transition-all duration-300 backdrop-blur-sm pointer-events-none delay-100",
            selectedIndex !== null
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
        >
          {selectedIndex !== null && (
            <div
              className={clsx(
                "p-2 h-full flex flex-col justify-between items-start",
                isDisabled ? "pointer-events-none" : "pointer-events-auto"
              )}
            >
              {/* Title & Genre */}
              <>
                <div>
                  <div className="font-[family-name:var(--title)] text-primary text-2xl font-semibold w-[80%] line-clamp-2">
                    <Link href={`shows/${shows[selectedIndex].link}`}>
                      {shows[selectedIndex].title}
                    </Link>
                  </div>
                  <div className="font-[family-name:var(--body)] text-md">
                    {shows[selectedIndex].genre.genreText}
                  </div>
                  {/* Show Date */}
                  <div className="mt-2">
                    {dayjs(shows[selectedIndex].date.startDate).format("DD/MM")}{" "}
                    - {dayjs(shows[selectedIndex].date.endDate).format("DD/MM")}
                  </div>
                </div>
                {/* CTA Button */}
                <div className="flex space-x-2">
                  <Button
                    type="box"
                    className="border-[2px] text-primary"
                    onClick={() =>
                      router.push(`/shows/booking/${shows[selectedIndex].link}`)
                    }
                    isDisabled={isDisabled}
                  >
                    Đặt vé
                  </Button>
                  <Button className="px-3" type="box" onClick={() => setSelectedIndex(null)}>
                    <Icon icon="teenyicons:down-outline" />
                  </Button>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayCard;
