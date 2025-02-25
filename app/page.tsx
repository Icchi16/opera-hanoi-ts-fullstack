// import React, { useEffect } from "react";
// import Waves from "node-waves";
import Title from "@/components/global/Title";
import HeroSwiper from "./components/HeroSwiper";
import { forYouShows, heroShows, highlightShows } from "@/samples/shows";
import ForYou from "./components/ForYou";
import Button from "@/components/global/Button";
import ArrowRightIcon from "@/components/svgs/icons/ArrowRightIcon";
import AboutUsSwiper from "./components/AboutUsSwiper";
import NewsSlick from "./components/NewsSwiper";
import news from "@/samples/news";
import partners from "@/samples/partners";
import Image from "next/image";
import Link from "next/link";
import HighlightSwiper from "./components/HighlightSwiper";

export default function Home() {
  return (
    <div className="font-[family-name:var(--body)] text-main ">
      <main className="">
        {/* hero */}
        <section id="hero" className="h-screen">
          <HeroSwiper heroShows={heroShows} />
        </section>

        {/* Highlight */}
        <section id="highlight" className="bg-bg1 m-0 pb-24 pt-6">
          <div className="container">
            <Title>Nổi bật</Title>
            <HighlightSwiper highlightShows={highlightShows} />
            <div className="flex justify-center mt-8">
              <Link href="/calendar">
                <Button type="box" className="px-10 py-3 uppercase">
                  Lịch chương trình
                  <span>
                    <ArrowRightIcon className="h-8 w-8 stoke-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* For You */}
        <section id="forU" className="bg-bg2 m-0 pb-24 pt-6">
          <div className="container">
            <Title>Dành cho bạn</Title>
            <div className="px-8">
              <ForYou forYouShows={forYouShows} />
            </div>
          </div>
        </section>

        {/* AboutUs */}
        <section id="aboutUs" className="bg-bg1 pb-24 mt-24 pt-6">
          <div className="container">
            <div className="grid grid-cols-2 h-[700px] gap-32 mt-24">
              <AboutUsSwiper />
              <div className="flex flex-col w-full space-y-12 pr-8">
                <div className="text-primary text-3xl font-[family-name:var(--title)]">
                  Một nhà hát hơn 100 tuổi giữa lòng Hà Nội
                </div>
                <div className="text-white leading-8">
                  Được mệnh danh là “Opéra Garnier ở Paris” thu nhỏ giữa lòng
                  Thủ đô, Nhà hát Lớn Hà Nội là địa điểm được đông đảo du khách
                  ưa thích ghé thăm.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News */}
        <section id="news" className="bg-bg2 m-0 pb-24 pt-6">
          <div className="container">
            <Title>Tin tức</Title>
            <NewsSlick news={news} />
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="bg-bg2 pb-24 pt-6">
          <div className="container">
            <div className="">
              <div className="flex flex-col space-y-[54px]">
                <div className="flex justify-center font-[family-name:var(--title)] text-3xl">
                  Nhà hát lớn Hà Nội tự hào là ngôi nhà của:
                </div>
                <div className="flex w-full justify-between">
                  {partners.map((partner) => (
                    <div
                      key={partner.id}
                      className="relative min-h-[240px] min-w-[25%]"
                    >
                      <Image
                        alt={partner.alt}
                        src={partner.logo}
                        fill
                        className="object-cover object-center p-8"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section id="subscribe" className="bg-white m-0 p-1">
          <div className="container">
            <div className="px-8 py-16">
              <div className="flex justify-start w-full space-x-12">
                <div className="relative min-w-[472px] min-h-full">
                  <Image
                    alt="subscribe"
                    fill
                    className="object-cover object-center"
                    src="/show1.jpg"
                  />
                </div>
                <div className="flex flex-col text-secondary space-y-8 items-start">
                  <div className="text-4xl font-bold">
                    Đăng ký nhận tin từ Nhà Hát Lớn Hà Nội
                  </div>
                  <ul className=" list-disc pl-5 space-y-2 text-lg">
                    <li>Độc quyền nhận các tin tức về các sự kiện sắp tới</li>
                    <li>
                      Ưu đãi đặc biệt cho một loạt các sự kiện và trải nghiệm
                    </li>
                    <li>
                      Tin tức và câu chuyện mới nhất từ ​​hậu trường và hơn thế
                      nữa
                    </li>
                  </ul>
                  <Button
                    type="box"
                    className="!w-fit text-xl font-semibold !h-fit px-10 py-3"
                  >
                    Đăng ký
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
