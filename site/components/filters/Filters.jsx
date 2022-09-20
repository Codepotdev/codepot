import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Filters({
  selected,
  filterData,
  onFilterDataChange,
  label,
}) {
  return (
    <div className="flex items-center z-50">
      <label className="mx-3">{label}:</label>
      <>
        <Listbox
          value={selected}
          onChange={(e) => {
            onFilterDataChange(e);
          }}
        >
          <div className="relative mt-1 w-36">
            <Listbox.Button className="relative h-8 w-full cursor-pointer rounded-lg bg-light py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-brand sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-light py-1 text-base shadow-lg ring-1 ring-dark ring-opacity-5 focus:outline-none sm:text-sm">
                {filterData.map((lang, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-mid" : "text-dark"
                      }`
                    }
                    value={lang}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {lang.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-dark">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </>
    </div>
  );
}
