import store from "src/store/store";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import "../styles/globals.css";
import { createWrapper } from "next-redux-wrapper";

function CpdApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Accelerate Your Developer Career | codepot.dev </title>
        <link rel="shortcut icon" href="/codepot.svg" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(CpdApp);
