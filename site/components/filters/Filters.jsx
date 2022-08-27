import Link from "next/link";
import { useRouter } from "next/router";

export default function Filters() {
  const router = useRouter();

  return (
    <div className="flex my-6">
      <Link href="/commit/trending">
        <a
          className={
            router.pathname === "/commit/trending"
              ? "mx-2 border-b-2 border-fuchsia-500/30"
              : "mx-2 font-extralight"
          }
        >
          Trending
        </a>
      </Link>
      <Link href="/commit/helpwanted">
        <a
          className={
            router.pathname === "/commit/helpwanted"
              ? "mx-2 border-b-2 border-fuchsia-500/30"
              : "mx-2 font-extralight"
          }
        >
          Help Wanted
        </a>
      </Link>
      <Link href="/">
        <a
          className={
            router.pathname === "/commit/stackoverflow"
              ? "mx-2 border-b-2 border-fuchsia-500/30"
              : "mx-2 font-extralight"
          }
        >
          Stackoverflow
        </a>
      </Link>
    </div>
  );
}
