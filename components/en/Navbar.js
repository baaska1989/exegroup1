import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ fixed }) {
  let { t } = useTranslation();
  let router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-start py-3"
        style={{ backgroundColor: "#0e1447" }}
      >
        <div className="container pl-8 mx-auto flex flex-wrap items-center justify-start ml-0">
          <div className="w-full relative flex justify-start lg:w-auto lg:static lg:block">
            <Link href="/en">
              <a className=" font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white">
                <div>
                  <img
                    src="/assets/img/exe-logo.png"
                    loading="lazy"
                    className="w-28 px-2 transition duration-300 ease-linear align-middle"
                  />
                </div>
              </a>
            </Link>

            <button
              className="flex flex-grow justify-end items-center text-white font-light cursor-pointer text-4xl lg:hidden outline-none focus:outline-none mr-8"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow lg:flex-none items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-start">
              <li className="nav-item">
                <Link href="/en">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">HOME</span>
                  </a>
                </Link>
              </li>
              {/* dropdown */}
              <div className="flex justify-start px-2">
                <div>
                  <div className="dropdown relative">
                    <button
                      className="dropdown-toggle text-left px-2 py-2 flex text-sm uppercase leading-snug text-white hover:text-sky-300"
                      type="button"
                      id="dropdownMenuButton1tx"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ABOUT EXE
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        />
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden bg-clip-padding border-none"
                      aria-labelledby="dropdownMenuButton1tx"
                    >
                      <li>
                        <Link href="/en/greetings">
                          <a className="dropdown-item px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                            Message from the CEO
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/en/corporate">
                          <a className="dropdown-item px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                            Corporate Profile
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* dropdown */}

              <li className="nav-item">
                <Link href="/en/overseas">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    {/* <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i> */}
                    <span className="ml-2">Overseas Projects</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/domestic">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">Domestic Projects</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/intership">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">Internship</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/recruit">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">Recruit</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/en/contact">
                  <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Language */}
          <div className="relative" data-te-dropdown-ref>
            <button
              className="flex items-center bg-darkblue px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white -mt-0.5"
              type="button"
              id="dropdownMenuButton1"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              言語 | LANGUAGE
              <span className="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <ul
              className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden border-none bg-white text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton1"
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                  href="/"
                  data-te-dropdown-item-ref
                >
                  japan
                </a>
              </li>
              <li>
                <a
                  className="block w-full bg-transparent py-1 px-4 text-sm bg-darkblue text-white border"
                  href="/en"
                  data-te-dropdown-item-ref
                >
                  english
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Language */}
      </nav>
    </>
  );
}
