import Header from "./header";
import Sidenav from "./Sidenav";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <div className="flex flex-row flex-1">
        <aside className="w-full md:w-60 md:flex hidden">
          <Sidenav />
        </aside>
        <main className="flex flex-col flex-1 items-start pb-3 px-6 laptop:px-16 pt-10 max-w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
