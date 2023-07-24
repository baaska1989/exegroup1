import React from "react";
import Link from "next/link";

const Aboutexe = () => {
  return (
    <div className="flex justify-center m-0 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto md:pl-16">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900 font-semibold mt-4 text-center">
            About EXE Corporation
          </h2>
          <p className="font-light mt-4 font-sans text-gray-800 max-w-lg m-4 md:mr-16">
            EXE Corporation was born on August 6th, 1991. Twenty years have
            passed since then, and as we were experiencing the turbulent last 10
            years of the 20th century and the first 11 years of the 21st
            century, we have been constantly moving forward as a boutique
            investment house adapting to the change of air and the trend of the
            times.
          </p>
          
          <Link href="/en/greetings">
          <a
            className="inline-block ml-4 px-7 py-4 mb-8 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            LEARN MORE
          </a>
          </Link>
          



        </div>

        <div>
          <img
            src="/assets/img/1658049181.jpg"
            className="w-full h-screen max-h-96 transition duration-300 ease-linear align-middle "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutexe;
