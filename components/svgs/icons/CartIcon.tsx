const CartIcon = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      <path d="M17 17H6V3H4" />
      <path d="m6 5 14 1-1 7H6" />
    </g>
  </svg>
);
export default CartIcon;
