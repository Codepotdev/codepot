import Header from "./header";
import Sidenav from "./Sidenav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <div className="flex flex-row flex-1">
        <aside className="w-full md:w-60 md:flex hidden">
          <Sidenav />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
