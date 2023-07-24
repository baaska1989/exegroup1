import React from "react";
import Link from "next/link";
import LazyLoad from 'react-lazy-load';

const Recruitment = () => {
  return (
    <div
      className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover bg-fixed"
      loading="lazy"
      style={{ backgroundImage: 'url("/assets/img/img4.jpg")', height: 400 }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex justify-center items-center h-full ">
          <div className="text-gray-700 p-16 opacity-80 text-gray-800 max-w-2xl bg-gray-50">
            <div className="flex justify-center">
              <h2 className="font-semibold text-3xl font-serif text-gray-800 pb-8 ">
                Recruitment Information
              </h2>
            </div>
            <h4 className="font-normal text-md mb-2 text-black">
              The latest recruitment information of EXE Corporation.
            </h4>
            <p className="font-light text-black">              
              EXE has operated a number of projects in Myanmar, Mongolia and we
              are hiring new graduates and mid-career employees at any time.
            </p>
            <Link href="/en/recruit">
              <a
                className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                LEARN MORE
              </a>
            </Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
