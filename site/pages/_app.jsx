import "../styles/globals.css";
import MainLayout from "../components/layouts/MainLayout";
import { AppContext } from "@lib/context";
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  const [appState, setAppState] = useState(false)

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppContext.Provider>
  );
}

export default MyApp;
