import Logo from "../svgs/Logo";

const Navbar = () => {
  return (
    <nav className="navbar  max-w-[1440px] p-x-[154px] mx-auto">
      <div className="w-full md:flex md:items-center md:gap-2">
        <div className="flex items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a href="">
              <Logo className="text-white" />
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                data-collapse="#logo-navbar-collapse"
                aria-controls="logo-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="logo-navbar-collapse"
          className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
        >
          <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
