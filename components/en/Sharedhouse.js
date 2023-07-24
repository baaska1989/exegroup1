import React from "react";
import Link from "next/link";
import LazyLoad from 'react-lazy-load';

const Sharedhouse = () => {
  return (
    <div className="flex justify-center m-0 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">

      <div>
      <h2 className="font-serif text-2xl text-gray-900 font-semibold mt-4 md:pl-10 text-center">
          Shared House
        </h2>
        <p className="font-light mt-8 font-sans text-gray-800 max-w-lg mx-4">
        EXE operates shared-houses concentrating on students overseas. Shared-house is consort rental house styled that several residents use one house or condo.Residents use individual cabin while living, toilet, kitchen, shower room and HE (partially) are shared. Our shared-houses have become popular among foreigners as a new ...
        </p>
        <Link href="/en/sharedhouse">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-4"
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
          src="/assets/img/1663422100.jpg" loading="lazy"
          className="w-full px-8 pb-4 transition duration-300 ease-linear align-middle "
        />
      </div>
    </div>
    </div>
  );
};

export default Sharedhouse;
