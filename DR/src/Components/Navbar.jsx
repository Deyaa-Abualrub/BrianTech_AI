import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav
      className="bg-white border-gray-200  border-b [#eeeeee]"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-16 filter invert brightness-110"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BrianTech AI
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search..."
            />
          </div>
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-[#FFF0BD] md:hover:bg-transparent md:hover:text-[#FFF0BD] md:p-0 dark:text-white md:dark:hover:text-[#FFF0BD]"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-[#FFF0BD] md:hover:bg-transparent md:hover:text-[#FFF0BD] md:p-0 dark:text-white md:dark:hover:text-[#FFF0BD]"
              >
                Upload Image
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-[#FFF0BD] md:hover:bg-transparent md:hover:text-[#FFF0BD] md:p-0 dark:text-white md:dark:hover:text-[#FFF0BD]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-[#FFF0BD] md:hover:bg-transparent md:hover:text-[#FFF0BD] md:p-0 dark:text-white md:dark:hover:text-[#FFF0BD]"
              >
                Healthcare
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
