interface ButtonProps {
  type?: "box" | "arrow";
}

const Button: React.FC<ButtonProps> = ({ type }) => {
  return type == "box" ? (
    <div>This is {type} button</div>
  ) : (
    <div>Oh This is {type} button</div>
  );
};

export default Button;
