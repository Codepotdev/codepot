import { Fragment } from "react";
import Header from "../../pages/header";
import Sidenav from "../../pages/sidenav";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className="grid grid-cols-12">
        <Sidenav className="col-span-2"></Sidenav>
        <section className="col-span-10">{children} </section>
      </main>
    </Fragment>
  );
}
