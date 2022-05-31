import "../styles/globals.css";
import Header from "./header";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
