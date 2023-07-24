import React from "react";
import Link from "next/link";
import LazyLoad from 'react-lazy-load';

const Domesticprojects = () => {
  return (
    <div className="pb-8">
      <div className="my-8 pt-8">
        <h2 className="font-serif text-3xl text-gray-800 text-center font-semibold">
          Domestic Projects
        </h2>
        <div className="flex justify-center">
          <hr className="border-b border-1 border-rose-300 w-16 mt-4" />
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src="/assets/img/1663423410.jpg"
              loading="lazy"
              className="transition duration-300 ease-linear align-middle"
            />
          </div>

          <div className="m-4 max-w-lg">
            <h2 className="font-serif text-2xl text-gray-800 font-bold ">
              Luxury Service Apartment - Bellsarge MEJIRO
            </h2>
            <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
              Bellsarge Mejiro is a luxury furnished serviced apartment building
              where one can start living from the moment one moves in. Bellsarge
              Mejiro is located in a quiet residential area of Mejiro, and is
              only a 1 minute walk from Zoshigaya Station of Tokyo Metro
              Fukutoshin Line, a very convenient line that runs through Shibuya,
              Meijijingumae
            </p>
            <Link href="/en/bellsarge">
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

export default Domesticprojects;
