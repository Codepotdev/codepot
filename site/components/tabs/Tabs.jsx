import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ tabs }) {
  const router = useRouter();

  return (
    <div className="m-4 grow max-w-md">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-1 bg-light shadow-md focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-brand sm:text-sm">
          {tabs.map((category) => (
            <Link href={category.url} key={category.key}>
              <Tab
                className={() =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-base leading-5",
                    "ring-light ring-opacity-60 ring-offset-2 ring-offset-dark focus:outline-none focus:ring-2",
                    router.asPath === category.url
                      ? "bg-mid/50 shadow-dark"
                      : "text-dark hover:bg-mid/30"
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
