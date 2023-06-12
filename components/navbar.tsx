import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSpring, animated } from "@react-spring/web";
import parkcrestLogo from "../public/images/parkcrest_design_logo_black.svg";

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileWidth, setIsMobileWidth] = useState(0);
  const [isMobileOpenNow, setIsMobileOpenNow] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMobileWidth(window.innerWidth);
  }, []);

  const menuAppear = useSpring({
    y: isMegaMenuOpen ? 0 : -50,
    config: {
      tension: 150,
      friction: 12,
    },
  });
  const mobileMenuAppear = useSpring({
    from: { y: -50 },
    to: { y: 0 },
    config: {
      tension: 180,
      friction: 12,
    },
    onRest: () => setIsMobileOpenNow(true),
    reset: true,
  });

  return (
    <nav className="relative bg-white  w-full h-20 top-0 left-0 border-b border-gray-200  z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 z-50">
        <Link href="/" className="flex items-center z-50">
          <div className="w-3/5">
            <Image
              className="w-full hover:scale-125 duration-500 transition-all"
              priority
              src={parkcrestLogo}
              alt="Parkcrest Design logo with globe"
            />
          </div>
          <span className="sr-only">Parkcrest Design</span>
        </Link>
        <div className="flex md:order-2 z-50">
          <button
            type="button"
            className="hidden md:flex text-white bg-pd-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 hover:bg-pd-blue-dark hover:scale-105 duration-500 transition-all z-50"
          >
            Let's Connect
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsMobileOpenNow(false);
              isMegaMenuOpen && setIsMegaMenuOpen(false);
            }}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <animated.div
          style={
            mobileWidth < 769 && !isMobileOpenNow ? mobileMenuAppear : null
          }
          className={`mobile-menu items-center justify-between w-full md:flex md:w-auto md:order-1 z-50 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white z-50">
            <li>
              <Link
                href="/about"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:no-underline md:hover:bg-transparent md:hover:text-pd-blue md:p-0 md: z-50 hover:scale-110 duration-500 transition-all ${
                  pathname.startsWith("/about") ? "text-pd-blue-dark" : ""
                }`}
                // aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMegaMenuOpen(!isMegaMenuOpen);
                }}
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto  md:border-0 md:hover:text-pd-blue md:p-0 z-20 hover:scale-105 duration-500 transition-all ${
                  pathname.startsWith("/websites") ? "text-pd-blue-dark" : ""
                }`}
              >
                Websites
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <Link
                href="/print"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:no-underline md:hover:bg-transparent md:hover:text-pd-blue md:p-0 md: z-50 hover:scale-105 duration-500 transition-all ${
                  pathname.startsWith("/print") ? "text-pd-blue-dark" : ""
                }`}
              >
                Print
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 hover:no-underline md:hover:bg-transparent md:hover:text-pd-blue md:p-0 md: z-50 hover:scale-105 duration-500 transition-all ${
                  pathname.startsWith("/contact") ? "text-pd-blue-dark" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </animated.div>
      </div>

      <animated.div
        style={menuAppear}
        id="mega-menu-full-dropdown"
        className={`border-gray-200 shadow-sm bg-gray-50 md:bg-white border-b -z-50 ${
          isMegaMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6 -z-50">
          <div className="">
            <div>
              <div className="font-semibold">
                Websites to Connect to Your Users
              </div>
              <span className="text-sm text-gray-500 ">
                We bring your vision to life by providing guidance and working
                with you collaboratively to create an experience that will
                delight your customers and deliver something you will be proud
                to have represent your business.
              </span>
            </div>
          </div>

          <ul>
            <h3>Our Work</h3>
            <li>
              <Link
                href="/websites/ffany"
                className="block p-3 rounded-lg hover:bg-gray-100 hover:no-underline"
              >
                <div className="font-semibold">Free For All</div>
                <span className="text-sm text-gray-500 ">
                  A highly-accessible website with intuitive pathways that
                  connect users to curated resources to defend intellectual
                  freedom.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/websites/thomsenpainting"
                className="block p-3 rounded-lg hover:bg-gray-100 hover:no-underline"
              >
                <div className="font-semibold">Professional Painters</div>
                <span className="text-sm text-gray-500 ">
                  A website that leverages a company's extensive portfolio to
                  create an impactful SEO footprint to build trust and connect
                  with new clients.
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/websites/sissys"
                className="block p-3 rounded-lg hover:bg-gray-100 hover:no-underline"
              >
                <div className="font-semibold">Cafe Olé</div>
                <span className="text-sm text-gray-500 ">
                  A site that gets right to the point: menu, hours, & online
                  ordering as integrated to a point-of-sale system.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </animated.div>
    </nav>
  );
}
