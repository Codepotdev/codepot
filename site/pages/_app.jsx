import "../styles/globals.css";
import HeroModal from "@components/hero-modal/HeroModal";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import Image from "next/image";

function CpdApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />

        <title>codepot.dev - Developer Dashboard</title>
        <link rel="shortcut icon" href="/codepot.svg" />
      </Head>
      <MainLayout>
        {/* <HeroModal></HeroModal> */}
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default CpdApp;
