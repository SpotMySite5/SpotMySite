"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Avatar01 from "@/public/images/image1.png";
import Avatar02 from "@/public/images/image2.png";
import Avatar03 from "@/public/images/image3.png";
import Avatar04 from "@/public/images/image4.png";
import Avatar05 from "@/public/images/image5.png";
import Avatar06 from "@/public/images/image6.png";
import Avatar07 from "@/public/images/image7.png";
import Logo1 from "@/public/images/logo-dark.png";

export default function ContactUs() {
  const form = useRef<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_eyggq9s",
        "template_e24hq49",
        form.current,
        "cwjwFqL7CjZlE5QXK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="relative sec_services" id="contact">
      <div className="mx-auto">
        <div className=" flex flex-row pt-24 max-sm:pt-0 max-sm:flex-col-reverse">
          {/* Section header */}

          {/* Grid */}
          <div className="basis-1/2 max-sm:basis-full overflow-hidden  px-12 max-sm:px-6 pt-0 pb-24 max-sm:pb-10 md:pl-52  md:pb-20">
            {/* TODO: Replace this with your contact form or card component */}
            <div className="bg-white rounded-xl shadow-lg p-8 drop-shadow-xl">
              <div className="mb-2 flex justify-center">
                <Image
                  className="relative"
                  height={60}
                  src={Logo1}
                  alt="Logo 01"
                />
              </div>
              <hr className="mb-6 border-gray-200" />
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4 flex gap-4">
                  <div className="w-1/2">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded"
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded"
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <div className="flex items-center border rounded">
                    <input
                      className="w-full px-3 py-2 border rounded"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="555 123 4567"
                      pattern="^\+\d{1,2}\s?\|\s?\d{4,}$"
                      inputMode="tel"
                      maxLength={20}
                      onKeyDown={(e) => {
                        const allowed =
                          /[0-9+]|Backspace|Delete|ArrowLeft|ArrowRight|Tab|Home|End/;
                        if (!allowed.test(e.key) && !(e.ctrlKey || e.metaKey)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>
                  {/* <small className="text-gray-400">
                    Format: +CountryCode | Number (e.g. +1 | 555 123 4567)
                  </small> */}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        value="Andhra"
                        className="mr-2"
                        required
                      />
                      Andhra Pradesh
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        value="Telangana"
                        className="mr-2"
                      />
                      Telangana
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="service">
                    Service
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded"
                    id="service"
                    name="service"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Property Video Inspections">
                      Property Video Inspections
                    </option>
                    <option value="Land Status Check">Land Status Check</option>
                    <option value="Land Cleanup & Vegetation Removal">
                      Land Cleanup & Vegetation Removal
                    </option>
                    <option value="Fence & Boundary Installation">
                      Fence & Boundary Installation
                    </option>
                    <option value="Remote Buyer Walkthrough">
                      Remote Buyer Walkthrough
                    </option>
                    <option value="Property Buy & Sell Legal Assistance">
                      Property Buy & Sell Legal Assistance
                    </option>
                    <option value="Loan Assistance Services">
                      Loan Assistance Services
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  style={{ cursor: "pointer" }}
                  className="form_button form_button_disabled text-white px-4 py-2 my-3 rounded-full w-full"
                >
                  {!isSuccess ? "Submit Request" : "Request Submitted"}
                </button>
              </form>
              {/* {isSuccess && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    id="toast-success"
                    className="animate-jump flex flex-col items-center w-auto p-10 mb-4 text-gray-500 bg-white/75 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800/90"
                    role="alert"
                  >
                    <div className="block hover:animate-jump items-center justify-center flex-shrink-0 w-28 h-28 text-green-500 bg-green-100/80 rounded-lg dark:bg-green-800/80 dark:text-green-200">
                      <svg
                        className="m-4 w-20 h-20"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="sr-only">Check icon</span>
                    </div>
                    <div className="mt-3 block text-sm font-bold">
                      Email sent successfully.
                    </div>
                    <button
                      type="button"
                      className="ml-auto absolute right-4 top-4 -mx-1.5 -my-1.5  text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white "
                      data-dismiss-target="#toast-success"
                      aria-label="Close"
                      onClick={() => setIsSuccess(false)}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )} */}
            </div>
          </div>
          <div className="contact_right basis-1/2 max-sm:basis-full mx-auto max-sm:mx-0 max-w-3xl  px-12 pr-24 max-sm:px-6 pt-0 pb-24 text-left md:pb-20 max-sm:pb-8">
            <div
              className="mb-6 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 00"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar07}
                  width={32}
                  height={32}
                  alt="Avatar 06"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
              Schedule a call with an expert
            </h2>
            <p className=" max-sm:hidden text-lg font-light text-gray-700 mt-4 font-(family-name:--font-content)">
              Here’s what you’ll learn from the call:
            </p>
            <div className="max-sm:hidden mt-4 font-(family-name:--font-content)">
              <ul className=" text-gray-700 text-lg">
                <li className="py-2 flex items-center">
                  <span className="inline-block mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path
                        d="M173.9 439.4l-166.4-166.4c-9.4-9.4-9.4-24.6 
                            0-33.9l33.9-33.9c9.4-9.4 24.6-9.4 
                            33.9 0L192 312.3 437.7 66.6c9.4-9.4 
                            24.6-9.4 33.9 0l33.9 33.9c9.4 9.4 
                            9.4 24.6 0 33.9L207.8 439.4c-9.4 
                            9.4-24.6 9.4-33.9 0z"
                      />
                    </svg>
                  </span>
                  <span>
                    Learn why SpotMySite is the top choice for absentee owners.
                  </span>
                </li>
                <li className="py-2 flex items-center">
                  <span className="inline-block mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path
                        d="M173.9 439.4l-166.4-166.4c-9.4-9.4-9.4-24.6 
           0-33.9l33.9-33.9c9.4-9.4 24.6-9.4 
           33.9 0L192 312.3 437.7 66.6c9.4-9.4 
           24.6-9.4 33.9 0l33.9 33.9c9.4 9.4 
           9.4 24.6 0 33.9L207.8 439.4c-9.4 
           9.4-24.6 9.4-33.9 0z"
                      />
                    </svg>
                  </span>
                  <span>
                    Learn about the best practices we follow for verification.
                  </span>
                </li>
                <li className="py-2 flex items-center">
                  <span className="inline-block mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path
                        d="M173.9 439.4l-166.4-166.4c-9.4-9.4-9.4-24.6 
           0-33.9l33.9-33.9c9.4-9.4 24.6-9.4 
           33.9 0L192 312.3 437.7 66.6c9.4-9.4 
           24.6-9.4 33.9 0l33.9 33.9c9.4 9.4 
           9.4 24.6 0 33.9L207.8 439.4c-9.4 
           9.4-24.6 9.4-33.9 0z"
                      />
                    </svg>
                  </span>
                  <span>
                    Learn what the service will cost you, with a clear
                    breakdown.
                  </span>
                </li>
                <li className="py-2 flex items-center">
                  <span className="inline-block mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path
                        d="M173.9 439.4l-166.4-166.4c-9.4-9.4-9.4-24.6 
           0-33.9l33.9-33.9c9.4-9.4 24.6-9.4 
           33.9 0L192 312.3 437.7 66.6c9.4-9.4 
           24.6-9.4 33.9 0l33.9 33.9c9.4 9.4 
           9.4 24.6 0 33.9L207.8 439.4c-9.4 
           9.4-24.6 9.4-33.9 0z"
                      />
                    </svg>
                  </span>
                  <span>
                    Learn how SpotMySite provides you with long-term support.
                  </span>
                </li>
                <li className="py-2 flex items-center">
                  <span className="inline-block mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path
                        d="M173.9 439.4l-166.4-166.4c-9.4-9.4-9.4-24.6 
           0-33.9l33.9-33.9c9.4-9.4 24.6-9.4 
           33.9 0L192 312.3 437.7 66.6c9.4-9.4 
           24.6-9.4 33.9 0l33.9 33.9c9.4 9.4 
           9.4 24.6 0 33.9L207.8 439.4c-9.4 
           9.4-24.6 9.4-33.9 0z"
                      />
                    </svg>
                  </span>
                  <span>
                    Learn how our dedicated team ensures your peace of mind.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
