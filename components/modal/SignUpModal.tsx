"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Field from "../global/Field";
import Button from "../global/Button";
// import { useState } from "react";

interface SignUpProps {
  currentDisplay: boolean;
  onSwitchModal: (modal: string) => void;
}

const SignUpModal: React.FC<SignUpProps> = ({
  currentDisplay,
  onSwitchModal,
}) => {
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: {} });

  // Handle Submit
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  if (!currentDisplay) return null;
  return (
    <div className="flex flex-col space-y-6">
      {/* Modal Content */}
      <h2 className="text-[40px] font-[family-name:var(--title)] text-secondary ">
        Xin chào!
      </h2>
      <p className="leading-relaxed text-[14px]">
        Điền thông tin để tạo tài khoản
      </p>

      {/* Form Signup */}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-col space-y-3">
          <Field
            type="text"
            id="lastName"
            label="Họ"
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
            type="text"
            id="firstName"
            label="Tên"
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
            type="text"
            id="phone"
            label="Số điện thoại"
            placeholder=" "
            inputClassName=""
            labelClassName="!text-secondary"
            borderClassName="!bg-secondary"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Field
            type="password"
            id="password"
            label="Mật khẩu"
            placeholder=" "
            inputClassName=""
            labelClassName="!text-secondary"
            borderClassName="!bg-secondary"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Field
            type="password"
            id="rePassword"
            label="Nhập lại mật khẩu"
            placeholder=" "
            inputClassName=""
            labelClassName="!text-secondary"
            borderClassName="!bg-secondary"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Button type="box" className="btn-secondary mt-8" submit>
            Đăng ký
          </Button>
          <div>
            <div className="flex flex-col items-start text-sm leading-tight mt-3">
              <p className="">Ban đã có tài khoản?</p>
              <Button
                onClick={() => onSwitchModal("signIn")}
                className="font-bold underline"
              >
                Đăng nhập ngay
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpModal;
