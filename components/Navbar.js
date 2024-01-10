import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import jp from "../locales/jp";
import en from "../locales/en";

export default function Navbar({ fixed }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <>
        <div style={{marginTop: "30px", marginRight: "70px"}} className="sticky2 active:border-[3px] active:border-r-0 border-cyan-600 active:rounded mt-[10px] my-[3px] lg:block">
          <span style={{marginTop: "-10px"}}>🌐</span>
          <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="text-white text-shadow-sm text-lg bg-transparent tracking-wide pd-[5]"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="jp">JP</option>
          </select>
          {/*<Link href="#"> 🌐 言語 {t('app_title')} </Link>*/}
        </div>

        <nav className="relative flex flex-wrap items-center justify-start py-3"
            style={{ backgroundColor: "#0e1447" }}
        >
          <div className="container pl-8 mx-auto flex flex-wrap items-center justify-start ml-0">
            <div className="w-full relative flex justify-start lg:w-auto lg:static lg:block">
              <Link href="/">
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
                  className="flex flex-grow justify-end items-center text-white font-light cursor-pointer text-4xl lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars sm:mr-4 md:mr-8 lg:mr-0" style={{marginRight: "-80px", marginTop: "-5px"}}></i>
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
                  <Link href="/">
                    <a className="px-3 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                      <span className="ml-2">{t.home}</span>
                    </a>
                  </Link>
                </li>
                {/* dropdown */}
                <div className="flex justify-start px-2">
                  <div>
                    <div className="dropdown relative">
                      <Link href="/about">
                        <a className="px-1 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                          <span className="ml-2">{t.about}</span>
                        </a>
                      </Link>
                      <ul
                          className="dropdown-menu min-w-max absolute bg-darkblue text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden bg-clip-padding border-none"
                          aria-labelledby="dropdownMenuButton1tx"
                      >
                        <li>
                          <Link href="/greetings">
                            <a className="dropdown-item px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 bg-darkblue">
                              社長メッセージ
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/corporate">
                            <a className="dropdown-item px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                              会社概要
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* dropdown */}

                <div className="flex justify-center">
                  <li className="nav-item">
                    <div className="flex justify-center">
                      <div className="dropdown -ml-8 md:ml-0">
                      <span className="flex items-center md:px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white -mt-0.5">
                        {t.overseasProjects}
                      </span>
                        <div className="dropdown-content text-left text-white p-2">
                          <Link
                              className="block p-2 w-full bg-transparent py-1 px-4 text-sm text-white border"
                              href="/myanmar"
                          >
                            {t.myanmar}
                          </Link> <br />
                          <Link style={{color: "#fff"}}
                              className="block pl-2 w-full bg-transparent py-1 px-4 text-sm text-white border"
                              href="/mongolia"
                          >
                            {t.mongolia}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>

                <li className="nav-item">
                  <Link href="/domestic">
                    <a className="px-3 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                      <span className="ml-2">{t.domesticProjects}</span>
                    </a>
                  </Link>
                </li>

                <div className="flex justify-center">
                  <li className="nav-item1">
                    <div className="flex justify-center">
                      <div className="dropdown text-white">
                      <span className="flex items-center bg-darkblue lg:px-6 px-4 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white -mt-0.5">
                        {t.internship}
                      </span>
                        <div className="dropdown-content text-left flex-col" style={{minWidth: 200, paddingLeft: '10px'}}>
                          <Link
                              className="block w-full bg-transparent py-1 px-4 text-sm text-white border"
                              href="/intership"
                              data-te-dropdown-item-ref
                          >
                            {t.internship1}
                          </Link> <br />
                          <Link
                              className="block mt-2 pb-2 w-full bg-transparent py-1 px-4 text-sm text-white border"
                              href="/recruit"
                              data-te-dropdown-item-ref
                          >
                            {t.recruit}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>

                <li className="nav-item">
                  <Link href="/contact">
                    <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                      <span className="ml-2">{t.contact}</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </nav>
      </>
  );
}