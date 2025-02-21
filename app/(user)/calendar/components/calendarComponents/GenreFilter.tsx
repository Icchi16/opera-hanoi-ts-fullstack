"use client";

import { Genre } from "@/types/extra";
import clsx from "clsx";
import { memo, useEffect } from "react";

interface GenreFilterProps {
  activeGenre: Genre;
  setActiveGenre: (genre: Genre) => void;
}

interface Filter {
  id: number;
  text: string;
  genre: Genre;
}

export const filterArr: Filter[] = [
  { id: 0, text: "Tất cả", genre: "all" },
  { id: 1, text: "Giao hưởng", genre: "orchestra" },
  { id: 2, text: "Ballet", genre: "ballet" },
  { id: 3, text: "Kịch", genre: "play" },
  { id: 4, text: "Ca nhạc", genre: "music" },
  { id: 5, text: "Xiếc", genre: "circus" },
  { id: 6, text: "Liveshow", genre: "live-show" },
  { id: 7, text: "Sự kiện", genre: "event" },
];

const GenreFilter: React.FC<GenreFilterProps> = ({
  activeGenre,
  setActiveGenre,
}) => {
  useEffect(() => {
    console.log("just rendered");
  });

  return (
    <div className="flex space-x-9">
      {filterArr.map((genre) => (
        <div key={genre.id}>
          <div className="text-2xl font-[family-name:var(--title)] text-white relative">
            <div
              className={clsx(
                "cursor-pointer duration-300 transition-all absolute inset-0 z-20 px-2 text-center",
                genre.genre === activeGenre ? "opacity-100 font-medium" : "opacity-35"
              )}
              onClick={() => setActiveGenre(genre.genre)}
            >
              {genre.text}
            </div>
            <div className="relative opacity-0 font-medium -z-5 px-2 text-center">{genre.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(GenreFilter);
