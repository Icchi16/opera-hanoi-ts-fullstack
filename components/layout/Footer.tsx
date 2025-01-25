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

  const quickLinks = [
    {
      id: 0,
      text: "Giới thiệu",
      href: "#",
    },
    {
      id: 1,
      text: "Liên hệ",
      href: "#",
    },
    {
      id: 2,
      text: "Việc làm",
      href: "#",
    },
    {
      id: 3,
      text: "Khám phá",
      href: "#",
    },
    {
      id: 4,
      text: "Phần thưởng",
      href: "#",
    },
    {
      id: 5,
      text: "Membership",
      href: "#",
    },
    {
      id: 6,
      text: "Hợp tác",
      href: "#",
    },
    {
      id: 7,
      text: "Tin tức",
      href: "#",
    },

    {
      id: 8,
      text: "Voucher",
      href: "#",
    },
    {
      id: 9,
      text: "Tour tham quan",
      href: "#",
    },
    {
      id: 10,
      text: "Thuê địa điểm",
      href: "#",
    },
    {
      id: 11,
      text: "Phản hồi",
      href: "#",
    },
    {
      id: 12,
      text: "Media",
      href: "#",
    },
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
          <div className="grid grid-cols-4 justify-items-center">
            {quickLinks.map((link, index) =>
              index < 4 ? (
                <a href={link.href} key={link.id}>
                  {link.text}
                </a>
              ) : null
            )}
          </div>
          <div className="grid grid-cols-4 justify-items-center">
            {quickLinks.map((link, index) =>
              index >= 4 && index < 8 ? (
                <a href={link.href} key={link.id}>
                  {link.text}
                </a>
              ) : null
            )}
          </div>
          <div className="grid grid-cols-5 justify-items-center gap-x-8">
            {quickLinks.map((link, index) =>
              index >= 8 && index < 14 ? (
                <a href={link.href} key={link.id}>
                  {link.text}
                </a>
              ) : null
            )}
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
