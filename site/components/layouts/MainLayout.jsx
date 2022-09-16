import Header from "../header/header.jsx";
import Tabs from "@components/tabs/Tabs";
import { tabsData } from "@data/tabsData.js";
import Filters from "@components/filters/Filters";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header>
        <Header />
      </header>
      <main
        className={`overflow-y-scroll pb-3 px-8 md:px-16 lg:px-32 xl:px-64 pt-10`}
      >
        <section className="flex justify-between items-center">
          <Tabs tabs={tabsData}></Tabs>
          <Filters></Filters>
        </section>
        {children}
      </main>
    </div>
  );
}