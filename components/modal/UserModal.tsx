"use client";

import Button from "../global/Button";
import ArrowLeft from "../svgs/icons/ArrowLeftIcon";
import CrossIcon from "../svgs/icons/CrossIcon";
import Signin from "./Signin";
import Signup from "./Signup";
import UserPanel from "./UserPanel";

interface UserModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen }) => {
  // const iconSize = 32;

  const handleGoBack = () => {
    console.log("clicked on quay lai");
  };

  const handleClose = () => {
    console.log("clicked on close");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-[414px] bg-main text-secondary p-8 flex flex-col space-y-[30px]">
      {/*back and close*/}
      <div className="flex justify-between ">
        <Button
          className="font-bold cursor-pointer flex items-center"
          onClick={handleGoBack}
        >
          <ArrowLeft width={32} height={24} className="stroke-2" />
          <span className="leading-none relative bottom-[2px]">quay lại</span>
        </Button>
        <Button onClick={handleClose}>
          <CrossIcon width={32} height={32} className="stroke-2" />
        </Button>
      </div>
      
      <UserPanel currentDisplay={false} />
      <Signin currentDisplay={false} />
      <Signup currentDisplay={true} />
    </div>
  );
};

export default UserModal;
