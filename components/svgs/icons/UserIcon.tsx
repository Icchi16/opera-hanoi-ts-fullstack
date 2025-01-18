const UserIcon = ({ ...props }) => (
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
      d="M14.977 14h-4.954a3.851 3.851 0 0 0-3.336 2.3C5.98 17.688 7.39 19 9.032 19h6.936c1.642 0 3.053-1.312 2.345-2.7a3.85 3.85 0 0 0-3.336-2.3ZM15.5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default UserIcon;
