import { AppContext } from "@lib/context";
import { useContext } from "react";
import Header from "./header";
import Sidenav from "./Sidenav";

export default function MainLayout({ children }) {
  const [appState, setAppState] = useContext(AppContext);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center ${
        appState ? `bg-blend-darken` : `bg-opacity-100`
      }`}
    >
      <header>
        <Header />
        <div className="bg-gradient-to-l from-indigo-500 to-fuchsia-500 h-0.5"></div>
      </header>
      {/* <div>Trending repositories</div> */}
      <div className="flex flex-row flex-1 sticky">
        {/* <aside className="w-full md:w-60 md:flex hidden">
          <Sidenav />
        </aside> */}
        <main
          className={`flex flex-col flex-1 items-center pb-3 px-64 pt-10 max-w-full`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
