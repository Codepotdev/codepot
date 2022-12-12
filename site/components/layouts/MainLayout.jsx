import Header from "../header/header.jsx";
import { useTheme } from "next-themes";

export default function MainLayout({ children }) {
  const { theme, setTheme } = useTheme('');

  return (
    <div className="flex flex-col h-screen  bg-background dark:bg-dark-background">
      <header>
        <Header theme={theme} onThemeChange={setTheme} />
      </header>
      <main className="pt-10 pb-3 px-16">{children}</main>
    </div>
  );
}
