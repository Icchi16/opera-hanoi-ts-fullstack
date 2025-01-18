"use client";

import Button from "../global/Button";

interface SigninProps {
  currentDisplay: boolean;
}

const Signin: React.FC<SigninProps> = ({ currentDisplay }) => {
  // const iconSize = 32;
  if (!currentDisplay) return null;

  const handleSignIn = () => {
    console.log("clicked sign in");
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Modal Content */}
      <h2 className="text-[40px] font-[family-name:var(--title)] text-secondary ">
        Tài khoản của bạn
      </h2>
      <p className="leading-relaxed text-[14px]">
        Trải nghiệm nghệ thuật đỉnh cao đang chờ bạn đặt chỗ ngay tại Hanoi
        Opera House hôm nay!
      </p>
      {/* Login Button */}
      <div className="flex flex-col space-y-4">
        <Button
          type="box"
          className="!bg-secondary !text-main"
          onClick={handleSignIn}
        >
          Đăng nhập
        </Button>
        {/* Divider */}
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-black"></div>
          <span className="px-3 text-sm text-black relative bottom-[2px]">
            hoặc qua
          </span>
          <div className="flex-grow border-t border-black"></div>
        </div>
        {/* Social Buttons */}
        <div className="flex flex-col space-y-3">
          <Button type="box" className="!bg-secondary !text-main">
            <span className="mr-2">G</span> Google
          </Button>
          <Button type="box" className="!bg-secondary !text-main">
            <span className="mr-2">G</span> Facebook
          </Button>
        </div>
      </div>
      {/* Sign up */}
      <div className="flex flex-col items-start text-sm leading-tight">
        <p className="">Ban chưa có tài khoản?</p>
        <Button className="font-bold underline">Đăng ký ngay</Button>
      </div>
    </div>
  );
};

export default Signin;
