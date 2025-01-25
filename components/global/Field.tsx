"use client";

import clsx from "clsx";
import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface FieldProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  borderClassName?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  regexValidate?: RegExp;
  validate?: (...args: unknown[]) => boolean;
}

const Field: React.FC<FieldProps> = ({
  label,
  id,
  type,
  placeholder,
  inputClassName,
  labelClassName,
  borderClassName,
  register,
  required,
  errors,
  disabled,
  validate,
  regexValidate,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        {...register(id, {
          validate: validate,
          required: required,
          pattern: {
            value: regexValidate ?? /./g,
            message: "Invalid input",
          },
        })}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "input input-filled peer bg-transparent p-1",
          inputClassName
        )}
        id={id}
        name={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        className={clsx(
          "input-filled-label -left-2",
          labelClassName,
          isFocused && labelClassName
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <span
        className={clsx("input-filled-focused", isFocused && borderClassName)}
      ></span>
    </div>
  );
};

export default Field;
