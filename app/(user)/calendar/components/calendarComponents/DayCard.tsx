"use client";

import { ShowMetadata } from "@/types/extra";
import clsx from "clsx";
import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import { CalendarProps } from "../Calendar";

interface DayCardProps {
  date: Dayjs;
  shows: ShowMetadata[];
  selectedMonth: CalendarProps["selectedMonth"];
}

const DayCard: React.FC<DayCardProps> = ({ date, shows, selectedMonth }) => {
  return (
    <div className="h-64 overflow-hidden relative">
      {/* test info */}
      {/* {dayjs(date).format("DD/MM/YY")} */}

      {/* date om top right conner */}
      <div className="absolute right-2 top-3 mix-blend-difference leading-none z-20">
        {dayjs(date).format("DD")}
      </div>

      {/* main box data */}
      <div
        className={clsx(
          "relative h-full",
          (date.isBefore(dayjs()) ||
            !date.isSame(dayjs(selectedMonth), "month")) &&
            "opacity-35"
        )}
      >
        {shows ? (
          // only 1 show
          shows.length === 1 ? (
            <Image
              fill
              className="object-cover object-center pointer-events-none"
              src={shows[0].cover}
              alt=""
            />
          ) : (
            // stack multi shows
            shows.map((show, index) => (
              <div
                key={show.id}
                className="relative h-full"
                style={{
                  left: `${
                    (index * ((index + 1) * 100)) / shows.length -
                    ((index + 1) * 100) / shows.length
                  }%`, // Adjust for stacking effect
                  zIndex: shows.length - index - 1, // Keep last one on top
                }}
              >
                <Image
                  fill
                  className="object-cover object-center shadow-black shadow-lg pointer-events-none"
                  src={show.cover}
                  alt=""
                />
              </div>
            ))
          )
        ) : null}

        {/* main content */}
        <div className="p-2 absolute-"></div>
      </div>
    </div>
  );
};

export default DayCard;
