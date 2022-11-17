import Image from "next/image";

export default function Header({ theme, onThemeChange }) {
  return (
    <nav className="flex items-center border-b-2 border-on-background p-3 px-4 ">
      <a href="/home" className="flex items-center">
        {/* <Image src={"/codepot.svg"} height={30} width={30}/> */}
        <span className="text-lg text-color-default">
          codepot
        </span>
        <span className="text-lg text-color-primary">dev</span>
      </a>
      <a
        onClick={() => onThemeChange(theme ? "" : "dark")}
        className="text-color-default ml-auto"
      >
        Toggle Theme
      </a>
      <span className="mx-4 text-color-default ">
        Contribution guidelines
      </span>
      <span className="mx-4 text-color-default">
        About us
      </span>

      <a href="https://github.com/Codepotdev/codepot" target="_blank">
        <Image
          src={theme ? "/githubmark.png" : "/githubmarkdark.png"}
          height={25}
          width={25}
        />
      </a>
    </nav>
  );
}
