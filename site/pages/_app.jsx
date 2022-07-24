import "../styles/globals.css";
import MainLayout from "../components/layouts/MainLayout";
import { AppContext } from "@lib/context";

function MyApp({ Component, pageProps }) {
  const value = {
    user: "Dimitar Chetelev",
    theme: "light",
    hamburgerClicked: false,
  };

  return (
    <AppContext.Provider value={value}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppContext.Provider>
  );
}

export default MyApp;
