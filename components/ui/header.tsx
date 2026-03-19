import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed z-30 w-full">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="relative flex h-18 items-center justify-between gap-3 rounded-bottom-2xl nav_header px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center 2xl:ml-auto">
            <Logo />
          </div>
          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center text-center justify-end gap-3 max-md:gap-1 2xl:mr-auto">
            <li>
              <a
                href="/about"
                className="link-underline-center pb-1.5 relative text-sm font-medium px-3 text-gray-200 hover:text-gray-100"
              >
                About
              </a>
            </li>
            <li className="max-sm:hidden">
              <a
                href="/#services"
                className="link-underline-center pb-1.5 relative text-sm font-medium px-3 text-gray-200 hover:text-gray-100"
              >
                Services
              </a>
            </li>
            <li className="max-sm:hidden">
              <a
                href="/careers"
                className="link-underline-center pb-1.5 relative text-sm font-medium px-3 text-gray-200 hover:text-gray-100"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="link-underline-center pb-1.5 relative text-sm font-medium px-3 text-gray-200 hover:text-gray-100"
              >
                Contact&nbsp;Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="link-underline-center pb-1.5 relative text-sm font-medium px-3 text-gray-200 hover:text-gray-100 mr-7 max-md:mr-3"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .link-underline-center {
          position: relative;
          display: inline-block;
          text-align: center;
        }
        .link-underline-center::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 260ms ease;
        }
        .link-underline-center:hover::after,
        .link-underline-center:focus::after {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
}
