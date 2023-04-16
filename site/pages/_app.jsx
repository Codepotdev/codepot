import "../styles/globals.css";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

function CpdApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Accelerate Your Developer Career | codepot.dev </title>
        <link rel="shortcut icon" href="/codepot.svg" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </div>
  );
}

export default CpdApp;
