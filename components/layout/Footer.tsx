"use client";

import React from "react";
import { Icon } from "@iconify-icon/react";
import { Icon as IconProp } from "@/types/extra";

const Footer: React.FC<HTMLDivElement> = () => {
  const icons: IconProp[] = [
    { id: 0, href: "#", dom: "fa:facebook" },
    { id: 1, href: "#", dom: "fa6-brands:x-twitter" },
    { id: 2, href: "#", dom: "uil:youtube" },
    { id: 3, href: "#", dom: "ic:sharp-tiktok" },
    { id: 4, href: "#", dom: "ant-design:instagram-filled" },
    { id: 5, href: "#", dom: "entypo-social:tripadvisor" },
  ];

  return (
    <footer className="bg-primary">
      <div className="flex text-secondary max-w-[1440px] mx-auto px-8 w-full justify-between py-8">
        <div className="flex ">
          <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-3 h-fit">
            {icons.map((icon) => (
              <a key={icon.id} href={icon.href}>
                <Icon icon={icon.dom} height={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col font-semibold space tracking-wide space-y-3">
          <div className="flex justify-evenly">
            <a href="">Giới thiệu</a>
            <a href="">Liên hệ</a>
            <a href="">Việc làm</a>
            <a href="">Khám phá</a>
          </div>
          <div className="flex justify-between space-x-12">
            <a href="">Giới thiệu</a>
            <a href="">Liên hệ</a>
            <a href="">Việc làm</a>
            <a href="">Khám phá</a>
            <a href="">Khám phá</a>
          </div>
          <div className="flex justify-between ">
            <a href="">Giới thiệu</a>
            <a href="">Liên hệ</a>
            <a href="">Việc làm</a>
            <a href="">Khám phá</a>
            <a href="">Khám phá</a>
          </div>
        </div>
        <div className="flex flex-col items-center text-xs">
          <a href="">Điều khoản sử dụng</a>
          <a href="">Quyền riêng tư</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
