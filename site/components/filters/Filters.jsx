import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filters() {
  let [categories] = useState([
    { name: "Recent", url: "/recent", id: 1 },
    { name: "Popular", url: "/popular", id: 2 },
    { name: "Trending", url: "/trending", id: 3 },
  ]);

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <Link href={category.url}>
                <a>{category.name}</a>
              </Link>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
