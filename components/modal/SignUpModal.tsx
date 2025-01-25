"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Field from "../global/Field";
import Button from "../global/Button";

interface SignupProps {
  currentDisplay: boolean;
  onSwitchModal: (modal: string) => void;
}

interface Inputs {
  example: string;
  exampleRequired: string;
}

const SignUpModal: React.FC<SignupProps> = ({
  currentDisplay,
  onSwitchModal,
}) => {
  if (!currentDisplay) return null;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
          />
          <Field
            type="text"
            id="firstName"
            label="Tên"
            placeholder=" "
            inputClassName=""
            labelClassName="!text-secondary"
            borderClassName="!bg-secondary"
          />
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
            type="text"
            id="phone"
            label="Số điện thoại"
            placeholder=" "
            inputClassName=""
            labelClassName="!text-secondary"
            borderClassName="!bg-secondary"
          />
          <Field
            type="password"
            id="password"
            label="Mật khẩu"
            placeholder=" "
            inputClassName=""
            labelClassName="!text-secondary"
            borderClassName="!bg-secondary"
          />
          <Field
            type="password"
            id="rePassword"
            label="Nhập lại mật khẩu"
            placeholder=" "
            inputClassName=""
            labelClassName="!text-secondary"
            borderClassName="!bg-secondary"
          />
          <Button type="box" className="btn-secondary mt-8">
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
