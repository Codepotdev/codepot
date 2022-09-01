import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filters({ filters }) {
  const router = useRouter();

  return (
    <div className="m-4 max-w-md">
      <Tab.Group>
        <Tab.List className="flex space-x-1 bg-green-800/60 rounded-xl p-1">
          {filters.map((category) => (
            <Link href={category.url} key={category.key}>
              <Tab
                className={() =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2",
                    router.asPath === category.url
                      ? "bg-white shadow"
                      : "text-slate-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                <a>{category.name}</a>
              </Tab>
            </Link>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
