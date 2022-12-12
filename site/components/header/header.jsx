import Image from "next/image";

export default function Header({ theme, onThemeChange }) {
  return (
    <nav className="flex items-center header-border p-3 px-4 ">
      <a href="/home" className="flex items-center">
        {/* <Image src={"/codepotdev1.svg"} height={35} width={35}/> */}
        <span className="text-lg text-color-default">
          codepot
        </span>
        <span className="text-lg text-color-primary">dev</span>
      </a>
      <a
        onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
        className="text-color-default ml-auto cursor-pointer"
      >
        Toggle Theme
      </a>
      <span className="mx-4 text-color-default cursor-pointer">
        Contribution guidelines
      </span>
      <span className="mx-4 text-color-default cursor-pointer">
        About us
      </span>

      <a href="https://github.com/Codepotdev/codepot" target="_blank">
        <Image
          src={theme === 'dark' ? "/githubmark.png" : "/githubmarkdark.png"}
          height={25}
          width={25}
        />
      </a>
    </nav>
  );
}
