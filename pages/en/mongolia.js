import React from "react";
import Link from "next/link";
import MainLayoutEn from '../../layout/MainLayoutEn';
import LazyLoad from "react-lazy-load";

const mongolia = () => {
  return (
    <MainLayoutEn>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mongolia.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-3xl font-sans text-white uppercase">
              Mongolia Projects
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        
        
      <div className="flex justify-center col-span-2 md:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex md:order-last md:ml-16 ">
                  <img
                    src="/assets/img/1659508110.jpg"
                    loading="lazy"
                    className="transition duration-300 ease-linear align-middle w-full h-72"
                  />
                </div>
                <div className="w-full pb-16 px-8">
                  <h2 className="font-serif text-3xl text-gray-800 font-bold mt-8">
                  Educational sector
                  </h2>
                  <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify">
                  Since 2010, we have financed educational organizations in Mongolia and implemented school building construction projects for a total of 3,500 students. Therefore, as the next step in the educational sector, in 2018, we established and started operating Olonlog EXE IT school, which is the first secondary school in Mongolia where it has IT curriculum from the elementary school. In addition to IT, students are able to study subjects such as mathematics and English to an advanced level. At present, Olonlog EXE school has nearly 500 excellent students from the first grade to high school level who are studying diligently to become Mongolia&apos;s representatives in the global digital age. <br /> <br />
                  </p>
                  <Link href="/en/education">
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





        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              <img
                src="/assets/img/1659582198.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />
            </div>
            <div className="w-full px-8 md:mx-16">
              <h2 className="font-serif text-3xl text-gray-800 font-bold mt-8">
              Financial sector
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify">
              EXE Corporation is one of the major institutional investors of the BDSec JSC, Mongolia&apos;s largest securities company, and serves as a director on the Board of directors. As the leading securities company in Mongolia, BDSec has acted as the lead underwriter for major securities activities in the Mongolian securities market, such as the issuance of bonds by Erdenes Tavan Tolgoi, the largest mining company in Mongolia, and the IPO of Khan Bank, the largest commercial bank. <br/><br/>
              
              </p>
              <Link href="/en/finance">
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
    </MainLayoutEn>
  );
};

export default mongolia;
