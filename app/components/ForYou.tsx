import Button from "@/components/global/Button";
import { ShowMetadata } from "@/types/extra";
import clsx from "clsx";
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
    { id: 0, name: "giao hưởng", link: "#" },
    { id: 1, name: "ballet", link: "#" },
    { id: 2, name: "kịch", link: "#" },
    { id: 3, name: "ca nhạc", link: "#" },
    { id: 4, name: "liveshow", link: "#" },
    { id: 5, name: "xiếc", link: "#" },
    { id: 6, name: "sự kiện", link: "#" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-between">
      {/* menu */}
      <div className="flex w-[300px]">
        <ul
          className="[&_li>*]:transition-all hover:[&_li>*]:font-black no-flash"
          id="forYouMenu"
        >
          {forYouMenu.map((menu, index) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className={clsx("capitalize", index == activeIndex && "active")}
              >
                <button onClick={() => handleMenuClick(index)}>
                  {menu.name}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* card */}
      <div className="flex flex-wrap">
        {forYouShows.map((show) => (
          <div id="forYouCard" key={show.id}>
            <div className="flex">
              /
              <div className="">
                <Image />
              </div>
              <div className="flex">
                <div>{}</div>
                <div>{show.title}</div>
                <div>{show.shortDesc}</div>
                <Button type="arrow">Book Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYou;
