import Link from "next/link";
import { useRouter } from "next/router";

export default function Filters() {
  const router = useRouter();

  return (
    <div className="flex my-6">
      <Link href="/commit/trending">
        <a className={router.pathname === "/commit/trending"  ? "font-semibold mx-2" : "mx-2"}>
          Trending
        </a>
      </Link>
      <Link href="/commit/helpwanted">
        <a className={router.pathname === "/commit/helpwanted" ? "font-semibold mx-2" : "mx-2"}>
          Help Wanted
        </a>
      </Link>
      <Link href="/">
        <a className={router.pathname === "/commit/stackoverflow" ? "font-semibold mx-2" : "mx-2"}>
          Stackoverflow
        </a>
      </Link>
    </div>
  );
}
