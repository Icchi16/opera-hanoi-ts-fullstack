"use client";

import CartIcon from "../svgs/icons/CartIcon";
import SearchIcon from "../svgs/icons/SearchIcon";
import Logo from "../svgs/Logo";
import UserIcon from "../svgs/icons/UserIcon";
import Button from "../global/Button";
import ModalFrame from "../modal/ModalFrame";
import { useEffect, useState } from "react";

const Header: React.FC<HTMLDivElement> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

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

  return (
    <header className="fixed inset-x-0 top-0 bg-[#2b2928] min-h-32 flex items-center z-10 font-[family-name:var(--body)]">
      <nav className="navbar max-w-[1440px] md:px-8 mx-auto bg-transparent flex justify-between items-center">
        <a href="">
          <Logo width={182} height={80} className="fill-white" />
        </a>
        <div className="flex">
          <ul className="menu md:menu-horizontal bg-transparent rounded-none [&_li>*]:rounded-none [&_li>*]:text-white hover:[&_li>*]:bg-transparent w-[521px] flex justify-between">
            <li className="link link-animated ">
              <a href="#/">Sự kiện</a>
            </li>
            <li className="link link-animated">
              <a href="#">Lịch tình</a>
            </li>
            <li className="link link-animated">
              <a href="#">Khám phá </a>
            </li>
            <li className="link link-animated">
              <a href="#">Tin tức</a>
            </li>
            <li className="link link-animated">
              <a href="#">Giới thiệu</a>
            </li>
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
