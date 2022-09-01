import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="flex border border-b-2 p-6">
      <Link href="/recent">
        <a className="text-xl tracking-tighter">codepotdev</a>
      </Link>

      {/* <div className="m-auto">
        <Link href="/commit">
          <a
            className={
              router.asPath.includes("/commit")
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
              router.asPath.includes("/read") ? "mx-2" : "mx-2 font-extralight"
            }
          >
            read
          </a>
        </Link>

        <Link href="/learn">
          <a
            className={
              router.asPath.includes("/learn") ? "mx-2" : "mx-2 font-extralight"
            }
          >
            learn
          </a>
        </Link>
      </div> */}
    </nav>
  );
}
