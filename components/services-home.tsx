"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import Service1 from "@/public/images/service_1.png";
import Service2 from "@/public/images/service_2.png";
import Service3 from "@/public/images/service_3.png";
import Service4 from "@/public/images/service_4.png";
import Service5 from "@/public/images/service_5.png";
import Service6 from "@/public/images/service_6.png";
import Service7 from "@/public/images/service_7.png";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServicePage from "./service-page";

export default function ServicesComponent() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const slideTo = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index - 1, 700);
    }
  };
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <section className="relative sec_services" id="services">
      <div className="mx-auto">
        <div className=" flex flex-row">
          {/* Section header */}
          <div className="services_left basis-1/2 mx-auto max-w-3xl px-12 pt-24 pb-0 mb-40 md:pl-52">
            {/* <h5 className=" font-bold text-gray-400 text-xl">Services</h5> */}
            <h2 className="text-3xl font-(family-name:--font-service) font-bold md:text-4xl">
              Our Services
            </h2>
            <div className="mt-2 mt-lg-8 font-(family-name:--font-service)">
              <a
                className="LinkListHover flex items-end border-b py-5 font-light text-gray-500 hover:text-gray-800 transition-all transition-discrete duration-700 ease-in-out"
                data-bs-toggle="modal"
                href="/services/property-video-inspection"
                onMouseEnter={() => slideTo(1)}
              >
                <span className="mb-1 text-base">01</span>
                <span className="mx-6 text-2xl">
                  Property Video Inspections
                </span>
                <svg
                  className="LinkListHover-module_arrow__WzHFX transition-lg h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12H20" stroke="currentColor"></path>
                  <path
                    d="M14.5 6L20.5 12L14.5 18"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="LinkListHover flex items-end border-b py-5 font-light text-gray-500 hover:text-gray-800 transition-all transition-discrete duration-700 ease-in-out"
                href="/services/land-status-check"
                onMouseEnter={() => slideTo(2)}
              >
                <span className="mb-1 text-base">02</span>
                <span className="mx-6 text-2xl">Land Status Check</span>
                <svg
                  className="LinkListHover-module_arrow__WzHFX transition-lg h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12H20" stroke="currentColor"></path>
                  <path
                    d="M14.5 6L20.5 12L14.5 18"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="LinkListHover flex items-end border-b py-5 font-light text-gray-500 hover:text-gray-800 transition-all transition-discrete duration-700 ease-in-out"
                href="/services/land-cleanup"
                onMouseEnter={() => slideTo(3)}
              >
                <span className="mb-1 text-base">03</span>
                <span className="mx-6 text-2xl">
                  Land Cleanup & Vegetation Removal
                </span>
                <svg
                  className="LinkListHover-module_arrow__WzHFX transition-lg h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12H20" stroke="currentColor"></path>
                  <path
                    d="M14.5 6L20.5 12L14.5 18"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="LinkListHover flex items-end border-b py-5 font-light text-gray-500 hover:text-gray-800 transition-all transition-discrete duration-700 ease-in-out"
                href="/services/fence-boundary-installation"
                onMouseEnter={() => slideTo(4)}
              >
                <span className="mb-1 text-base">04</span>
                <span className="mx-6 text-2xl">
                  Fence & Boundary Installation
                </span>
                <svg
                  className="LinkListHover-module_arrow__WzHFX transition-lg h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12H20" stroke="currentColor"></path>
                  <path
                    d="M14.5 6L20.5 12L14.5 18"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="LinkListHover flex items-end border-b py-5 font-light text-gray-500 hover:text-gray-800 transition-all transition-discrete duration-700 ease-in-out"
                href="/services/remote-buyer-walkthrough"
                onMouseEnter={() => slideTo(5)}
              >
                <span className="mb-1 text-base">05</span>
                <span className="mx-6 text-2xl">Remote Buyer Walkthrough</span>
                <svg
                  className="LinkListHover-module_arrow__WzHFX transition-lg h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12H20" stroke="currentColor"></path>
                  <path
                    d="M14.5 6L20.5 12L14.5 18"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="LinkListHover flex items-end border-b py-5 font-light text-gray-500 hover:text-gray-800 transition-all transition-discrete duration-700 ease-in-out"
                href="/services/property-buy-legal-assistance"
                onMouseEnter={() => slideTo(6)}
              >
                <span className="mb-1 text-base">06</span>
                <span className="mx-6 text-2xl">
                  Property Buy & Sell Legal Assistance
                </span>
                <svg
                  className="LinkListHover-module_arrow__WzHFX transition-lg h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12H20" stroke="currentColor"></path>
                  <path
                    d="M14.5 6L20.5 12L14.5 18"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                className="LinkListHover flex items-end border-b py-5 font-light text-gray-500 hover:text-gray-800 transition-all transition-discrete duration-700 ease-in-out"
                href="/services/loan-assistance"
                onMouseEnter={() => slideTo(7)}
              >
                <span className="mb-1 text-base">07</span>
                <span className="mx-6 text-2xl">Loan Assistance Services</span>
                <svg
                  className="LinkListHover-module_arrow__WzHFX transition-lg h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12H20" stroke="currentColor"></path>
                  <path
                    d="M14.5 6L20.5 12L14.5 18"
                    stroke="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Grid */}
          <div className="services_right basis-1/2 overflow-hidden px-12 pt-30 pb-0 text-left ">
            <>
              <Swiper
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                modules={[Virtual, Navigation]}
                onSwiper={setSwiperRef}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image className="relative" src={Service1} alt="Logo 01" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="relative" src={Service2} alt="Logo 01" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="relative" src={Service3} alt="Logo 01" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="relative" src={Service4} alt="Logo 01" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="relative" src={Service5} alt="Logo 01" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="relative" src={Service6} alt="Logo 01" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image className="relative" src={Service7} alt="Logo 01" />
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </div>
      {open && (
        <motion.div animate={{}} className="navigation">
          {/* <div className="navigation__checkbox"> */}
          <motion.label
            animate={{ translateX: "-5rem" }}
            transition={{ delay: 2, duration: 0.5 }}
            className="navigation__button"
            onClick={() => setOpen(!open)}
          >
            <span className="navigation__icon">&nbsp;</span>
          </motion.label>
          {/* </div> */}
          <motion.div
            animate={{ translateY: "-100vh", scale: 4, opacity: 0.95 }}
            transition={{
              duration: 0.25,
              scale: { delay: 0.5, duration: 0.75 },
            }}
            className="navigation__background"
          >
            &nbsp;
          </motion.div>
          <motion.div
            animate={{ scale: 9, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
              opacity: { duration: 1, delay: 0.75 },
            }}
            className="navigation__background2 "
          >
            &nbsp;
          </motion.div>
          <motion.div
            animate={{ display: "block" }}
            transition={{ delay: 2, duration: 0.2 }}
            className="navigation__nav p-36 pt-12"
          >
            {(() => {
              switch (activeSlide) {
                case 1:
                  return (
                    <div className="">
                      <h2 className="mb-6 text-xl font-bold ">
                        Real Eyes on Your Property - Even When You’re Miles Away
                      </h2>
                      <p>
                        Whether you’re an NRI, a remote landlord, or an investor
                        managing properties from overseas, the biggest challenge
                        you face is visibility. You rely on second-hand updates,
                        tenant messages, or infrequent visits to know what’s
                        happening inside your apartment or house.
                        <br />
                        <br />
                        With SpotMySite’s Property Video Inspections, you don’t
                        have to wonder. We deliver timestamped HD walkthroughs,
                        GPS-tagged images, and inspection notes, so you know the
                        real condition of your home, flat, or rental.
                        <br />
                        <br />
                        <strong>What Is a Property Video Inspection?</strong>
                        <br />A complete walkthrough of your property by a
                        trained, uniformed SpotMySite inspector, covering:
                        <ul>
                          <li>Main entry, doors, and security grills</li>
                          <li>Living rooms, bedrooms, kitchen & bathrooms</li>
                          <li>Utility areas, balconies, storage spaces</li>
                          <li>Cleanliness, damage, or maintenance issues</li>
                          <li>
                            Tenant confirmation & property condition (if
                            occupied)
                          </li>
                        </ul>
                        Inspections are conducted transparently and, if
                        occupied, with tenant consent.
                        <br />
                        <br />
                        <strong>What You Receive</strong>
                        <ul>
                          <li>A full HD video walkthrough of your unit</li>
                          <li>
                            Still images of specific concerns (e.g., damage,
                            mess, or maintenance issues)
                          </li>
                          <li>
                            Notes about observations (e.g., wall stains, leak
                            indicators, misuse)
                          </li>
                          <li>A location-stamped inspection summary</li>
                          <li>Optional: Live video call walkthrough</li>
                          <li>Secure delivery via encrypted cloud link</li>
                        </ul>
                        <strong>Who This Is For</strong>
                        <ul>
                          <li>NRIs owning apartments or houses in India</li>
                          <li>
                            Remote landlords managing rental flats or vacant
                            homes
                          </li>
                          <li>Investors needing periodic condition checks</li>
                          <li>
                            Sellers wanting property condition proof for buyers
                          </li>
                        </ul>
                        <strong>How It Works</strong>
                        <ul>
                          <li>
                            Request an Inspection - Submit via our portal or
                            WhatsApp
                          </li>
                          <li>
                            Access Coordination - We arrange entry with
                            tenant/caretaker
                          </li>
                          <li>
                            On-Site Visit - Professional inspection, respectful
                            tenant handling
                          </li>
                          <li>
                            Delivery - Secure report within 24–48 hours (rush
                            options available)
                          </li>
                        </ul>
                        <strong>Why SpotMySite?</strong>
                        <br />
                        Every SpotMySite inspector is background-verified,
                        uniformed, and trained to handle tenant coordination
                        with professionalism and courtesy. We never store your
                        video on personal devices, and we only share links with
                        verified owners.
                        <br />
                        <br />
                        <strong>See It for Yourself</strong>
                        <br />
                        With SpotMySite’s Property Video Inspections, you don’t
                        have to rely on phone calls or vague messages. You get
                        real, visual proof so you can take decisions confidently
                        and stay connected with your asset, even from 10,000
                        miles away.
                        <br />
                        <br />
                        <strong>Request Your Inspection Today</strong> and know
                        exactly what’s happening inside your property without
                        flying across the world.
                      </p>
                    </div>
                  );
                case 2:
                  return <ServicePage />;
                case 3:
                  return <></>;
                case 4:
                  return <></>;
                case 5:
                  return <></>;
                case 6:
                  return <></>;
                case 7:
                  return <></>;
                default:
                  return null;
              }
            })()}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
