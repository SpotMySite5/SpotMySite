import Link from "next/link";
import Image from "next/image";
import Logo1 from "@/public/images/logo-dark.png";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-6 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`flex flex-row max-md:flex-wrap gap-10 py-8 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="basis-4/12 max-md:basis-full max-md:grow max-md:order-4 max-md:text-center">
            <div>
              <Image
                // className="box-content rounded-full border-2 border-gray-50"
                src={Logo1}
                width={96}
                height={96}
                alt="LOGO: Spot my Site"
                className="max-md:mx-auto"
              />
            </div>
            <div className="text-sm text-gray-600">
              &copy; spotmysite.com - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="basis-3/12 max-md:basis-full max-md:grow max-md:order-3">
            <h3 className="text-md font-medium">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/services/property-video-inspection"
                >
                  Property Video Inspections
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/services/land-status-check"
                >
                  Land Status Check
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/services/land-cleanup"
                >
                  Land Cleanup & Vegetation Removal
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/services/fence-boundary-installation"
                >
                  Fence & Boundary Installation
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/services/remote-buyer-walkthrough"
                >
                  Remote Buyer Walkthrough
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/services/property-buy-legal-assistance"
                >
                  Property Buy & Sell Legal Assistance
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/services/loan-assistance"
                >
                  Loan Assistance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="basis-3/12 max-md:basis-1/2 max-md:grow">
            <h3 className="text-md font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/about"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/#contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="basis-2/12 ">
            <h3 className="text-md font-medium">Social Media</h3>
            <ul className="flex gap-1" style={{ marginLeft: "-6px" }}>
              {/* <li>
                <Link
                  className="flex items-center justify-center footer_icon transition "
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                  </svg>
                </Link>
              </li> */}
              <li>
                <Link
                  className="flex items-center justify-center footer_icon transition pt-1.5"
                  href="https://www.facebook.com/Spotmysite"
                  target="_blank"
                  aria-label="Medium"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </li>

              {/* Instagram */}
              <li>
                <Link
                  className="flex items-center justify-center footer_icon transition pt-1 px-1.5"
                  href="https://www.instagram.com/spotmysite"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <svg
                    width="28px"
                    height="28px"
                    viewBox="0 0 24 24"
                    fill="#2f455f"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                      fill="#2f455f"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center footer_icon transition px-1.5"
                  href="https://www.linkedin.com/company/spotmysite"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <svg
                    className="h-9 w-9 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"></div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div> */}
    </footer>
  );
}
