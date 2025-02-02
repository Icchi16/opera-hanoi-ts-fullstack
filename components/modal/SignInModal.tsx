"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../global/Button";
import Field from "../global/Field";
// import { useState } from "react";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

interface SignInProps {
  currentDisplay: boolean;
  onSwitchModal: (modal: string) => void;
}

const SignInModal: React.FC<SignInProps> = ({
  currentDisplay,
  onSwitchModal,
}) => {
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  // Handle Submit
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("form submitted");
    console.log(data);
  };

  const onError: SubmitHandler<FieldValues> = (data) => {
    console.log("form is error");
    console.log(data);
  };

  if (!currentDisplay) return null;

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
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="flex flex-col space-y-3"
          >
            <Field
              type="email"
              id="email"
              label="Email"
              placeholder=" "
              inputClassName=""
              labelClassName="!text-secondary"
              borderClassName="!bg-secondary"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
            />
            <Field
              type="password"
              id="password"
              label="Password"
              placeholder=" "
              inputClassName=""
              labelClassName="!text-secondary"
              borderClassName="!bg-secondary"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
            />
            <Button type="box" className="btn-secondary" submit>
              Đăng nhập
            </Button>
          </form>
        </div>
        {/* Divider */}
        <div className="flex items-center justify-center">
          <div className="flex-grow border-t border-black"></div>
          <span className="px-3 text-sm text-black relative bottom-[2px]">
            hoặc
          </span>
          <div className="flex-grow border-t border-black"></div>
        </div>
        {/* Social Buttons */}
        <div className="flex flex-col space-y-3">
          <Button type="box" className="btn-secondary flex items-center">
            <Icon icon="formkit:google" height={16} className="mr-1" />{" "}
            <div className="leading-none relative bottom-[1px]">Google</div>
          </Button>
          <Button type="box" className="btn-secondary flex items-center">
            <Icon icon="brandico:facebook" height={16} className="mr-1" />{" "}
            <div className="leading-none relative bottom-[1px]">Facebook</div>
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
