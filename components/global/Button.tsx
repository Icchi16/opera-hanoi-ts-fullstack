import React, { forwardRef } from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "box" | "arrow" | "icon";
  onClick?: () => void;
  className?: string;
  submit?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, children, className, onClick, submit, ...props }, ref) => {
    return (
      <button onClick={onClick} ref={ref} type={submit ? "submit" : "button"}>
        {(() => {
          switch (type) {
            case "box":
              return (
                <div
                  className={clsx(
                    "waves waves-primary w-full btn btn-lg rounded-none h-fit",
                    className
                  )}
                  {...props}
                >
                  {children}
                </div>
              );
            case "arrow":
              return (
                <div className={clsx("", className)} {...props}>
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
                <div className={className} {...props}>
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
