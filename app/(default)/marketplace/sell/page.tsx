"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import MarketBanner from "@/components/market-banner";
import Logo1 from "@/public/images/logo-dark.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SellPage() {
  const form = useRef<any>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneCountry, setPhoneCountry] = useState<string>("in");

  useEffect(() => {
    try {
      const lang =
        navigator.language || (navigator.languages && navigator.languages[0]);
      if (lang && lang.includes("-")) {
        const cc = lang.split("-")[1].toLowerCase();
        setPhoneCountry(cc);
        return;
      }
    } catch (e) {
      // ignore
    }

    // Fallback: lightweight IP geolocation (no key) — replace with your own server API if preferred
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_code)
          setPhoneCountry(String(data.country_code).toLowerCase());
      })
      .catch(() => {
        /* keep default */
      });
  }, []);
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_etuvfw6",
        "template_0fyld1j",
        form.current,
        "XBb9BjDVKrM6DHOcf",
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          form.current.reset();
          form.current.phone.value = "";
          setPhone("");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <>
      <div className="container-fluid">
        <MarketBanner />
        <section
          className="relative sec_services mt-10 xl:container xl:mx-auto"
          id="contact"
        >
          <div className="mx-auto">
            <div className=" flex flex-row pt-0 max-md:pt-0 max-lg:pt-10 max-lg:flex-col-reverse">
              {/* Section header */}

              {/* Grid */}
              <div className="basis-1/2 max-md:basis-full overflow-hidden mx-auto max-md:mx-0 px-12 max-lg:px-12 max-md:px-6 pt-0 pb-24 max-md:pb-10 max-lg:pb-10 ">
                <h2 className="text-3xl font-bold md:text-4xl font-(family-name:--font-heading)">
                  How We Work's
                </h2>
                <p className=" max-md:hidden text-lg font-light text-gray-700 mt-4 font-(family-name:--font-content)">
                  Selling property should be clear, reliable, and
                  well-structured. At <b>SpotMySite</b>, we focus on verified
                  information and transparent communication so sellers can
                  connect with the right buyers without unnecessary
                  complications.
                </p>
                <div className="max-md:hidden mt-4 font-(family-name:--font-content)">
                  <ul className=" text-gray-700 text-lg">
                    <li className="py-2 flex items-center">
                      <span className="inline-block mr-4">
                        <p className="mx-auto py-2 px-3 w-10 h-10 rounded-full bg-gray-200">
                          <span className="text-lg font-semibold">01</span>
                        </p>
                      </span>
                      <span>
                        Property ownership and documents are reviewed before
                        listing.
                      </span>
                    </li>
                    <li className="py-2 flex items-center max-lg:hidden">
                      <span className="inline-block mr-4">
                        <p className="mx-auto py-2 px-3 w-10 h-10 rounded-full bg-gray-200">
                          <span className="text-lg font-semibold">02</span>
                        </p>
                      </span>
                      <span>
                        We prepare a clear and structured property listing.
                      </span>
                    </li>
                    <li className="py-2 flex items-center">
                      <span className="inline-block mr-4">
                        <p className="mx-auto py-2 px-3 w-10 h-10 rounded-full bg-gray-200">
                          <span className="text-lg font-semibold">03</span>
                        </p>
                      </span>
                      <span>
                        Your property is introduced to genuine buyers actively
                        searching.
                      </span>
                    </li>
                    <li className="py-2 flex items-center max-lg:hidden">
                      <span className="inline-block mr-4">
                        <p className="mx-auto py-2 px-3 w-10 h-10 rounded-full bg-gray-200">
                          <span className="text-lg font-semibold">04</span>
                        </p>
                      </span>
                      <span>
                        Our team supports you through discussions and final
                        closure.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact_right basis-1/2 max-md:basis-full mx-auto max-md:mx-0 max-w-3xl  px-12 max-md:px-6 pt-0 pb-24 text-left md:pb-20 max-md:pb-8">
                <div className="bg-white rounded-xl shadow-lg p-8 drop-shadow-xl">
                  <div className="mb-2 flex justify-center">
                    {/* <Image
                      className="relative"
                      height={60}
                      src={Logo1}
                      alt="Logo 01"
                    /> */}
                    <h2 className="text-2xl font-bold font-(family-name:--font-heading)">
                      Start Your Property Listing
                    </h2>
                    <p className="absolute -bottom-2 w-1/2 h-1 bg-(--primary-color) rounded-full"></p>
                  </div>
                  <hr className="mb-6 border-gray-200" />
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4 flex gap-4">
                      <div className="w-full">
                        <label
                          className="block text-gray-700 mb-2"
                          htmlFor="firstName"
                        >
                          Name
                        </label>
                        <input
                          className="w-full px-3 py-2 border rounded"
                          type="text"
                          id="firstname"
                          name="firstname"
                          required
                        />
                      </div>
                      {/* <div className="w-1/2">
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
                  </div> */}
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="email"
                      >
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
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <PhoneInput
                        placeholder="Enter phone number"
                        inputClass="w-full px-3 py-5 border rounded"
                        inputStyle={{
                          width: "100%",
                          border: "1px solid #6a7282",
                        }}
                        buttonStyle={{
                          border: "1px solid #6a7282",
                          borderRadius: "5px 0 0 5px",
                        }}
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: false,
                        }}
                        country={phoneCountry}
                        countryCodeEditable={false}
                        value={phone}
                        onChange={setPhone}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="location"
                      >
                        Property Location
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
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="service"
                      >
                        Property Type
                      </label>
                      <select
                        className="w-full px-3 py-2 border rounded"
                        id="service"
                        name="service"
                        required
                      >
                        <option value="">Select property type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Independent House">
                          Independent House
                        </option>
                        <option value="Plot">Plot</option>
                        <option value="Farm Land">Farm Land</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                    {/* Add message field */}
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-3 py-2 border rounded"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      style={{ cursor: "pointer" }}
                      className="form_button form_button_disabled text-white px-4 py-2 my-3 rounded-full w-full"
                    >
                      {!isSuccess ? "Submit Request" : "Request Submitted"}
                    </button>
                  </form>
                  {isSuccess && (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      /> */}
    </>
  );
}
