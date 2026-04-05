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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    // try {
    //   const lang =
    //     navigator.language || (navigator.languages && navigator.languages[0]);
    //   if (lang && lang.includes("-")) {
    //     const cc = lang.split("-")[1].toLowerCase();
    //     setPhoneCountry(cc);
    //     return;
    //   }
    // } catch (e) {
    //   // ignore
    // }

    // Fallback: lightweight IP geolocation (no key) — replace with your own server API if preferred
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_code)
          setPhoneCountry(String(data.country_code).toLowerCase());
        if (data?.city) setCity(data.city);
        if (data?.region) setState(data.region);
        if (data?.country_name) setCountry(data.country_name);
      })
      .catch((error) => {
        console.log("Location fetch failed:", error);
        /* keep default */
      });
  }, []);
  const sendEmail = (e: any) => {
    if (isSubmitting || isSuccess) return;
    setIsSubmitting(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eyggq9s",
        "template_by6w9sp",
        form.current,
        "cwjwFqL7CjZlE5QXK",
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsSubmitting(false);
          form.current.reset();
          form.current.phone.value = "";
          setPhone("");
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
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
                <p className=" text-lg font-light text-gray-700 mt-4 font-(family-name:--font-content)">
                  Selling property should be clear, reliable, and
                  well-structured. At <b>SpotMySite</b>, we focus on verified
                  information and transparent communication so sellers can
                  connect with the right buyers without unnecessary
                  complications.
                </p>
                <div className=" mt-4 font-(family-name:--font-content)">
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
                    <li className="py-2 flex items-center ">
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
                    <li className="py-2 flex items-center ">
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
                    <input type="hidden" name="city" value={city} />
                    <input type="hidden" name="state" value={state} />
                    <input type="hidden" name="country" value={country} />
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
                      style={{
                        cursor:
                          isSubmitting || isSuccess ? "default" : "pointer",
                      }}
                      className={`form_button text-white px-4 py-2 my-3 rounded-full w-full ${
                        isSubmitting || isSuccess
                          ? "opacity-60 pointer-events-none"
                          : ""
                      }`}
                      disabled={isSubmitting || isSuccess}
                      aria-busy={isSubmitting}
                    >
                      {/* {!isSuccess ? "Submit" : "Registered Successfully"} */}
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : isSuccess ? (
                        "Request Submitted"
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </form>
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
