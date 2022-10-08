import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex grow items-center border-b-2 bg-slate-50 p-2 px-4">
      <a href="/popular" className="flex items-center text-lg tracking-tighter text-black ">
        <Image src={"/codepot.svg"} layout="fixed" height={40} width={40} />
        codepot<span className="text-brand-600">dev</span>
      </a>
      <span className="text-md tracking-tighter mx-4 text-black ml-auto">
        Contribution guidelines
      </span>
      <span className="text-md tracking-tighter mx-4 text-black ">
        About us
      </span>

      <a
        href="https://github.com/Codepotdev/codepot"
        target="_blank"
        className="text-md ml-10 tracking-tighter"
      >
        <Image
          src={"/githubmarkdark.png"}
          height={30}
          width={30}
          className="rounded z-10"
        />
      </a>
    </nav>
  );
}
