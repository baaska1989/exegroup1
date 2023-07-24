import React from "react";
import Aboutexe from "../../components/en/Aboutexe";
import Announcements from "../../components/en/Announcements";
import Domesticprojects from "../../components/en/Domesticprojects";
import Sharedhouse from "../../components/en/Sharedhouse";
import MainLayoutEn from '../../layout/MainLayoutEn';
import Link from "next/link";
import LazyLoad from 'react-lazy-load';

const domestic = () => {
  return (
    <MainLayoutEn>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/japan.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-3xl font-sans text-white uppercase">
              Domestic Projects
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <div className="w-full p-4 md:col-span-2 md:px-16 lg:col-span-3 ">
          <h1 className="font-serif text-3xl font-bold">Real Estate</h1>
          <h2 className="font-serif text-2xl font-bold py-4">
            <em>Restructuring of Real Estate Business</em>
          </h2>
          <p className="font-sans font-light leading-7 mt-4 ">
            EXE Corporation acquires real properties mainly in urban areas and
            revitalizes them by matching their function to the needs of the
            locality. EXE maximizes the return on investment by dealing with all
            aspects including acquisition, renovation, leasing, property
            management and sales.
          </p>
          <h2 className="font-serif text-2xl font-bold py-4">
            <em>Real Estate Rental Business</em>
          </h2>
          <p className="font-sans font-light leading-7 mt-4 ">
            EXE Corporation owns residential, commercial, office and parking
            buildings, and other property mainly in urban areas from which we
            generate stable revenue by maintaining high occupancy rates. We put
            great effort into managing efficiently-designed shared houses which
            used to be dilapidated / old properties that we renovated, thereby
            providing a new lifestyle choice to individuals from within Japan
            and overseas.
          </p>
          <h2 className="font-serif text-2xl font-bold py-4">
            <em>Real Estate Investment Business</em>
          </h2>
          <p className="font-sans font-light leading-7 mt-4 ">
            EXE Corporation has started buying commercial mortgage-backed
            securities and making M&A. EXE is very sensitive to changes in the
            market, and is actively involved in new investment which unites the
            real estate and finance businesses.
          </p>
        </div>

        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              <img
                src="/assets/img/1663423410.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />
            </div>
            <div className="w-full md:mx-8 p-4">
              <h2 className="font-serif text-2xl text-gray-800 font-bold ">
                Luxury Service Apartment - Bellsarge MEJIRO
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                Bellsarge Mejiro is a luxury furnished serviced apartment
                building where one can start living from the moment one moves
                in. Bellsarge Mejiro is located in a quiet residential area of
                Mejiro, and is only a 1 minute walk from Zoshigaya Station of
                Tokyo Metro Fukutoshin Line, a very convenient line that runs
                through Shibuya, Meijijingumae
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

            <div className="flex justify-center col-span-2 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex md:order-last md:ml-16 w-full">
                  <img
                    src="/assets/img/1663422100.jpg"
                    loading="lazy"
                    className="transition duration-300 ease-linear align-middle w-full"
                  />
                </div>
                <div className="w-full md:mr-8 md:pb-16 mx-auto p-4">
                  <h2 className="font-serif text-2xl text-gray-800 font-bold">
                    Shared House
                  </h2>
                  <p className="font-light mt-6 font-sans text-gray-800 max-w-xl">
                    EXE operates shared-houses concentrating on students
                    overseas. Shared-house is consort rental house styled that
                    several residents use one house or condo.Residents use
                    individual cabin while living, toilet, kitchen, shower room
                    and HE (partially) are shared. Our shared-houses have become
                    popular among foreigners as a new ...
                  </p>
                  <Link href="/en/sharedhouse">
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
        </div>
      </div>
    </MainLayoutEn>
  );
};

export default domestic;
