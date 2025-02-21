"use client";

import Title from "@/components/global/Title";
import Image from "next/image";
import MonthSelector from "./components/MonthSeletor";
import Calendar from "./components/Calendar";
import { useState } from "react";
import { Dayjs } from "dayjs";

const CalendarPage = () => {
  const [selectedMonth, setSelectedMonth] = useState<null | Dayjs>(null);

  return (
    <div className="relative">
      <Image
        fill
        src="/calendar-bg.jpg"
        alt="calendar background"
        className="object-cover object-center opacity-20 blur-sm pointer-events-none -z-5"
      />
      <div className="container py-32">
        <div className="px-8">
          <div className="w-full text-center">
            <Title>Lịch Chương Trình</Title>
          </div>
          <MonthSelector setSelectedMonth={setSelectedMonth} />
          <Calendar selectedMonth={selectedMonth} />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
