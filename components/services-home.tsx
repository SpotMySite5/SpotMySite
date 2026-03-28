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
import Service8 from "@/public/images/service_8.png";
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
    <section
      className="relative sec_services min-h-screen max-lg:h-auto max-lg:min-h-auto lg:min-h-auto xl:container xl:mx-auto"
      id="services"
    >
      <div className="mx-auto">
        <div className=" flex flex-row">
          {/* Section header */}
          <div className="services_left basis-1/2 max-md:basis-full mx-auto max-w-3xl px-12 pt-24 max-lg:pl-24 max-lg:pr-24 max-md:pt-8 max-md:px-6 pb-0 mb-40  max-lg:mb-10">
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
                <span className="mb-1 text-base max-md:text-sm">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzQzXzI0MiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2Ij4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF80M18yNDIpIj4KPHBhdGggZD0iTTIwLjk5OTggMzkuNjY2OEgyNS42NjY1VjMyLjAyNTJMMzIuNjY2NSAzNi4wNTAyTDM0Ljk5OTggMzIuMDI1MkwyNy45OTk4IDI4LjAwMDJMMzQuOTk5OCAyMy45NzUyTDMyLjY2NjUgMTkuOTUwMkwyNS42NjY1IDIzLjk3NTJWMTYuMzMzNUgyMC45OTk4VjIzLjk3NTJMMTMuOTk5OCAxOS45NTAyTDExLjY2NjUgMjMuOTc1MkwxOC42NjY1IDI4LjAwMDJMMTEuNjY2NSAzMi4wMjUyTDEzLjk5OTggMzYuMDUwMkwyMC45OTk4IDMyLjAyNTJWMzkuNjY2OFpNOS4zMzMxNyA0Ni42NjY4QzguMDQ5ODQgNDYuNjY2OCA2Ljk1MTIzIDQ2LjIwOTkgNi4wMzczNCA0NS4yOTZDNS4xMjM0NSA0NC4zODIxIDQuNjY2NSA0My4yODM1IDQuNjY2NSA0Mi4wMDAyVjE0LjAwMDJDNC42NjY1IDEyLjcxNjggNS4xMjM0NSAxMS42MTgyIDYuMDM3MzQgMTAuNzA0M0M2Ljk1MTIzIDkuNzkwNDQgOC4wNDk4NCA5LjMzMzUgOS4zMzMxNyA5LjMzMzVIMzcuMzMzMkMzOC42MTY1IDkuMzMzNSAzOS43MTUxIDkuNzkwNDQgNDAuNjI5IDEwLjcwNDNDNDEuNTQyOSAxMS42MTgyIDQxLjk5OTggMTIuNzE2OCA0MS45OTk4IDE0LjAwMDJWMjQuNTAwMkw1MS4zMzMyIDE1LjE2NjhWNDAuODMzNUw0MS45OTk4IDMxLjUwMDJWNDIuMDAwMkM0MS45OTk4IDQzLjI4MzUgNDEuNTQyOSA0NC4zODIxIDQwLjYyOSA0NS4yOTZDMzkuNzE1MSA0Ni4yMDk5IDM4LjYxNjUgNDYuNjY2OCAzNy4zMzMyIDQ2LjY2NjhIOS4zMzMxN1oiIGZpbGw9IiMyRjQ1NUYiLz4KPC9nPgo8L3N2Zz4K"
                      width="25"
                      height="25"
                    />
                  </svg>
                </span>
                <span className="mx-6 text-2xl max-md:text-lg">
                  Property&nbsp;Video&nbsp;Inspections
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
                <span className="mb-1 text-base max-md:text-sm">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzQ0XzM0NiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2Ij4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF80NF8zNDYpIj4KPHBhdGggZD0iTTI3Ljk5OTggNTEuMzMzMkMyMy44Nzc2IDUxLjMzMzIgMjAuNTEzNyA1MC42ODE4IDE3LjkwODIgNDkuMzc5QzE1LjMwMjYgNDguMDc2MiAxMy45OTk4IDQ2LjM5NDMgMTMuOTk5OCA0NC4zMzMyQzEzLjk5OTggNDMuMzk5OCAxNC4yODE4IDQyLjUzNDYgMTQuODQ1NyA0MS43MzczQzE1LjQwOTYgNDAuOTQwMSAxNi4xOTcxIDQwLjI0OTggMTcuMjA4MiAzOS42NjY1TDIwLjg4MzIgNDMuMTA4MkMyMC41MzMyIDQzLjI2MzcgMjAuMTU0IDQzLjQzODcgMTkuNzQ1NyA0My42MzMyQzE5LjMzNzMgNDMuODI3NiAxOS4wMTY1IDQ0LjA2MDkgMTguNzgzMiA0NC4zMzMyQzE5LjI4ODcgNDQuOTU1NCAyMC40NTU0IDQ1LjQ5OTggMjIuMjgzMiA0NS45NjY1QzI0LjExMDkgNDYuNDMzMiAyNi4wMTY1IDQ2LjY2NjUgMjcuOTk5OCA0Ni42NjY1QzI5Ljk4MzIgNDYuNjY2NSAzMS44OTg0IDQ2LjQzMzIgMzMuNzQ1NyA0NS45NjY1QzM1LjU5MjkgNDUuNDk5OCAzNi43NjkzIDQ0Ljk1NTQgMzcuMjc0OCA0NC4zMzMyQzM3LjAwMjYgNDQuMDIyMSAzNi42NTI2IDQzLjc2OTMgMzYuMjI0OCA0My41NzQ4QzM1Ljc5NzEgNDMuMzgwNCAzNS4zODg3IDQzLjIwNTQgMzQuOTk5OCA0My4wNDk4TDM4LjYxNjUgMzkuNTQ5OEMzOS43MDU0IDQwLjE3MjEgNDAuNTQxNSA0MC44ODE4IDQxLjEyNDggNDEuNjc5QzQxLjcwODIgNDIuNDc2MiA0MS45OTk4IDQzLjM2MDkgNDEuOTk5OCA0NC4zMzMyQzQxLjk5OTggNDYuMzk0MyA0MC42OTcxIDQ4LjA3NjIgMzguMDkxNSA0OS4zNzlDMzUuNDg1OSA1MC42ODE4IDMyLjEyMjEgNTEuMzMzMiAyNy45OTk4IDUxLjMzMzJaTTI3Ljk5OTggNDQuMzMzMkMyMi41MTY1IDQwLjI4ODcgMTguNDIzNCAzNi4zNjA5IDE1LjcyMDcgMzIuNTQ5OEMxMy4wMTc5IDI4LjczODcgMTEuNjY2NSAyNS4wMDU0IDExLjY2NjUgMjEuMzQ5OEMxMS42NjY1IDE4LjU4ODcgMTIuMTYyMyAxNi4xNjc5IDEzLjE1NCAxNC4wODczQzE0LjE0NTcgMTIuMDA2OCAxNS40MTkzIDEwLjI2NjUgMTYuOTc0OCA4Ljg2NjVDMTguNTMwNCA3LjQ2NjUgMjAuMjgwNCA2LjQxNjUgMjIuMjI0OCA1LjcxNjVDMjQuMTY5MyA1LjAxNjUgMjYuMDk0MyA0LjY2NjUgMjcuOTk5OCA0LjY2NjVDMjkuOTA1NCA0LjY2NjUgMzEuODMwNCA1LjAxNjUgMzMuNzc0OCA1LjcxNjVDMzUuNzE5MyA2LjQxNjUgMzcuNDY5MyA3LjQ2NjUgMzkuMDI0OCA4Ljg2NjVDNDAuNTgwNCAxMC4yNjY1IDQxLjg1NCAxMi4wMDY4IDQyLjg0NTcgMTQuMDg3M0M0My44MzczIDE2LjE2NzkgNDQuMzMzMiAxOC41ODg3IDQ0LjMzMzIgMjEuMzQ5OEM0NC4zMzMyIDI1LjAwNTQgNDIuOTgxOCAyOC43Mzg3IDQwLjI3OSAzMi41NDk4QzM3LjU3NjIgMzYuMzYwOSAzMy40ODMyIDQwLjI4ODcgMjcuOTk5OCA0NC4zMzMyWk0yNy45OTk4IDI1LjY2NjVDMjkuMjgzMiAyNS42NjY1IDMwLjM4MTggMjUuMjA5NiAzMS4yOTU3IDI0LjI5NTdDMzIuMjA5NiAyMy4zODE4IDMyLjY2NjUgMjIuMjgzMiAzMi42NjY1IDIwLjk5OThDMzIuNjY2NSAxOS43MTY1IDMyLjIwOTYgMTguNjE3OSAzMS4yOTU3IDE3LjcwNEMzMC4zODE4IDE2Ljc5MDEgMjkuMjgzMiAxNi4zMzMyIDI3Ljk5OTggMTYuMzMzMkMyNi43MTY1IDE2LjMzMzIgMjUuNjE3OSAxNi43OTAxIDI0LjcwNCAxNy43MDRDMjMuNzkwMSAxOC42MTc5IDIzLjMzMzIgMTkuNzE2NSAyMy4zMzMyIDIwLjk5OThDMjMuMzMzMiAyMi4yODMyIDIzLjc5MDEgMjMuMzgxOCAyNC43MDQgMjQuMjk1N0MyNS42MTc5IDI1LjIwOTYgMjYuNzE2NSAyNS42NjY1IDI3Ljk5OTggMjUuNjY2NVoiIGZpbGw9IiMyRjQ1NUYiLz4KPC9nPgo8L3N2Zz4K"
                      width="25"
                      height="25"
                    />
                  </svg>
                </span>
                <span className="mx-6 text-2xl max-md:text-lg">
                  Land&nbsp;Status&nbsp;Check
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
                href="/services/land-cleanup"
                onMouseEnter={() => slideTo(3)}
              >
                <span className="mb-1 text-base max-md:text-sm">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzQ0XzM1MCIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2Ij4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF80NF8zNTApIj4KPHBhdGggZD0iTTguMjgzMzUgNDkuMDAwMkgxNFY0NC4zMzM1QzE0IDQzLjY3MjQgMTQuMjIzNiA0My4xMTgyIDE0LjY3MDkgNDIuNjcxQzE1LjExODEgNDIuMjIzOCAxNS42NzIyIDQyLjAwMDIgMTYuMzMzNCA0Mi4wMDAyQzE2Ljk5NDUgNDIuMDAwMiAxNy41NDg2IDQyLjIyMzggMTcuOTk1OSA0Mi42NzFDMTguNDQzMSA0My4xMTgyIDE4LjY2NjcgNDMuNjcyNCAxOC42NjY3IDQ0LjMzMzVWNDkuMDAwMkgyNS42NjY3VjQ0LjMzMzVDMjUuNjY2NyA0My42NzI0IDI1Ljg5MDMgNDMuMTE4MiAyNi4zMzc1IDQyLjY3MUMyNi43ODQ3IDQyLjIyMzggMjcuMzM4OSA0Mi4wMDAyIDI4IDQyLjAwMDJDMjguNjYxMSA0Mi4wMDAyIDI5LjIxNTMgNDIuMjIzOCAyOS42NjI1IDQyLjY3MUMzMC4xMDk3IDQzLjExODIgMzAuMzMzNCA0My42NzI0IDMwLjMzMzQgNDQuMzMzNVY0OS4wMDAySDM3LjMzMzRWNDQuMzMzNUMzNy4zMzM0IDQzLjY3MjQgMzcuNTU3IDQzLjExODIgMzguMDA0MiA0Mi42NzFDMzguNDUxNCA0Mi4yMjM4IDM5LjAwNTYgNDIuMDAwMiAzOS42NjY3IDQyLjAwMDJDNDAuMzI3OCA0Mi4wMDAyIDQwLjg4MiA0Mi4yMjM4IDQxLjMyOTIgNDIuNjcxQzQxLjc3NjQgNDMuMTE4MiA0MiA0My42NzI0IDQyIDQ0LjMzMzVWNDkuMDAwMkg0Ny43MTY3TDQ1LjM4MzQgMzkuNjY2OEgxMC42MTY3TDguMjgzMzUgNDkuMDAwMlpNNDcuNzE2NyA1My42NjY4SDguMjgzMzVDNi43NjY2OSA1My42NjY4IDUuNTQxNjkgNTMuMDY0MSA0LjYwODM1IDUxLjg1ODVDMy42NzUwMiA1MC42NTI5IDMuNDAyOCA0OS4zMTEzIDMuNzkxNjkgNDcuODMzNUw3LjAwMDAyIDM1LjAwMDJWMzAuMzMzNUM3LjAwMDAyIDI5LjA1MDIgNy40NTY5NiAyNy45NTE2IDguMzcwODUgMjcuMDM3N0M5LjI4NDc0IDI2LjEyMzggMTAuMzgzNCAyNS42NjY4IDExLjY2NjcgMjUuNjY2OEgyMVY5LjMzMzVDMjEgNy4zODkwNSAyMS42ODA2IDUuNzM2MjcgMjMuMDQxNyA0LjM3NTE2QzI0LjQwMjggMy4wMTQwNSAyNi4wNTU2IDIuMzMzNSAyOCAyLjMzMzVDMjkuOTQ0NSAyLjMzMzUgMzEuNTk3MiAzLjAxNDA1IDMyLjk1ODQgNC4zNzUxNkMzNC4zMTk1IDUuNzM2MjcgMzUgNy4zODkwNSAzNSA5LjMzMzVWMjUuNjY2OEg0NC4zMzM0QzQ1LjYxNjcgMjUuNjY2OCA0Ni43MTUzIDI2LjEyMzggNDcuNjI5MiAyNy4wMzc3QzQ4LjU0MzEgMjcuOTUxNiA0OSAyOS4wNTAyIDQ5IDMwLjMzMzVWMzUuMDAwMkw1Mi4yMDg0IDQ3LjgzMzVDNTIuNzEzOSA0OS4zMTEzIDUyLjQ5MDMgNTAuNjUyOSA1MS41Mzc1IDUxLjg1ODVDNTAuNTg0NyA1My4wNjQxIDQ5LjMxMTEgNTMuNjY2OCA0Ny43MTY3IDUzLjY2NjhaIiBmaWxsPSIjMkY0NTVGIi8+CjwvZz4KPC9zdmc+Cg=="
                      width="25"
                      height="25"
                    />
                  </svg>
                </span>
                <span className="mx-6 text-2xl max-md:text-lg">
                  Land&nbsp;Cleanup&nbsp;&&nbsp;Vegetation&nbsp;Removal
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
                <span className="mb-1 text-base max-md:text-sm">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzQ0XzM1NCIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2Ij4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF80NF8zNTQpIj4KPHBhdGggZD0iTTQuNjY2MDIgNDlIMTguNjY2VjE0TDExLjY2NiA3TDQuNjY2MDIgMTRWNDlaTTIwLjk5OTMgNDlIMzQuOTk5M1YxNEwyNy45OTkzIDdMMjAuOTk5MyAxNFY0OVpNMzcuMzMyNyA0OUg1MS4zMzI3VjE0TDQ0LjMzMjcgN0wzNy4zMzI3IDE0VjQ5WiIgZmlsbD0iIzJGNDU1RiIvPgo8L2c+Cjwvc3ZnPgo="
                      width="25"
                      height="25"
                    />
                  </svg>
                </span>
                <span className="mx-6 text-2xl max-md:text-lg">
                  Fence&nbsp;&&nbsp;Boundary&nbsp;Installation
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
                <span className="mb-1 text-base max-md:text-sm">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzQ0XzM2NiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2Ij4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF80NF8zNjYpIj4KPHBhdGggZD0iTTkuMzMzNSA0OVYyMUwyOC4wMDAyIDdMNDYuNjY2OCAyMVY0OUg5LjMzMzVaTTIxLjAwMDIgMzkuNjY2N0gzMC4zMzM1QzMwLjk5NDYgMzkuNjY2NyAzMS41NDg4IDM5LjQ0MzEgMzEuOTk2IDM4Ljk5NThDMzIuNDQzMiAzOC41NDg2IDMyLjY2NjggMzcuOTk0NCAzMi42NjY4IDM3LjMzMzNWMzVMMzcuMzMzNSAzNy40NVYyNy44ODMzTDMyLjY2NjggMzAuMzMzM1YyOEMzMi42NjY4IDI3LjMzODkgMzIuNDQzMiAyNi43ODQ3IDMxLjk5NiAyNi4zMzc1QzMxLjU0ODggMjUuODkwMyAzMC45OTQ2IDI1LjY2NjcgMzAuMzMzNSAyNS42NjY3SDIxLjAwMDJDMjAuMzM5MSAyNS42NjY3IDE5Ljc4NDkgMjUuODkwMyAxOS4zMzc3IDI2LjMzNzVDMTguODkwNCAyNi43ODQ3IDE4LjY2NjggMjcuMzM4OSAxOC42NjY4IDI4VjM3LjMzMzNDMTguNjY2OCAzNy45OTQ0IDE4Ljg5MDQgMzguNTQ4NiAxOS4zMzc3IDM4Ljk5NThDMTkuNzg0OSAzOS40NDMxIDIwLjMzOTEgMzkuNjY2NyAyMS4wMDAyIDM5LjY2NjdaIiBmaWxsPSIjMkY0NTVGIi8+CjwvZz4KPC9zdmc+Cg=="
                      width="25"
                      height="25"
                    />
                  </svg>
                </span>
                <span className="mx-6 text-2xl max-md:text-lg">
                  Remote&nbsp;Buyer&nbsp;Walkthrough
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
                href="/services/property-buy-legal-assistance"
                onMouseEnter={() => slideTo(6)}
              >
                <span className="mb-1 text-base max-md:text-sm">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzQ0XzM1OCIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2Ij4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF80NF8zNTgpIj4KPHBhdGggZD0iTTIxIDIwLjk5OThWMTYuMzMzMkg0MlYyMC45OTk4SDIxWk0yMSAyNy45OTk4VjIzLjMzMzJINDJWMjcuOTk5OEgyMVpNMzIuNjY2NyA1MS4zMzMyVjQ0LjE1ODJMNDUuNTU4MyAzMS4zMjQ4QzQ1LjkwODMgMzAuOTc0OCA0Ni4yOTcyIDMwLjcyMjEgNDYuNzI1IDMwLjU2NjVDNDcuMTUyOCAzMC40MTA5IDQ3LjU4MDYgMzAuMzMzMiA0OC4wMDgzIDMwLjMzMzJDNDguNDc1IDMwLjMzMzIgNDguOTIyMiAzMC40MjA3IDQ5LjM1IDMwLjU5NTdDNDkuNzc3OCAzMC43NzA3IDUwLjE2NjcgMzEuMDMzMiA1MC41MTY3IDMxLjM4MzJMNTIuNjc1IDMzLjU0MTVDNTIuOTg2MSAzMy44OTE1IDUzLjIyOTIgMzQuMjgwNCA1My40MDQyIDM0LjcwODJDNTMuNTc5MiAzNS4xMzU5IDUzLjY2NjcgMzUuNTYzNyA1My42NjY3IDM1Ljk5MTVDNTMuNjY2NyAzNi40MTkzIDUzLjU4ODkgMzYuODU2OCA1My40MzMzIDM3LjMwNEM1My4yNzc4IDM3Ljc1MTIgNTMuMDI1IDM4LjE0OTggNTIuNjc1IDM4LjQ5OThMMzkuODQxNyA1MS4zMzMySDMyLjY2NjdaTTQ4LjAwODMgMzguMjY2NUw1MC4xNjY3IDM1Ljk5MTVMNDguMDA4MyAzMy44MzMyTDQ1Ljc5MTcgMzYuMDQ5OEw0OC4wMDgzIDM4LjI2NjVaTTE0IDUxLjMzMzJDMTIuMDU1NiA1MS4zMzMyIDEwLjQwMjggNTAuNjUyNiA5LjA0MTY3IDQ5LjI5MTVDNy42ODA1NiA0Ny45MzA0IDcgNDYuMjc3NiA3IDQ0LjMzMzJWMzcuMzMzMkgxNFY0LjY2NjVINDlWMjUuNzI0OEM0OC4yMjIyIDI1LjY0NzEgNDcuNDM0NyAyNS42NzYyIDQ2LjYzNzUgMjUuODEyM0M0NS44NDAzIDI1Ljk0ODQgNDUuMDcyMiAyNi4xOTE1IDQ0LjMzMzMgMjYuNTQxNVY5LjMzMzE3SDE4LjY2NjdWMzcuMzMzMkgzMi42NjY3TDI4IDQxLjk5OThWNTEuMzMzMkgxNFoiIGZpbGw9IiMyRjQ1NUYiLz4KPC9nPgo8L3N2Zz4K"
                      width="25"
                      height="25"
                    />
                  </svg>
                </span>
                <span className="mx-6 text-2xl max-md:text-lg">
                  Property&nbsp;Buy&nbsp;&&nbsp;Sell&nbsp;Legal&nbsp;Assistance
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
                <span className="mb-1 text-base max-md:text-sm">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzQ0XzM2MiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2Ij4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF80NF8zNjIpIj4KPHBhdGggZD0iTTExLjY2NiAzOS42NjY4VjIzLjMzMzVIMTYuMzMyN1YzOS42NjY4SDExLjY2NlpNMjUuNjY2IDM5LjY2NjhWMjMuMzMzNUgzMC4zMzI3VjM5LjY2NjhIMjUuNjY2Wk00LjY2NjAyIDE4LjY2NjhWMTQuMDAwMkwyNy45OTk0IDIuMzMzNUw1MS4zMzI3IDE0LjAwMDJWMTguNjY2OEg0LjY2NjAyWk00LjY2NjAyIDQ5LjAwMDJWNDQuMzMzNUgzMi43ODI3QzMyLjg2MDUgNDUuMTUwMiAzMi45NTc3IDQ1LjkzNzcgMzMuMDc0NCA0Ni42OTZDMzMuMTkxIDQ3LjQ1NDMgMzMuMzY2IDQ4LjIyMjQgMzMuNTk5NCA0OS4wMDAySDQuNjY2MDJaTTM5LjY2NiAzMC45MTY4VjIzLjMzMzVINDQuMzMyN1YyOC41ODM1TDM5LjY2NiAzMC45MTY4Wk00Ni42NjYgNTYuMDAwMkM0My45ODI3IDU1LjMzOTEgNDEuNzU2MyA1My43OTMyIDM5Ljk4NjkgNTEuMzYyN0MzOC4yMTc0IDQ4LjkzMjEgMzcuMzMyNyA0Ni4yMzkxIDM3LjMzMjcgNDMuMjgzNVYzNy4zMzM1TDQ2LjY2NiAzMi42NjY4TDU1Ljk5OTQgMzcuMzMzNVY0My4yODM1QzU1Ljk5OTQgNDYuMjM5MSA1NS4xMTQ2IDQ4LjkzMjEgNTMuMzQ1MiA1MS4zNjI3QzUxLjU3NTcgNTMuNzkzMiA0OS4zNDk0IDU1LjMzOTEgNDYuNjY2IDU2LjAwMDJaTTQ0Ljk3NDMgNDkuMDAwMkw1My4wODI3IDQwLjk1MDJMNTAuNjMyNyAzOC41MDAyTDQ0Ljk3NDMgNDQuMDQxOEw0Mi42OTk0IDQxLjc2NjhMNDAuMjQ5NCA0NC4yNzUyTDQ0Ljk3NDMgNDkuMDAwMloiIGZpbGw9IiMyRjQ1NUYiLz4KPC9nPgo8L3N2Zz4K"
                      width="25"
                      height="25"
                    />
                  </svg>
                </span>
                <span className="mx-6 text-2xl max-md:text-lg">
                  Loan&nbsp;Assistance&nbsp;Services
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
                href="/market"
                onMouseEnter={() => slideTo(8)}
              >
                <span className="mb-1 text-base max-md:text-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEwIDUxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNMTc5LjU4MyAzODYuMDkzSDUxLjkxMUMzMS42MTUgMzg2LjA5MyAxNSAzNjkuNDc4IDE1IDM0OS4xODJWOTUuMzM3YzAtMjAuMjk2IDE2LjYxNS0zNi45MTEgMzYuOTExLTM2LjkxMWg1MS41M0w4Ny4zMzQgODkuMzFINTAuOTk4Yy0yLjgzNCAwLTUuMTQ3IDIuMjgtNS4xNDcgNS4xMTR2MjI5LjUxaDQxOC4yOThWOTQuNDI0YzAtMi44MzQtMi4zMTMtNS4xMTQtNS4xMTUtNS4xMTRoLTM2LjM2OGwtMTYuMTA3LTMwLjg4NGg1MS41M2MyMC4yOTYgMCAzNi45MTEgMTYuNjE1IDM2LjkxMSAzNi45MTF2MjUzLjg0NWMwIDIwLjI5Ni0xNi42MTUgMzYuOTExLTM2LjkxMSAzNi45MTFIMzMwLjQ1djU4LjY0aDU2LjE2NGMxNy4yOTkgMCAzMS40NyAxMS4zMDQgMzEuNDcgMjUuMTE3VjQ5NUg5MS45NDl2LTI1LjE1YzAtMTMuODEzIDE0LjE3MS0yNS4xMTcgMzEuNDctMjUuMTE3aDU2LjE2NHptLTQuOTI2LTEwNy44NTVoLTQ4LjY5OVYxNTQuMDc5YTU1LjA4MyA1NS4wODMgMCAwIDAgMTIuNDA3IDEuNDA4YzE1LjE4MiAwIDI4LjkzNy02LjE2NyAzOC44ODEtMTYuMTM0IDkuOTI4IDkuOTY3IDIzLjY2OSAxNi4xMzQgMzguODU2IDE2LjEzNCAxNS4yMjUgMCAyOC45OC02LjE2OCAzOC45MTQtMTYuMTM1IDkuOTQ0IDkuOTY3IDIzLjcgMTYuMTM1IDM4Ljg4MiAxNi4xMzUgMTUuMTg3IDAgMjguOTI4LTYuMTY3IDM4Ljg1Ni0xNi4xMzQgOS45NDQgOS45NjcgMjMuNjk5IDE2LjEzNCAzOC44ODEgMTYuMTM0IDQuMjY2IDAgOC40MTktLjQ4NyAxMi40MDctMS40MDh2MTI0LjE1OUgyNjEuNjgxdi04OS4zNjRjMC03LjIyNS02LjIxNS0xMy42OTQtMTQuNDEzLTEzLjY5NGgtNTguMjU3Yy04LjIyMyAwLTE0LjM1NCA2LjQ0Ny0xNC4zNTQgMTMuNjk0em0xNi04Mi4wNThhNS4wMDEgNS4wMDEgMCAwIDEgNS01aDQ1LjAyNGE1IDUgMCAwIDEgNSA1djgyLjIyM2gtNTUuMDI0ek0xNzEuMDk2IDkyLjY0OGgtNjcuNDU4bDM4LjY4Mi03NC4xNzJjMS4xMzktMi4yMTcgMy4yMzctMy40NzYgNS42OTQtMy40NzZoNDMuNTEzek0yMDcuODAxIDE1SDI0N3Y3Ny42NDhoLTU5LjM2bDE5Ljg5Ni03NS42MTJhOC4wNDUgOC4wNDUgMCAwIDAgLjI2NS0yLjAzNnpNMjYzIDE1aDM5LjE5OWMuMDAxLjY3Mi4wODYgMS4zNTUuMjY1IDIuMDM2bDE5Ljg5NiA3NS42MTJIMjYzem01NS40NzMgMGg0My41NzNjMi4zOTcgMCA0LjQ5NSAxLjI1OSA1LjYzNCAzLjQ3NmwzOC42ODIgNzQuMTcyaC02Ny40NTh6bTkxLjIzNCA5My42NDhjLTMuNjk3IDE3LjYxNy0xOS4zNTcgMzAuODM5LTM4LjA3MiAzMC44MzktMTguNzE0IDAtMzQuMzc0LTEzLjIyMi0zOC4wNzEtMzAuODM5em0tNzcuNzk0IDBjLTMuNjg2IDE3LjYxNy0xOS4zIDMwLjgzOS0zOC4wMTUgMzAuODM5LTE4LjcxNCAwLTM0LjM3NC0xMy4yMjItMzguMDcxLTMwLjgzOXptLTc3LjczNyAwYy0zLjY4NyAxNy42MTctMTkuMzA4IDMwLjgzOS0zOC4wNzQgMzAuODM5LTE4LjcxNSAwLTM0LjMyOS0xMy4yMjItMzguMDE1LTMwLjgzOXptLTc3Ljc0IDBjLTMuNjk3IDE3LjYxNy0xOS4zNTcgMzAuODM5LTM4LjA3MSAzMC44MzktMTguNzE1IDAtMzQuMzc1LTEzLjIyMi0zOC4wNzItMzAuODM5eiIgZmlsbD0iIzJmNDQ1ZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                      width="24"
                      height="24"
                    />

                    {/* <image
                      xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQ4MC41MDQgMzguOTExSDM4MC4xMTZsLTE1LjM3LTI4LjcyNUMzNjEuNjY5IDQuNDM0IDM1NS45MzcgMSAzNDkuNDEzIDFIMTYyLjU4N2MtNi41MjMgMC0xMi4yNTUgMy40MzQtMTUuMzMzIDkuMTg2bC0xNS4zNzEgMjguNzI2SDMxLjQ5NUMxNC42OCAzOC45MTEgMSA1Mi41OTEgMSA2OS40MDZ2MzEwLjEyOWMwIDE2LjgxNSAxMy42OCAzMC40OTUgMzAuNDk1IDMwLjQ5NWgxNTguMjgybC0yNS44NTQgNTIuNTgxSDEyOS43NWMtMTMuMzQgMC0yNC4xOTQgMTAuODU0LTI0LjE5NCAyNC4xOTVTMTE2LjQxIDUxMSAxMjkuNzUgNTExaDI1Mi41YzEzLjM0IDAgMjQuMTkzLTEwLjg1NCAyNC4xOTMtMjQuMTk0cy0xMC44NTMtMjQuMTk0LTI0LjE5My0yNC4xOTRoLTM0LjE3NGwtMjUuODU0LTUyLjU4MWg0NC4yNDJhNDcuMDczIDQ3LjA3MyAwIDAgMSAyLjUxMiAzLjM0M2MtMi45MTUgMy45OC0zLjM5OSA5LjQ2OC0uNzc5IDE0LjAwN2w2LjI5NCAxMC45MDFhMTIuNzQzIDEyLjc0MyAwIDAgMCA3Ljc5MiA1Ljk3MSAxMi45NCAxMi45NCAwIDAgMCAzLjM1MS40NDRjMi4yMjEgMCA0LjQxMi0uNTgyIDYuMzgzLTEuNzJsNTcuMDY1LTMyLjk0NmgzMS40MjRjMTYuODE1IDAgMzAuNDk2LTEzLjY4IDMwLjQ5Ni0zMC40OTVWNjkuNDA2QzUxMSA1Mi41OTEgNDk3LjMyIDM4LjkxMSA0ODAuNTA0IDM4LjkxMXpNMzUxLjUyIDE3LjI2M2wzMi41MDcgNjAuNzVoLTI5LjA0MkwzMzIuODYzIDE2aDE2LjU1Yy45NzcgMCAxLjY0Ni40MDEgMi4xMDcgMS4yNjN6bTI5Ljg2OCAzODcuNjg4Yy01LjA5NS03LjQyMS0xMS4xNDUtMTMuMDIzLTE4Ljk5NC0xNy41NTVsLTYyLjYyNS0zNi4xNTdjLTMuNDktMi4wMTUtNC42ODktNi40OTMtMi42NzUtOS45ODJhNy4yNTYgNy4yNTYgMCAwIDEgNC40NDItMy4zODhjMS44OTctLjUwNyAzLjg2NC0uMjU1IDUuNTQxLjcxM2wyOC41NTIgMTYuNDg0YTcuNSA3LjUgMCAwIDAgMTAuMjQ1LTEwLjI0NUwzMDEuNSAyNjcuOTY2Yy0uOTY4LTEuNjc2LTEuMjIxLTMuNjQ0LS43MTMtNS41NDFzMS43MTEtMy40NzUgMy4zODctNC40NDJjMy40OTMtMi4wMTUgNy45NjktLjgxNCA5Ljk4MyAyLjY3NGwzNi4xNDggNjIuNjFhNy40OTcgNy40OTcgMCAwIDAgMTAuMjQ1IDIuNzQ1IDcuNSA3LjUgMCAwIDAgMi43NDUtMTAuMjQ1bC0xMS45ODgtMjAuNzY0YTcuMjUyIDcuMjUyIDAgMCAxLS43MTMtNS41NDFjLjUwOC0xLjg5NiAxLjcxMS0zLjQ3NCAzLjM4OC00LjQ0MnMzLjY0Ni0xLjIyIDUuNTQxLS43MTNhNy4yNDYgNy4yNDYgMCAwIDEgNC40NDIgMy4zODhsMTEuOTg4IDIwLjc2NGE3LjQ5NyA3LjQ5NyAwIDAgMCAxMC4yNDUgMi43NDUgNy41IDcuNSAwIDAgMCAyLjc0NS0xMC4yNDVsLTcuMzA5LTEyLjY2LS4wMDItLjAwNS0uMDA1LS4wMWMtMi4wMDctMy40ODgtLjgwNy03Ljk2IDIuNjgtOS45NzNhNy4yNTggNy4yNTggMCAwIDEgNS41NDEtLjcxMyA3LjI1MSA3LjI1MSAwIDAgMSA0LjQ0MiAzLjM4OGw2LjUwMyAxMS4yNjVhNy41IDcuNSAwIDAgMCAxMC4yNjcgMi43ODUgNy41IDcuNSAwIDAgMCAyLjc0NS0xMC4yNDUgNC41NDQgNC41NDQgMCAwIDEtLjQ0My0zLjQ3MiA0LjU0IDQuNTQgMCAwIDEgMi4xMi0yLjc4NGMyLjE1MS0xLjI0MiA1LjAxNS0uNDc0IDYuMjU2IDEuNjc2bDIyLjI2NyAzOC41NjdjNi4wOTYgMTIuMzQ3IDEwLjMzNyAyNC4zODMgMTQuNTkzIDQxLjU5M3ptLTM0LjkwNi0xMzIuOTJhMjIuMjEgMjIuMjEgMCAwIDAtNS43MTUgNC43MTVsLTEwLjQ4My0xOC4xNTd2LTU5LjUxMmMwLTYuOTUtNS42NTQtMTIuNjA0LTEyLjYwNC0xMi42MDRIMTk0LjMxOWMtNi45NSAwLTEyLjYwNCA1LjY1NC0xMi42MDQgMTIuNjA0djkzLjU0MmgtMzMuMjNjLTEuOTU4IDAtMy42MTMtMS42NTQtMy42MTMtMy42MTJWMTQzLjA1OGEzMC45MzYgMzAuOTM2IDAgMCAwIDE3LjQzLTEwLjE2MWM1LjY3NSA2LjU4MiAxNC4wNzIgMTAuNzU2IDIzLjQyNCAxMC43NTZzMTcuNzQ5LTQuMTc0IDIzLjQyNC0xMC43NTZjNS42NzUgNi41ODIgMTQuMDcyIDEwLjc1NiAyMy40MjUgMTAuNzU2IDkuMzUyIDAgMTcuNzQ5LTQuMTc0IDIzLjQyNC0xMC43NTYgNS42NzUgNi41ODIgMTQuMDcyIDEwLjc1NiAyMy40MjQgMTAuNzU2czE3Ljc0OS00LjE3NCAyMy40MjQtMTAuNzU2YzUuNjc1IDYuNTgyIDE0LjA3MiAxMC43NTYgMjMuNDI0IDEwLjc1NnMxNy43NDktNC4xNzQgMjMuNDI0LTEwLjc1NmEzMC45NCAzMC45NCAwIDAgMCAxNy40MjkgMTAuMTYxdjEyOC4xM2EyMi41NTQgMjIuNTU0IDAgMCAwLTMuNzIxLTEuMzY4Yy01Ljc2NC0xLjU0NS0xMS43NzUtLjc2LTE2LjkyMSAyLjIxMXptLTU3Ljk3MiAzLjQzNSA5LjkwNCAxNy4xNTRIMjYzLjV2LTkxLjE0Nmg1MS43ODR2NDEuODI5Yy01Ljk0My0yLjEwNC0xMi43MzQtMS43MDMtMTguNjA5IDEuNjg5LTUuMTQ2IDIuOTcxLTguODMyIDcuNzgzLTEwLjM3NiAxMy41NS0xLjU0NiA1Ljc2OC0uNzYgMTEuNzc4IDIuMjExIDE2LjkyNHptLTkxLjc5NSAxNy4xNTR2LTkxLjE0NkgyNDguNXY5MS4xNDZ6TTE2OS44MDIgOTMuMDEzaDMxLjg0OXYxOS43MTZjMCA4Ljc4MS03LjE0NCAxNS45MjQtMTUuOTI0IDE1LjkyNHMtMTUuOTI0LTcuMTQ0LTE1LjkyNC0xNS45MjRWOTMuMDEzem0xNzIuMzk1IDE5LjcxNmMwIDguNzgxLTcuMTQ0IDE1LjkyNC0xNS45MjQgMTUuOTI0cy0xNS45MjQtNy4xNDQtMTUuOTI0LTE1LjkyNFY5My4wMTNoMzEuODQ5djE5LjcxNnptLTQ2Ljg0OCAwYzAgOC43ODEtNy4xNDQgMTUuOTI0LTE1LjkyNCAxNS45MjRTMjYzLjUgMTIxLjUxIDI2My41IDExMi43MjlWOTMuMDEzaDMxLjg0OXptLTQ2Ljg0OSAwYzAgOC43ODEtNy4xNDQgMTUuOTI0LTE1LjkyNCAxNS45MjRzLTE1LjkyNS03LjE0NC0xNS45MjUtMTUuOTI0VjkzLjAxM0gyNDguNXptMTI0LjYyMiAxNS45MjRjLTguNzgxIDAtMTUuOTI0LTcuMTQ0LTE1LjkyNC0xNS45MjRWOTMuMDEzaDMxLjg0OXYxOS43MTZjLS4wMDEgOC43ODEtNy4xNDUgMTUuOTI0LTE1LjkyNSAxNS45MjR6bS02My45OTMtNTAuNjRMMjk4LjA2OCAxNmgxOC44NjlsMjIuMTIyIDYyLjAxM3ptLTE1LjIzNiAwSDI2My41VjE2aDE5LjMzMnptLTQ1LjM5MyAwaC0zMC4zOTNMMjI5LjE2OCAxNkgyNDguNXptLTQ1LjYzIDBoLTI5LjkzTDE5NS4wNjIgMTZoMTguODY5em0tNDguMDY4IDM0LjcxNmMwIDguNzgxLTcuMTQ0IDE1LjkyNC0xNS45MjQgMTUuOTI0LTguNzgxIDAtMTUuOTI0LTcuMTQ0LTE1LjkyNC0xNS45MjVsLS4wMDEtMTkuNzE1aDMxLjg0OXptLTQ2Ljg0OCAwYzAgMTMuOTIgOS4yNDYgMjUuNzE3IDIxLjkxOCAyOS41ODN2MTQ2LjY5NWMwIDEwLjI2MyA4LjM1IDE4LjYxMiAxOC42MTMgMTguNjEyaDE1OC41ODhsMTEuODEzIDIwLjQ2LTQuMzExLTIuNDg5Yy01LjE0Ni0yLjk3MS0xMS4xNTYtMy43NTQtMTYuOTIzLTIuMjEyLTUuNzY3IDEuNTQ1LTEwLjU3OSA1LjIzLTEzLjU1MSAxMC4zNzctNi4xNDkgMTAuNjUyLTIuNDg2IDI0LjMyMiA4LjE2NiAzMC40NzJsLjg1OS40OTZINDYuMzA2Vjg0LjIxN2g2MS43NzRhNy41MSA3LjUxIDAgMCAwLS4xMjcgMS4yOTd6bTM1Ny43NCAyMTguNzYxYy0yLjQ1OC02Ljg0MS01LjE2Ny0xMy4xNS04LjM1My0xOS41OGE3LjM5NSA3LjM5NSAwIDAgMC0uMjI2LS40MjFsLTIyLjM4Ny0zOC43NzZjLTIuNjA4LTQuNTE4LTYuODMyLTcuNzUzLTExLjg5My05LjEwOC01LjA2Mi0xLjM1Ni0xMC4zMzYtLjY2Ni0xNC44NTMgMS45NDJhMTkuNTYgMTkuNTYgMCAwIDAtNC4yNTUgMy4zMDdjLTIuNzMzLTIuNzMxLTYuMTU0LTQuNzEyLTkuOTk5LTUuNzQzYTIyLjIxIDIyLjIxIDAgMCAwLTExLjYwMy4wMlYxNDIuMzEyYzEyLjY3My0zLjg2NSAyMS45MTktMTUuNjYzIDIxLjkxOS0yOS41ODNWODUuNTEzYTcuNDkgNy40OSAwIDAgMC0uMTI3LTEuMjk2aDYxLjc3NVYzMzEuNDl6TTE2MC40NzkgMTcuMjYyYy40NjEtLjg2MSAxLjEzLTEuMjYyIDIuMTA3LTEuMjYyaDE2LjU0OWwtMjIuMTIyIDYyLjAxM2gtMjkuMDQyek0xNiAzNzkuNTM2VjY5LjQwNmMwLTguNTQ0IDYuOTUxLTE1LjQ5NSAxNS40OTUtMTUuNDk1aDkyLjM2MmwtOC4xOSAxNS4zMDZIMzguODA2YTcuNSA3LjUgMCAwIDAtNy41IDcuNXYyOTUuNTA4YTcuNSA3LjUgMCAwIDAgNy41IDcuNWgyODAuMzAybDI2LjUxIDE1LjMwNkgzMS40OTVjLTguNTQ0IDAtMTUuNDk1LTYuOTUxLTE1LjQ5NS0xNS40OTV6bTM3NS40NDMgMTA3LjI3YzAgNS4wNjktNC4xMjQgOS4xOTQtOS4xOTMgOS4xOTRoLTI1Mi41Yy01LjA2OSAwLTkuMTk0LTQuMTI1LTkuMTk0LTkuMTk0czQuMTI1LTkuMTk0IDkuMTk0LTkuMTk0aDI1Mi41YzUuMDY5LS4wMDEgOS4xOTMgNC4xMjQgOS4xOTMgOS4xOTR6bS02MC4wODMtMjQuMTk1SDE4MC42MzlsMjUuODU0LTUyLjU4MWg5OS4wMTR6bTU1LjAzNi0zMy43MS00LjEyMy03LjE0MSA4OS4yNTYtNTEuNTMyIDQuMTIzIDcuMTQxek00OTYgMzc5LjUzNmMwIDguNTQ0LTYuOTUxIDE1LjQ5NS0xNS40OTYgMTUuNDk1aC01LjQ0M2w5Ljk3MS01Ljc1N2M2LjEyNi0zLjUzNyA4LjIzMi0xMS4zOTggNC42OTYtMTcuNTI1bC02LjI5NC0xMC45MDFhMTIuNzQzIDEyLjc0MyAwIDAgMC0yLjc0LTMuMjkxVjc2LjcxN2E3LjUgNy41IDAgMCAwLTcuNS03LjVoLTc2Ljg2MmwtOC4xOS0xNS4zMDZoOTIuMzYyYzguNTQ0IDAgMTUuNDk2IDYuOTUxIDE1LjQ5NiAxNS40OTV6IiBmaWxsPSIjMmY0NTVmIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                      width="25"
                      height="25"
                    /> */}
                  </svg>
                </span>
                <span className="mx-6 text-2xl max-md:text-lg">
                  Marketplace
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
            </div>
          </div>
          {/* Grid */}
          <div className="services_right basis-1/2 max-lg:hidden overflow-hidden px-12 pt-30 pb-0 text-left mx-auto">
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
                <SwiperSlide>
                  <Image className="relative" src={Service8} alt="Logo 01" />
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
