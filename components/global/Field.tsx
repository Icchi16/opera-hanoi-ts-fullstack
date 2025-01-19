"use client";

import clsx from "clsx";
import { useState } from "react";

interface FieldProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  borderClassName?: string;
}

const Field: React.FC<FieldProps> = ({
  label,
  id,
  type,
  placeholder,
  inputClassName,
  labelClassName,
  borderClassName,
}) => {
  const [fieldValue, setFieldValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          "input input-filled peer bg-transparent p-1",
          inputClassName
        )}
        id={id}
        value={fieldValue}
        onChange={(e) => {
          setFieldValue(e.target.value);
        }}
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
