"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/global/Button";
import { ShowMetadata } from "@/types/extra";
import dayjs from "dayjs";
import "dayjs/locale/vi";

interface HighlightProps {
  highlightShows: ShowMetadata[];
}

const HighlightSlick: React.FC<HighlightProps> = ({ highlightShows }) => {
  dayjs.locale("vi");

  return (
    <div className="flex space-x-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-4 pb-12"
      >
        {highlightShows.map((highlight) => (
          <SwiperSlide key={highlight.id}>
            <a href="#" className="group w-full">
              <figure className="absolute inset-0 z-0 shadow-2xl shadow-black group-hover:shadow-xl transition-all">
                <Image
                  alt={highlight.title}
                  src={highlight.cover}
                  layout="fill"
                  className="object-cover object-center"
                />
              </figure>
              <div className="h-[700px] relative overflow-hidden">
                <div className="h-full flex-col relative justify-center opacity-0 top-full transition-all group-hover:opacity-100 group-hover:top-[60%] bg-[linear-gradient(180deg,_rgba(24,22,22,0)_0%,_rgba(24,22,22,1)_2%)] duration-300">
                  {/* border */}
                  <div className="h-4 bg-gradient-to-b from-transparent to-secondary"></div>

                  {/* date */}
                  <div className="flex flex-col px-6">
                    <div className="flex">
                      <h5 className="">{dayjs(highlight.date).format("D")}</h5>
                      <div className="flex flex-col ">
                        <div>{dayjs(highlight.date).format("MMMM")}</div>
                        <div>{dayjs(highlight.date).format("dddd")}</div>
                        <div>{dayjs(highlight.date).format("YYYY")}</div>
                      </div>
                    </div>

                    <div className="card-body ">
                      <p>
                        Discover the unique benefits and features we offer. Dive
                        deeper to learn how our solutions can enhance your
                        experience and meet your needs effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col">
        <Button type="box">Hi</Button>
      </div>
    </div>
  );
};

export default HighlightSlick;
