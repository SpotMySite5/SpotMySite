"use client";

import { useEffect, useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";
import { HiCheck } from "react-icons/hi";
import React from "react";

type Item = {
  id: string | number;
  name: string;
  avatar?: string;
};

type Props = {
  items?: Item[];
  value?: Item | null;
  onChange?: (item: Item | null) => void;
  placeholder?: string;
  label?: string;
  labelIcon?: React.ElementType | React.ReactNode;
};

const people = [
  {
    id: 1,
    name: "Wade Cooper",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
  },
  {
    id: 3,
    name: "Devon Webb",
  },
  {
    id: 4,
    name: "Tom Cook",
  },
  {
    id: 5,
    name: "Tanya Fox",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
  },
  {
    id: 7,
    name: "Caroline Schultz",
  },
  {
    id: 8,
    name: "Mason Heaney",
  },
  {
    id: 9,
    name: "Claudie Smitham",
  },
  {
    id: 10,
    name: "Emil Schaefer",
  },
];

export default function DropList({
  items = people,
  value,
  onChange,
  label,
  labelIcon,
}: Props) {
  const [selected, setSelected] = useState<Item | null>(value ?? null);

  useEffect(() => {
    setSelected(value ?? null);
  }, [value]);

  const handleChange = (item: Item | null) => {
    setSelected(item);
    if (onChange) onChange(item);
  };

  const isElement = React.isValidElement(labelIcon);
  const Icon =
    !isElement && labelIcon ? (labelIcon as React.ElementType) : undefined;
  return (
    <>
      {selected ? (
        <span className="block icon_label relative top-1 text-[10px] font-medium text-gray-900">
          {labelIcon ? (
            <>
              {labelIcon}
              {label ? ` ${label}` : null}
            </>
          ) : (
            label
          )}
        </span>
      ) : (
        <label className="block icon_label relative top-1 text-[10px] font-medium text-gray-900">
          &nbsp;
        </label>
      )}
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative mt-2">
          <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <span className="block truncate droplist_label">
                {selected
                  ? selected.name
                  : (labelIcon ? (
                      <>
                        {labelIcon}
                        {label ? ` ${label}` : null}
                      </>
                    ) : (
                      label
                    )) || "Select an option"}
              </span>
            </span>
            <HiChevronUpDown className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
            {/* <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          /> */}
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
          >
            {items.map((item) => (
              <ListboxOption
                key={item.id}
                value={item}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  {/* <img
                  alt=""
                  src={person.avatar}
                  className="size-5 shrink-0 rounded-full"
                /> */}
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                    {item.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                  {/* <CheckIcon aria-hidden="true" className="size-5" /> */}
                  <HiCheck className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </>
  );
}
