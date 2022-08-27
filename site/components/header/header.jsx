import { AppContext } from "@lib/context";
import Link from "next/link";
import { useState, useContext } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  const [appState, setAppState] = useContext(AppContext);

  const handleClick = () => {
    setActive(!active);
    setAppState(!appState);
  };

  return (
    <nav className="flex p-6 bg-slate-50">
      <Link href="/">
        <a className="font-bold text-xl tracking-tighter">codepotdev</a>
      </Link>

      <div className="m-auto">
        <span className="font-semibold cursor-pointer p-2">commit</span>

        <span className="mx-2 cursor-pointer p-2">read</span>

        <span className="cursor-pointer p-2">learn</span>
      </div>
    </nav>
  );
}
