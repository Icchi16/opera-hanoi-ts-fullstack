const Search = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 -0.5 25 25"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.5 11.146a6.144 6.144 0 1 1 12.288-.002 6.144 6.144 0 0 1-12.288.002Z"
      clipRule="evenodd"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.989 15.49 3.511 3.511"
    />
  </svg>
);
export default Search;
