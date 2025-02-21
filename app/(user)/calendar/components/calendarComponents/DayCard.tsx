import shows from "@/samples/shows";
import { ShowMetadata } from "@/types/extra";
import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";

interface DayCardProps {
  date: Dayjs;
  shows: ShowMetadata[];
}

const DayCard: React.FC<DayCardProps> = ({ date, shows }) => {
  return (
    <div className="h-64">
      {!shows ? null : (
        <Image
          fill
          className="object-cover object-center"
          src={shows[0].cover}
          alt=""
        />
      )}
      <div className="absolute right-2 top-3 mix-blend-difference leading-none z-20">
        {dayjs(date).format("DD")}
      </div>
      <div className="p-2 "></div>
    </div>
  );
};

export default DayCard;
