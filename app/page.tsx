// import React, { useEffect } from "react";
// import Waves from "node-waves";
import Title from "@/components/global/Title";
import UserModal from "@/components/modal/UserModal";
import HeroSlick from "./components/HeroSlick";
import { heroShows, highlightShows } from "@/samples/shows";
import HighlightSlick from "./components/HighlightSlick";
import ForYou from "./components/ForYou";

export default function Home() {
  return (
    <div className="font-[family-name:var(--body)] text-main ">
      <UserModal isOpen={false} />
      <main className="">
        {/* hero */}
        <section id="hero" className="h-screen">
          <HeroSlick heroShows={heroShows} />
        </section>

        {/* Highlight */}
        <section id="highlight" className="bg-bg1 m-0 py-1">
          <div className="container">
            <Title>Nổi bật</Title>
            <HighlightSlick highlightShows={highlightShows} />
          </div>
        </section>

        {/* For You */}
        <section id="forU" className="bg-bg1 m-0 py-1">
          <div className="container">
            <Title>Dành cho bạn</Title>
            <div className="px-8">
              <ForYou />
            </div>
          </div>
        </section>

        {/* AboutUs */}
        <section id="aboutUs" className="bg-bg1 m-0 p-1">
          <div className="container">aboutUs</div>
        </section>

        {/* News */}
        <section id="news" className="bg-bg1 m-0 p-1">
          <div className="container">
            <Title>Tin tức</Title>
          </div>

          {/* Partners */}
          <section id="partners" className="bg-bg1 m-0 p-1">
            <div className="container">
              <div className="px-2">partners</div>
            </div>
          </section>

          {/* Subscribe */}
          <section id="subscribe" className="bg-bg1 m-0 p-1">
            <div className="container">subscribe</div>
          </section>
        </section>
      </main>
    </div>
  );
}
