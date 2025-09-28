import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed z-30 w-full">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="relative flex h-18 items-center justify-between gap-3 rounded-bottom-2xl nav_header px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {/* <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className=" text-gray-200">
                Register
              </Link>
            </li> */}
            <li>
              <a
                href="/about"
                className="text-sm font-medium px-3  text-gray-200 hover:text-gray-100"
              >
                About
              </a>
              <span aria-hidden="true" className="h-6 w-px bg-gray-200"></span>
            </li>
            <li>
              <a
                href="/#services"
                className="text-sm font-medium px-3  text-gray-200 hover:text-gray-800"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="text-sm font-medium px-3  text-gray-200 hover:text-gray-800"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="text-sm font-medium px-3 pr-10 text-gray-200 hover:text-gray-800"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
