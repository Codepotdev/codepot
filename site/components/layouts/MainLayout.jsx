import Header from "../header/header.jsx";
import Filters from "@components/filters/Filters";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header>
        <Header />
        <div className="bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-pink-500/50 h-0.5"></div>
      </header>
      <main
        className={`overflow-y-scroll pb-3 px-8 md:px-16 lg:px-32 xl:px-64 pt-10`}
      >
        <Filters></Filters>
        {children}
      </main>
    </div>
  );
}
