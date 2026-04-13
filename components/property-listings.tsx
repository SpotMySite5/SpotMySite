"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiMoneyWavy } from "react-icons/pi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServicePage from "./service-page";
import DropList from "./dropdown";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { BsBuildings } from "react-icons/bs";
import { PiBathtub } from "react-icons/pi";
import { TbBed } from "react-icons/tb";
import { TbTag } from "react-icons/tb";

const LocationOptions = [
  { id: 0, name: "All" },
  { id: 1, name: "Andhra Pradesh" },
  { id: 2, name: "Telangana" },
];

const PropertyTypeOptions = [
  { id: 0, name: "All" },
  { id: 1, name: "Apartment" },
  { id: 2, name: "House" },
  { id: 3, name: "Villa" },
  { id: 4, name: "Office" },
  { id: 5, name: "Land" },
  { id: 6, name: "Commercial" },
];

const TypeOptions = [
  { id: 0, name: "All" },
  { id: 1, name: "For Sale" },
  { id: 2, name: "For Rent" },
  { id: 3, name: "Lease" },
];

export default function PropertyListing({ posts }: { posts: any[] }) {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<{
    id: string | number;
    name: string;
  } | null>(null);
  const [propertyType, setPropertyType] = useState<{
    id: string | number;
    name: string;
  } | null>(null);
  const [type, setType] = useState<{
    id: string | number;
    name: string;
  } | null>(null);
  const displayedPosts = React.useMemo(() => {
    return posts.filter((p) => {
      if (location && Number(location.id) !== 0) {
        const needle = String(location.name || "").toLowerCase();
        if (
          !String(p.location || "")
            .toLowerCase()
            .includes(needle)
        ) {
          return false;
        }
      }
      if (propertyType && Number(propertyType.id) !== 0) {
        const needle = String(propertyType.name || "").toLowerCase();
        if (
          !String(p.propertyDetails?.type || "")
            .toLowerCase()
            .includes(needle)
        ) {
          return false;
        }
      }
      if (type && Number(type.id) !== 0) {
        const needle = String(type.name || "").toLowerCase();
        if (
          !String(p.type || "")
            .toLowerCase()
            .includes(needle)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [posts, location, propertyType, type]);
  return (
    <section
      className="relative sec_services min-h-screen max-lg:h-auto max-lg:min-h-auto lg:min-h-auto xl:container xl:mx-auto px-6"
      id="services"
    >
      <div className="grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0 gap-4 mt-5">
        <div className="col-span-1 col-start-2 max-sm:col-start-1 ...">
          <DropList
            items={LocationOptions}
            value={location}
            onChange={(item) => setLocation(item)}
            label="Location"
            labelIcon={
              <HiOutlineLocationMarker className=" size-5 inline-block pb-0.5" />
            }
          />
        </div>
        <div className="col-span-1  ...">
          <DropList
            items={PropertyTypeOptions}
            value={propertyType}
            onChange={(item) => setPropertyType(item)}
            label="Property"
            labelIcon={<GoHome className=" inline-block pb-0.5" />}
          />
        </div>
        <div className="col-span-1  ...">
          <DropList
            items={TypeOptions}
            value={type}
            onChange={(item) => setType(item)}
            label="Type"
            labelIcon={<PiMoneyWavy className=" inline-block pb-0.5" />}
          />
        </div>
      </div>

      <div className="mx-auto py-15">
        <section className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-16">
              <style>{`
              /* add a small clock icon before the post date */
              // .property{
              // clip-path: polygon(0% 15%, 0 0, 15% 0%, 68% 0, 68% 15%, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%);
              // }
              .framer-1akxqqy {
                  z-index: 1;
                  flex-flow: row;
                  flex: none;
                  padding: 0 0 10px 10px;
                  display: flex;
                  position: absolute;
                  top: 0;
                  right: 0;
                  overflow: visible;
              }
              .framer-1akxqqy .framer-1cj92gu-container {
                  z-index: 1;
                  flex: none;
                  width: auto;
                  height: auto;
                  position: absolute;
                  top: 0;
                  left: -12px;
              }
                  .framer-1akxqqy .framer-1f3dnez-container {
                  z-index: 1;
                  flex: none;
                  width: auto;
                  height: auto;
                  position: absolute;
                  bottom: -12px;
                  right: 0;
              }
                  .framer-1akxqqy .framer-fdkupx-container {
                  flex: none;
                  width: auto;
                  height: auto;
                  position: relative;
              }
                  .framer-0lLWZ.framer-i5d1ea {
                  flex-flow: row;
                  padding: 0;
                  display: flex;
                  position: relative;
                  overflow: hidden;
              }
                  .framer-0lLWZ .framer-3s25jn {
                  flex: none;
                  width: 12px;
                  height: 12px;
                  position: relative;
              }
                  .framer-JQvr1.framer-1ahum03 {
                  will-change: var(--framer-will-change-override, transform);
                  flex-flow: row;
                  place-content: center flex-start;
                  padding: 5px 13px;
                  display: flex;
                  position: relative;
                  overflow: hidden;
              }
            `}</style>
              {displayedPosts.map((post) => (
                <article
                  key={post.id}
                  // shadow hover:shadow-lg transition-shadow
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.15) -14px 14px 20px -10px",
                  }}
                  className="property relative group rounded-lg  overflow-hidden   bg-white"
                >
                  <div
                    className="framer-1akxqqy"
                    data-framer-name="Tag Wrapper"
                    style={{
                      backgroundColor: "#f9fafb",
                      borderBottomLeftRadius: "17px",
                      borderBottomRightRadius: "0px",
                      opacity: 1,
                      willChange: "auto",
                    }}
                  >
                    <div
                      className="framer-1cj92gu-container"
                      style={{ opacity: 1 }}
                    >
                      <div
                        className="framer-0lLWZ framer-i5d1ea framer-v-1tq5uir"
                        data-framer-name="Top Right"
                        style={{ transform: "rotate(90deg)", opacity: 1 }}
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="corner"
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: 0,
                            opacity: 1,
                          }}
                          className="framer-3s25jn"
                          aria-hidden="true"
                        >
                          <div
                            className="svgContainer"
                            style={{
                              width: "100%",
                              height: "100%",
                              aspectRatio: "inherit",
                            }}
                          >
                            {/* <svg style={{ width: "100%", height: "100%" }}>
                              <use href="#svg9185077592" />
                            </svg> */}
                            <svg
                              viewBox="0 0 12 12"
                              id="svg9185077592"
                              style={{ width: "100%", height: "100%" }}
                            >
                              <path
                                d="M 0 0 L 12 0 C 5.443 0.168 0.168 5.443 0 12 Z"
                                fill="var(--token-cef92a4d-d47e-40c4-9eae-b4ff7c06350d, rgb(246, 246, 246))"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="framer-1f3dnez-container"
                      style={{ opacity: 1 }}
                    >
                      <div
                        className="framer-0lLWZ framer-i5d1ea framer-v-1tq5uir"
                        data-framer-name="Top Right"
                        style={{ transform: "rotate(90deg)", opacity: 1 }}
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="corner"
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: 0,
                            opacity: 1,
                          }}
                          className="framer-3s25jn"
                          aria-hidden="true"
                        >
                          <div
                            className="svgContainer"
                            style={{
                              width: "100%",
                              height: "100%",
                              aspectRatio: "inherit",
                            }}
                          >
                            <svg style={{ width: "100%", height: "100%" }}>
                              <use href="#svg9185077592" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="framer-fdkupx-container"
                      style={{ opacity: 1 }}
                    >
                      <div
                        className="framer-JQvr1 framer-Mdslh framer-1ahum03 framer-v-1ahum03"
                        data-framer-name="For Sale"
                        style={{
                          backgroundColor: "var(--navbar-bg)",
                          borderRadius: "9px",
                          opacity: 1,
                        }}
                      >
                        <div
                          className="framer-1hc7bsn"
                          style={{
                            // extracted color variable
                            // --extracted-r6o4lv handled by CSS var
                            transform: "none",
                            opacity: 1,
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-95voci text-xs"
                            data-styles-preset="gJStRa1UW"
                            style={{
                              color: "#fff",
                            }}
                          >
                            Verified
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href={post.url} className="block">
                    <img
                      src={post.propertyImage}
                      alt={post.title}
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <p className="text-xs text-gray-500 mb-2">
                        <MdOutlineLocationOn className=" size-4 inline-block pb-0.5" />
                        {post.location}
                      </p>
                      <div className="grid grid-flow-col grid-rows-2 gap-1">
                        <div className="col-span-2 text-sm">
                          <BsBuildings className=" size-5 inline-block pb-0.5 pr-1" />
                          {post.propertyDetails?.type}
                        </div>
                        <div className="col-span-2  text-sm">
                          <TbTag className=" size-5 inline-block pb-0.5 pr-1" />
                          {post.type}
                        </div>
                        <div className="col-span-2 text-sm">
                          <BiArea className=" size-5 inline-block pb-0.5 pr-1" />
                          {post.propertyDetails?.builtArea}
                        </div>
                        <div className="col-span-2  text-sm">
                          <TbBed className=" size-5 inline-block pb-0.5 pr-1" />
                          {post.propertyDetails?.bedrooms ?? 0}
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <PiBathtub className=" size-5 inline-block pb-0.5 pr-1" />
                          {post.propertyDetails?.bathrooms ?? 0}
                        </div>
                        <div className="row-span-2 flex items-center justify-end ">
                          <p className="text-right text-xl font-semibold items-center">
                            &#8377;{post.price}
                          </p>
                        </div>
                      </div>

                      <hr className="mt-1" />
                      <h3 className="mt-2 text-md font-semibold">
                        {post.title}
                      </h3>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            {/* Pagination (simple) */}
            <nav aria-label="Pagination" className="flex justify-center">
              <ul className="inline-flex items-center gap-2">
                <li>
                  <a className="px-3 py-2 rounded border bg-gray-200 text-sm">
                    &lt;
                  </a>
                </li>
                <li>
                  <a
                    className="px-3 py-2 rounded border  bg-black text-white text-sm"
                    href="/blog?page=1"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 rounded border bg-gray-200 text-sm">
                    &gt;
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
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
        </motion.div>
      )}
    </section>
  );
}
