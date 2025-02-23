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
    <div className="h-64">
      {/* test info */}

      {shows.map((show) => (
        <div key={show.id} className="relative z-50">
          {show.title}
        </div>
      ))}
      {dayjs(date).format("DD/MM/YY")}

      {/* date om top right conner */}
      <div className="absolute right-2 top-3 mix-blend-difference leading-none z-20">
        {dayjs(date).format("DD")}
      </div>

      {/* main box data */}
      <div
        className={clsx(
          "",
          (date.isBefore(dayjs()) ||
            !date.isSame(dayjs(selectedMonth), "month")) &&
            "opacity-35"
        )}
      >
        {shows && shows.length === 1 ? (
          <Image
            fill
            className="object-cover object-center"
            src={shows[0].cover}
            alt=""
          />
        ) : null}
        <div className="p-2 "></div>
      </div>
    </div>
  );
};

export default DayCard;
