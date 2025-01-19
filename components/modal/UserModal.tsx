"use client";

import { useEffect, useState } from "react";
import Button from "../global/Button";
import ArrowLeft from "../svgs/icons/ArrowLeftIcon";
import CrossIcon from "../svgs/icons/CrossIcon";
import Signin from "./SignInmodal";
import Signup from "./SignUp";
import UserPanel from "./UserPanel";
import clsx from "clsx";

interface UserModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen }) => {
  const [currentDisplay, setCurrentDisplay] = useState("siggup");

  const handleGoBack = () => {
    console.log(currentDisplay);
  };

  const handleClose = () => {
    console.log("clicked on close");
  };

  if (!isOpen) return null;

  return (
    <div className="h-full bg-main text-secondary p-8 flex flex-col space-y-[30px]">
      {/*back and close*/}
      <div className="flex justify-between ">
        <Button
          className={clsx(
            "font-bold cursor-pointer flex items-center",
            currentDisplay === "signin" && "hidden"
          )}
          onClick={() => {
            setCurrentDisplay("signin");
          }}
        >
          <ArrowLeft width={32} height={24} className="stroke-2" />
          <span className="leading-none relative bottom-[2px]">quay lại</span>
        </Button>
        <Button onClick={handleClose}>
          <CrossIcon
            width={32}
            height={32}
            className="fill-secondary stroke-secondary"
          />
        </Button>
      </div>

      {/* modal content */}
      <UserPanel currentDisplay={false} />
      <Signin currentDisplay={currentDisplay === "signin"} />
      <Signup currentDisplay={false} />
    </div>
  );
};

export default UserModal;
