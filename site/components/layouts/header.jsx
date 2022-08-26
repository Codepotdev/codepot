import { AppContext } from "@lib/context";
import { useState, useContext } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const [appState, setAppState] = useContext(AppContext);

  const handleClick = () => {
    setActive(!active);
    setAppState(!appState);
  };

  return (
    <nav className="flex flex-wrap p-6">
      <div className="flex items-start flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl text-black tracking-tight">
          codepotdev
        </span>
      </div>

      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl text-black tracking-tight">
          contribute
        </span>

        <span className="font-semibold text-xl text-black tracking-tight">
          learn
        </span>
      </div>

      {/* <div className="md:hidden block">
        <button
          onClick={handleClick}
          className="flex items-center px-3 py-2 border rounded text-black border-slate-400 hover:text-black hover:border-black"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`z-50 w-full ${active ? "" : "hidden"} `}>
        <div className="w-60 h-full left-0 top-0 shadow-md px-1 absolute bg-white">
          <ul className="relative">
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded  hover:bg-slate-200 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Most popular
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded  hover:bg-slate-200 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Trending
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap rounded  hover:bg-slate-200 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </nav>
  );
};

export default Header;
