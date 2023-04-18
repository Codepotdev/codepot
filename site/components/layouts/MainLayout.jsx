import Header from "../header/header.jsx";
import { useTheme } from "next-themes";
import Footer from "@components/footer/Footer";
import Newsletter from "@components/newsletter/Newsletter";

export default function MainLayout({ children }) {
  const { theme, setTheme } = useTheme("");

  return (
    <div className="flex flex-col h-screen  bg-background dark:bg-dark-background">
      {/* Header section */}
      <Header theme={theme} onThemeChange={setTheme} />

      <div className="my-8"></div>
      <main>{children}</main>

      {/* Newsletter signup section */}
      <Newsletter></Newsletter>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
