import React, { forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "box" | "arrow" | "icon";
  onClick?: () => void;
  className?: string;
  submit?: boolean;
  isDisabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type, children, className, onClick, submit, isDisabled, ...props },
    ref
  ) => {
    return (
      <button onClick={onClick} ref={ref} type={submit ? "submit" : "button"} className={clsx(isDisabled && "btn-disabled")}>
        {(() => {
          switch (type) {
            case "box":
              return (
                <div
                  className={clsx(
                    "waves waves-primary w-full btn btn-lg rounded-none h-fit border-[3px]",
                    className
                  )}
                  {...props}
                >
                  {children}
                </div>
              );
            case "arrow":
              return (
                <div
                  className={clsx("btn btn-lg btn-text", className)}
                  {...props}
                >
                  {children}
                </div>
              );
            case "icon":
              return (
                <div className={clsx("w-fit h-fit", className)} {...props}>
                  {children}
                </div>
              );
            default:
              return (
                <div className={clsx("", className)} {...props}>
                  {children}
                </div>
              );
          }
        })()}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
