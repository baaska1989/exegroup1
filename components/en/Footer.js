import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faAmbulance,
//   faAnchor,
// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
    
      <div className="sticky active:border-[3px] active:border-r-0 border-cyan-600 active:rounded my-[3px] hover:bg-rose-800 duration-150"> 
      <Link href="/en/contact">  ENQUIRY </Link>
      </div>
      <div className="grid gap-2 grid-cols md:grid-cols-3 bg-neutral-800 w-full p-4 md:p-12">
        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md">CONTACT</h2>
          <ul className="text-gray-300 font-light pl-4 list-none w-full">
            <li>
              6F Sawada Kojimachi Bldg., 1-10-5 Kojimachi, Chiyoda-ku, <br />
              Tokyo 102-0083
            </li>
            <li>(81) 3 3288 2371 </li>
            <li><a href="mailto:mail@exegroup.co.jp" className="hover:text-blue-500"> mail@exegroup.co.jp </a></li>
          </ul>
        </div>

        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md ">About EXE</h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/en/greetings">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">Message from the CEO</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/en/corporate">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">Corporate Profile</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-w-lg pl-4 pb-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md ">Projects</h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/en/domestic">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">Domestic Projects</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/en/myanmar">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">Myanmar Projects</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/en/mongolia">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">Mongolia Projects</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a className="to-top-button show px-3 py-2 mb-16 pr-8 border text-[12px] bg-gray-300 rounded-lg duration-300 " href="#">
      <i className="fa-sharp fa-solid fa-arrow-up"></i>
		{/* <FontAwesomeIcon
        icon={faAmbulance}
        style={{ fontSize: 100, color: "orange" }}
      />
      <FontAwesomeIcon icon=" fa-arrow-up" /> */}

	</a>



      <div className="text-center text-sm font-light bg-zinc-900 text-gray-300 p-2">
        Copyright © 2022 EXE Corporation All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
