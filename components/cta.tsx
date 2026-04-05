"use client";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-12 max-md:px-4">
          {/* Section header */}
          <div className="mx-auto pb-10 md:pb-10">
            <h2 className="text-3xl w-3/4 max-md:w-2/3 max-sm:w-auto max-sm:text-center max-sm:block max-sm:mx-auto inline-flex font-(family-name:--font-service) font-bold md:text-4xl">
              Looking to sell your property?
            </h2>
            <a
              href="/marketplace/sell"
              className="cta-button group rounded-full w-1/4 max-md:w-1/3 max-sm:w-1/2 max-sm:float-none max-sm:mx-auto max-sm:mt-5 max-sm:flex cursor-pointer float-right bg-(--navbar-bg) text-white px-4 py-2 flex items-center justify-center"
            >
              Sell Property{" "}
              <IoIosArrowRoundForward className="cta-icon inline-block size-8 ml-3" />
            </a>
            {/* <p className=" w-1/4 float-right text-sm font-(family-name:--font-content)"></p> */}
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-8 text-center md:gap-8">
            <div>
              <p className="mx-auto p-3 w-14 h-14 rounded-full bg-gray-200">
                <span className="text-xl ">01</span>
              </p>

              <p className="mt-3 text-base font-semibold">
                Ownership & document verification
              </p>
            </div>
            <div>
              <p className="mx-auto p-3 w-14 h-14 rounded-full bg-gray-200">
                <span className="text-xl ">02</span>
              </p>
              <p className="mt-3 text-base font-semibold">
                Premium property listing with full transparency
              </p>
            </div>
            <div>
              <p className="mx-auto p-3 w-14 h-14 rounded-full bg-gray-200">
                <span className="text-xl ">03</span>
              </p>
              <p className="mt-3 text-base font-semibold">
                Serious buyers only
                <br /> no spam calls
              </p>
            </div>
            <div>
              <p className="mx-auto p-3 w-14 h-14 rounded-full bg-gray-200">
                <span className="text-xl ">04</span>
              </p>
              <p className="mt-3 text-base font-semibold">
                Legal guidance throughout the transaction
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-button :global(.cta-icon) {
          transition: transform 180ms ease;
          transform: translateX(0);
        }
        .cta-button:hover :global(.cta-icon) {
          transform: translateX(8px);
        }
      `}</style>
    </section>
  );
}
