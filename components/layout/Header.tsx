"use client";

import CartIcon from "../svgs/icons/CartIcon";
import SearchIcon from "../svgs/icons/SearchIcon";
import Logo from "../svgs/Logo";
import UserIcon from "../svgs/icons/UserIcon";
import Button from "../global/Button";
import ModalFrame from "../modal/ModalFrame";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  // handle key Esc
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  //  handle animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // NavMenu array
  const NavMenuArr = [
    {
      id: 0,
      text: "Sự kiện",
      href: "/events",
    },
    {
      id: 1,
      text: "Lịch trình",
      href: "/calendar",
    },
    {
      id: 2,
      text: "Khám phá",
      href: "/news",
    },
    {
      id: 3,
      text: "Tin tức",
      href: "/news",
    },
    {
      id: 4,
      text: "Giới thiệu",
      href: "/about",
    },
  ];

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 bg-[#2b2928] flex items-center font-[family-name:var(--body)] transition-all duration-200 z-[100]",
        isScrolled ? "min-h-24 shadow-black shadow-lg" : "min-h-32"
      )}
    >
      <nav className="navbar max-w-[1440px] md:px-8 mx-auto bg-transparent flex justify-between items-center">
        <Link href="/" className="w-[181px]">
          <Logo
            height={isScrolled ? 50 : 80}
            className="fill-white transition-all duration-200"
          />
        </Link>
        <div className="flex">
          <ul className="menu md:menu-horizontal bg-transparent rounded-none [&_li>*]:rounded-none [&_li>*]:text-white hover:[&_li>*]:bg-transparent w-[521px] flex justify-between">
            {NavMenuArr.map((menu) => (
              <li key={menu.id} className="link link-animated">
                <Link href={menu.href}>{menu.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center bg-transparent rounded-none space-x-5">
            <a href="#">
              <SearchIcon className="stroke-white " />
            </a>
            <a href="#">
              <CartIcon className="stroke-white" />
            </a>
            <Button
              type="icon"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <UserIcon className="stroke-white" />
            </Button>
          </div>
          <ul className="flex space-x-1 text-white text-sm">
            <li>
              <a href="#">VN</a>
            </li>
            <li>
              <div className="divider mx-0 w-2 h-full divider-horizontal divider-white"></div>
            </li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </div>

        <ModalFrame isOpen={isOpen} onClose={handleClose} />
      </nav>
    </header>
  );
};

export default Header;
