import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "box" | "arrow" | "icon";
  onClick?: () => void;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button onClick={onClick}>
      {(() => {
        switch (type) {
          case "box":
            return (
              <div
                className={clsx(
                  "font-bold py-[10px] w-full bg-main text-secondary",
                  className
                )}
                {...props}
              >
                {children}
              </div>
            );
          case "arrow":
            return <div {...props}>{children}</div>;
          case "icon":
            return <div {...props}>{children}</div>;
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
};

export default Button;
