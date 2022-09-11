import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="flex border border-b-2 p-6">
      <Link href="/recent">
        <a className="text-xl tracking-tighter">codepotdev</a>
      </Link>
    </nav>
  );
}
