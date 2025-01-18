interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "box" | "arrow" | "icon";
}
const Button: React.FC<ButtonProps> = ({ type, children, ...props }) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "box":
            return (
              <div {...props}>
                {children}
              </div>
            );
          case "arrow":
            return (
              <div {...props}>
                {children}
              </div>
            );
          case "icon":
            return (
              <div {...props}>
                {children}
              </div>
            );
          default:
            return <div {...props}>{children}</div>;
        }
      })()}
    </>
  );
};

export default Button;
