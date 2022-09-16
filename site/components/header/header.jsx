import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="flex border border-mid bg-mid border-b-0.5 p-6">
      <Link href="/recent">
        <a className="text-xl tracking-tighter text-brand font-bold">codepotdev</a>
      </Link>
    </nav>
  );
}
