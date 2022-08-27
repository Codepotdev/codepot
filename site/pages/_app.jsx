import "../styles/globals.css";
import MainLayout from "../components/layouts/MainLayout";
import { useState } from "react";

function CpdApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default CpdApp;
