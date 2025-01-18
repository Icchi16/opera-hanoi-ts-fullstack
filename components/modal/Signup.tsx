"use client";

import Button from "../global/Button";
import Form from "next/form";

interface SignupProps {
  currentDisplay: boolean;
}

const Signup: React.FC<SignupProps> = ({ currentDisplay }) => {
  if (!currentDisplay) return null;

  const handleSignup = () => {};

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
      <div className="flex flex-col space-y-8">
        <Form action={handleSignup}>
          
        </Form>
      </div>
    </div>
  );
};

export default Signup;
