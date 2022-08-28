import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="flex p-6 bg-slate-50">
      <Link href="/commit/trending">
        <a className="font-mono text-xl tracking-tighter">codepotdev</a>
      </Link>

      <div className="m-auto">
        <Link href="/commit">
          <a
            className={
              router.asPath.includes('/commit')
                ? "mx-2"
                : "mx-2 font-extralight"
            }
          >
            commit
          </a>
        </Link>

        <Link href="/read">
          <a
            className={
              router.asPath.includes('/read')
                ? "mx-2"
                : "mx-2 font-extralight"
            }
          >
            read
          </a>
        </Link>

        <Link href="/learn">
          <a
            className={
              router.asPath.includes('/learn')
                ? "mx-2"
                : "mx-2 font-extralight"
            }
          >
            learn
          </a>
        </Link>
      </div>
    </nav>
  );
}
