import "../styles/globals.css";
import Layout from "../components/layouts/MainLayout";
import { AppContext } from "@lib/context";

function MyApp({ Component, pageProps }) {
  const value = { user: "Dimitar Chetelev", theme: "light" };

  return (
    <AppContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
