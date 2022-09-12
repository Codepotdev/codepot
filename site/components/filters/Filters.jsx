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
        <Tab.List className="flex space-x-1 bg-dark rounded-xl p-1">
          {filters.map((category) => (
            <Link href={category.url} key={category.key}>
              <Tab
                className={() =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-base leading-5",
                    "ring-light ring-opacity-60 ring-offset-2 ring-offset-dark focus:outline-none focus:ring-2",
                    router.asPath === category.url
                      ? "bg-light shadow-brand"
                      : "text-light hover:bg-light/[0.15]"
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
