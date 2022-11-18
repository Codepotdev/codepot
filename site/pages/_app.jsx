import "../styles/globals.css";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import { useState } from "react";

function CpdApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme}>
      <Head>
        <title>codepot.dev - Developer Dashboard</title>
        <link rel="shortcut icon" href="/codepot.svg" />
      </Head>

      <MainLayout theme={theme} onThemeChange={setTheme}>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}

export default CpdApp;
