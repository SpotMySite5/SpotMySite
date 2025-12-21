"use client";

import { useState } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: number | string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(active);

  return (
    <div className="relative rounded-lg bg-white/70 shadow-sm shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <h2>
        <button
          className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen((prevState) => !prevState);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span className="flex items-center">
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center font-bold text-lg font-display">
              {/* {typeof id === "string" ? parseInt(id, 10) + 1 : id + 1} */}
              Q.
            </span>
            <span className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-semibold">
              {title}
            </span>
          </span>
          <span className="ml-8 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-xs">
            <svg
              className={`origin-center transform fill-gray-600 transition duration-200 ease-out ${accordionOpen && "rotate-180!"}`}
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={6}
              fill="none"
            >
              <path
                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden text-sm text-gray-600 transition-all duration-300 ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden ml-8 md:ml-10 pl-3 md:pl-4 lg:pl-6 py-0 space-y-3">
          <p className="px-4 pb-3 text-base">
            <hr className="mb-3" />
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}
