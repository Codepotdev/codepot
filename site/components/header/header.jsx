import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex items-center bg-slate-50  shadow-md fixed w-full p-3 px-4 ">
      <a href="https://github.com/Codepotdev/codepot" target="_blank">
        <Image src={"/githubmarkdark.png"} height={25} width={25} />
      </a>
      <a href="/home" className="flex items-center">
        <span className="text-lg text-color-default">codepot</span>
        <span className="text-lg text-color-primary">dev</span>
      </a>
    </nav>
  );
}
