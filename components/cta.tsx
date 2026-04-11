"use client";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { MdGavel } from "react-icons/md";
export default function Cta() {
  return (
    <section className="bg-[#eeeeee]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <div className="py-12 md:py-12 max-md:px-4">
          {/* Section header */}
          <div className="mx-auto pb-10 md:pb-10">
            <h2 className="text-3xl w-3/4 max-md:w-2/3 max-sm:w-auto max-sm:text-center max-sm:block max-sm:mx-auto inline-flex font-(family-name:--font-service) font-bold md:text-4xl">
              Looking to sell your property?
            </h2>
            <a
              href="/marketplace/sell"
              className="cta-button group whitespace-nowrap rounded-full w-1/4 max-md:w-1/3 max-sm:w-1/2 max-sm:float-none max-sm:mx-auto max-sm:mt-5 max-sm:flex cursor-pointer float-right bg-(--navbar-bg) text-white px-4 py-2 flex items-center justify-center"
            >
              Sell Property{" "}
              <IoIosArrowRoundForward className="cta-icon inline-block size-8 ml-3" />
            </a>
            {/* <p className=" w-1/4 float-right text-sm font-(family-name:--font-content)"></p> */}
          </div>

          <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-8 md:gap-8">
            <div>
              <p className="">
                <BsShieldFillCheck className="inline-block size-8 text-(--navbar-bg)" />
              </p>

              <p className="mt-3 text-base font-bold">Ownership Verification</p>
              <p className="mt-2 text-sm text-gray-500">
                Rigorous legal vetting for every listed asset ensures total
                peace of mind for high-value acquisitions.
              </p>
            </div>
            <div>
              <p className="">
                <FaStar className="inline-block size-8 text-(--navbar-bg)" />
              </p>
              <p className="mt-3 text-base font-bold">
                Premium Property Listing
              </p>
              <p className="mt-1 text-sm text-gray-500">
                A curated collection of the most sought-after architectural
                marvels and commercial real estate.
              </p>
            </div>
            <div>
              <p className="">
                <BsPeopleFill className="inline-block size-8 text-(--navbar-bg)" />
              </p>
              <p className="mt-3 text-base font-bold">Serious Buyers Only</p>
              <p className="mt-1 text-sm text-gray-500">
                Exclusive network of pre-qualified investors and high-intent
                buyers ensuring efficient transactions.
              </p>
            </div>
            <div>
              <p className="">
                <MdGavel className="inline-block size-8 text-(--navbar-bg)" />
              </p>
              <p className="mt-3 text-base font-bold">Legal Guidance</p>
              <p className="mt-1 text-sm text-gray-500">
                In-house legal experts specializing in real estate transfer and
                commercial compliance.
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
