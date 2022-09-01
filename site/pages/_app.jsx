import "../styles/globals.css";
import MainLayout from "../components/layouts/MainLayout";

function CpdApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default CpdApp;
