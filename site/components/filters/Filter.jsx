import { useState } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { languages } from "@data/data-share";

export default function Filter({ onFilterChange }) {
  const [language, setLanguage] = useState(languages[0]);

  return (
    <>
      <Listbox
        value={language}
        onChange={(e) => {
          setLanguage(() => e);
          onFilterChange(e.name);
        }}
      >
        <div className="relative mt-1 w-36">
          <Listbox.Button className="relative w-60 cursor-pointer rounded-md surface-default py-2 pl-3 text-left shadow-md card-border text-sm">
            <span className="block truncate capitalize">{language.name}</span>
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
            <Listbox.Options className="absolute z-50 max-h-60 mt-1 overflow-auto w-60 rounded-md bg-surface dark:bg-dark-surface py-1 shadow-lg card-border text-sm">
              {languages.map((lang, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative listbox-primary cursor-pointer select-none py-2 pl-10 pr-10 `
                  }
                  value={lang}
                >
                  {({ active, selected }) => (
                    <>
                      <span className={`capitalize block truncate`}>
                        {lang.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 text-brand-600 left-0 flex items-center pl-3 text-dark">
                          <CheckIcon
                            className="h-5 w-5 text-secondary"
                            aria-hidden="true"
                          />
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
  );
}
