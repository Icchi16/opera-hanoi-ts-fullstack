"use client";

import dayjs, { Dayjs } from "dayjs";
import { memo, useMemo, useState } from "react";
import GenreFilter from "./calendarComponents/GenreFilter";
import { Genre } from "@/types/extra";
import _ from "lodash";
import "dayjs/locale/vi";
import DayCard from "./calendarComponents/DayCard";
import shows from "@/samples/shows";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export interface CalendarProps {
  selectedMonth: null | Dayjs;
}

const Calendar: React.FC<CalendarProps> = ({ selectedMonth }) => {
  dayjs.locale("vi");

  const [activeGenre, setActiveGenre] = useState<Genre>("all");

  const weekDays = [
    { id: 0, text: "Thứ hai" },
    { id: 1, text: "Thứ ba" },
    { id: 2, text: "Thứ tư" },
    { id: 3, text: "Thứ năm" },
    { id: 4, text: "Thứ sáu" },
    { id: 5, text: "Thứ bảy" },
    { id: 6, text: "Chủ nhật" },
  ];

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
                  className="font-light text-[20px] text-right border border-white border-opacity-35 px-2 py-2"
                >
                  {date.text}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarDays.map(
              (week, index) => (
                // _.some(week, (day) => day.isCurrentMonth) ? (
                <tr key={index}>
                  {week.map((day) => (
                    <td
                      key={day.id}
                      className="border border-white border-opacity-35"
                    >
                      <DayCard
                        shows={_.filter(shows, (show) =>
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

                      {/* {dayjs(day.date).date()} */}
                    </td>
                  ))}
                </tr>
              )
              // ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default memo(Calendar);
