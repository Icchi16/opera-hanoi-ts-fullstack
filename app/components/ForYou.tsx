"use client";

import Button from "@/components/global/Button";
import { ShowMetadata } from "@/types/extra";
import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";

interface ForYouItem {
  id: number;
  name: string;
  link: string;
}

interface ForYouProps {
  forYouShows: ShowMetadata[];
}

const ForYou: React.FC<ForYouProps> = ({ forYouShows }) => {
  const forYouMenu: ForYouItem[] = [
    { id: 0, name: "giao hưởng", link: "/asf" },
    { id: 1, name: "ballet", link: "/asf" },
    { id: 2, name: "kịch", link: "/asf" },
    { id: 3, name: "ca nhạc", link: "/sdg" },
    { id: 4, name: "liveshow", link: "/dfgdf" },
    { id: 5, name: "xiếc", link: "/hhfg" },
    { id: 6, name: "sự kiện", link: "/retter" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-between py-4">
      {/* menu */}
      <div className="flex w-[400px]">
        <ul
          className="[&_li>*]:transition-all hover:[&_li>*]:font-black no-flash flex flex-col space-y-3"
          id="forYouMenu"
        >
          {forYouMenu.map((menu, index) => (
            <li key={menu.id}>
              <button
                className={clsx(
                  "uppercase cursor-pointer text-[24px]",
                  index === activeIndex && "active"
                )}
                onClick={() => handleMenuClick(index)}
              >
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* card */}
      <div className="flex flex-col justify-between w-full">
        {forYouShows.map((show) => (
          <a id="forYouCard" key={show.id} href="#" className="">
            <div className="mb-12 bg-cardBg shadow-black shadow-lg hover:shadow-2xl hover:shadow-black transition-shadow">
              <div className="flex">
                {/* Cover */}
                <div className="relative min-w-[383px] min-h-[526px]">
                  <Image
                    alt={show.title}
                    layout="fill"
                    src={show.cover}
                    className="object-cover object-center"
                  />
                </div>
                {/* Info */}
                <div className="flex flex-col px-12 py-13 w-full self-stretch space-y-4 justify-between">
                  <div className="self-end font-[family-name:var(--title)] italic text-3xl">
                    {dayjs(show.date.startDate).format("DD MMMM")}
                  </div>
                  <div className="text-white line-clamp-2 text-4xl font-[family-name:var(--title)]">
                    {show.title} - {show.shortDesc}
                  </div>
                  <div className="text-white line-clamp-4">
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                    sdasdasjkhkajsdfh askdjhf lksed sdlkfjha skjfdh kasl
                  </div>
                  <Button
                    type="arrow"
                    className="flex space-x-3 w-fit italic font-[family-name:var(--cta)] text-5xl hover:text-white transition-all duration-300"
                  >
                    <div>Đặt Vé</div>
                    {/* <div>
                      <ArrowRightIcon className="w-16 h-16 relative bottom-1" />
                    </div> */}
                  </Button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ForYou;
