"use client";

import dayjs, { Dayjs } from "dayjs";
import { memo, useEffect, useMemo, useState } from "react";
import GenreFilter, { Filter } from "./calendarComponents/GenreFilter";
import _ from "lodash";
import "dayjs/locale/vi";
import DayCard from "./calendarComponents/DayCard";
import shows from "@/samples/shows";
import isBetween from "dayjs/plugin/isBetween";
import Button from "@/components/global/Button";

dayjs.extend(isBetween);

export interface CalendarProps {
  selectedMonth: null | Dayjs;
}

const Calendar: React.FC<CalendarProps> = ({ selectedMonth }) => {
  dayjs.locale("vi");

  const [activeGenre, setActiveGenre] = useState<Filter["genre"]>("all");

  const weekDays = [
    { id: 0, text: "Thứ hai" },
    { id: 1, text: "Thứ ba" },
    { id: 2, text: "Thứ tư" },
    { id: 3, text: "Thứ năm" },
    { id: 4, text: "Thứ sáu" },
    { id: 5, text: "Thứ bảy" },
    { id: 6, text: "Chủ nhật" },
  ];

  const [filteredShows, setFilteredShows] = useState(shows);

  useEffect(() => {
    if (activeGenre === "all") {
      setFilteredShows(shows);
    } else {
      setFilteredShows(
        _.filter(shows, (show) => show.genre.genreId === activeGenre)
      );
    }
  }, [activeGenre]);

  // optimize days calculation
  const calendarDays = useMemo(() => {
    if (!selectedMonth) return [];

    const startOfMonth = dayjs(selectedMonth).startOf("month");
    const startDayOfWeek = (startOfMonth.day() + 6) % 7;

    const calendarDays = _.times(42, (index) => {
      const date = startOfMonth
        .subtract(startDayOfWeek, "day")
        .add(index, "day");

      return {
        id: index,
        date,
        isCurrentMonth: date.month() === startOfMonth.month(),
      };
    });

    return _.chunk(calendarDays, 7);
  }, [selectedMonth]);

  return (
    <>
      {/* Genre Filter */}
      <div className="w-full flex justify-center border-t-2 border-opacity-35 border-white py-8 mt-8">
        <GenreFilter
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      </div>

      {/* Calendar */}
      <div>
        <table className="table-fixed w-full font-[family-name:var(--body)] text-white border-collapse">
          <thead>
            <tr>
              {weekDays.map((date) => (
                <td
                  key={date.id}
                  className="font-light text-[20px] text-right border border-white border-opacity-35 px-2 py-2 select-none"
                >
                  {date.text}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarDays.map((week, index) => (
              <tr key={index}>
                {week.map((day) => (
                  <td
                    key={day.id}
                    className="border border-white border-opacity-35"
                  >
                    <DayCard
                      shows={_.filter(filteredShows, (show) =>
                        dayjs(day.date).isBetween(
                          dayjs(show.date.startDate),
                          dayjs(show.date.endDate),
                          "day",
                          "[]"
                        )
                      )}
                      date={day.date}
                      selectedMonth={selectedMonth}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Event Button*/}
        <div className="flex w-full justify-center mt-16">
          <div className="flex flex-col max-w-[945px] font-[family-name:var(--body)]">
            <div className="text-center py-8 px-2 border-t-[1px] border-white border-opacity-35 text-white font-light tracking-wide">
              Nếu bạn cần thông tin về một trong những vở kịch của chúng tôi,
              hãy gọi thư ký nhà hát của chúng tôi, số điện thoại miễn phí,
              821-891-4391. Dịch vụ khách hàng có sẵn từ 9:00 đến 17:00. Từ Thứ
              Hai đến Thứ Sáu và 10:00 đến 18:00.
            </div>
            <Button type="box" className="max-w-fit px-20 py-3">
              <div className="capitalize text-2xl font-medium">LIÊN HỆ NGAY</div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Calendar);
