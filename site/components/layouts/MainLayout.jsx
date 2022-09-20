import Header from "../header/header.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header>
        <Header />
      </header>
      <main
        className={`overflow-y-scroll pb-3 px-8 md:px-16 lg:px-32 xl:px-64 pt-10`}
      >
        {children}
      </main>
    </div>
  );
}
