import clsx from "clsx";

interface ButtonProps {
  type: "box" | "arrow" | "icon";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, children, className }) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "box":
            return (
              <div className={clsx(className?.concat(" ", " "))}>
                {children}
              </div>
            );
          case "arrow":
            return <div className={className}>{children}</div>;
          case "icon":
            return (
              <div className={clsx(className?.concat(" ", "text-bg1"))}>
                {children}
              </div>
            );
          default:
            return <></>;
        }
      })()}
    </>
  );
};

export default Button;
