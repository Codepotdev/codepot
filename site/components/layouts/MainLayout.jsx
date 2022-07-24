import { AppContext } from "@lib/context";
import { useContext } from "react";
import Header from "./header";
import Sidenav from "./Sidenav";

export default function MainLayout({ children }) {
  const [appState, setAppState] = useContext(AppContext);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        appState ? `bg-blend-darken` : `bg-opacity-100`
      }`}
    >
      <header className="">
        <Header />
      </header>
      <div className="flex flex-row flex-1 sticky">
        <aside className="w-full md:w-60 md:flex hidden">
          <Sidenav />
        </aside>
        <main
          className={`flex flex-col flex-1 items-start pb-3 px-6 laptop:px-16 pt-10 max-w-full`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
