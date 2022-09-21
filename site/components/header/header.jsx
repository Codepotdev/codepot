import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <nav className="flex items-center bg-slate-200 p-2 px-8">
      <Link href="/popular">
        <a className="text-xl tracking-tighter text-black font-bold">
          codepotdev
        </a>
      </Link>

      <span className="text-md tracking-tighter mx-4 text-black ml-auto">Contribution guidelines</span>
      <span className="text-md tracking-tighter mx-4 text-black ">About us</span>

      <a
        href="https://github.com/Codepotdev/codepot"
        target="_blank"
        className="text-md ml-10 tracking-tighter"
      >
        <Image
          src={"/githubmarkdark.png"}
          height={40}
          width={40}
          className="rounded z-10"
        />
      </a>
    </nav>
  );
}
