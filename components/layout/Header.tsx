"use client";

import CartIcon from "../svgs/icons/CartIcon";
import SearchIcon from "../svgs/icons/SearchIcon";
import Logo from "../svgs/Logo";
import UserIcon from "../svgs/icons/UserIcon";
import UserModal from "../modal/UserModal";
import Button from "../global/Button";

const Header: React.FC<HTMLDivElement> = () => {
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
          <ul className="flex bg-transparent rounded-none space-x-5">
            <li>
              <a href="#">
                <SearchIcon className="stroke-white " />
              </a>
            </li>
            <li>
              <a href="#">
                <CartIcon className="stroke-white" />
              </a>
            </li>
            <li>
              <Button
                type="icon"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="overlay-end-example"
                data-overlay="#overlay-end-example"
              >
                <UserIcon className="stroke-white" />
              </Button>
            </li>
          </ul>
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
        <div
          id="overlay-end-example"
          className="overlay overlay-open:-translate-x-10 drawer drawer-end !max-w-[414px] hidden"
          role="dialog"
          tabIndex={-1}
        >
          <UserModal isOpen={true} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
