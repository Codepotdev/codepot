import Header from "../header/header.jsx";

export default function MainLayout({ children, theme, onThemeChange }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background dark:bg-dark-background">
      <header>
        <Header theme={theme} onThemeChange={onThemeChange} />
      </header>
      <main className="overflow-y-scroll pt-10 pb-3 px-16">{children}</main>
    </div>
  );
}
