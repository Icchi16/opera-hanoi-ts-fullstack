"use client";

import Button from "../global/Button";
import Field from "../global/Field";

interface SigninProps {
  currentDisplay: boolean;
  onSwitchModal: (modal: string) => void;
}

const SignInModal: React.FC<SigninProps> = ({
  currentDisplay,
  onSwitchModal,
}) => {
  // const iconSize = 32;
  if (!currentDisplay) return null;

  const handleSignIn = () => {
    console.log("clicked sign in");
  };

  return (
    <div className="flex flex-col space-y-6" aria-live="assertive">
      {/* Modal Content */}
      <h2 className="text-[40px] font-[family-name:var(--title)] text-secondary ">
        Tài khoản của bạn
      </h2>
      <p className="leading-relaxed text-[14px]">
        Trải nghiệm nghệ thuật đỉnh cao đang chờ bạn đặt chỗ ngay tại Hanoi
        Opera House hôm nay!
      </p>
      {/* Login Button */}
      <div className="flex flex-col space-y-4 relative bottom-2">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-3">
            <Field
              type="email"
              id="email"
              label="Email"
              placeholder=" "
              inputClassName=""
              labelClassName="!text-secondary"
              borderClassName="!bg-secondary"
            />
            <Field
              type="password"
              id="password"
              label="Password"
              placeholder=" "
              inputClassName=""
              labelClassName="!text-secondary"
              borderClassName="!bg-secondary"
            />
          </div>
          <Button type="box" className="btn-secondary" onClick={handleSignIn}>
            Đăng nhập
          </Button>
        </div>
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
          <Button type="box" className="btn-secondary">
            <span className="mr-2">G</span> Google
          </Button>
          <Button type="box" className="btn-secondary">
            <span className="mr-2">F</span> Facebook
          </Button>
        </div>
      </div>
      {/* Sign up */}
      <div className="flex flex-col items-start text-sm leading-tight">
        <p className="">Ban chưa có tài khoản?</p>
        <Button
          onClick={() => onSwitchModal("signUp")}
          className="font-bold underline"
        >
          Đăng ký ngay
        </Button>
      </div>
    </div>
  );
};

export default SignInModal;
