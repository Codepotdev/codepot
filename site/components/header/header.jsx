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

      <a
        href="https://github.com/Codepotdev/codepot"
        target="_blank"
        className="flex text-md tracking-tighter text-black ml-auto"
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
