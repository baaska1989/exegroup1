import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";

const Projects = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  return (
      <div className=" bg-[#f6fafd]">
        <div className="md:p-4">
          <h2 className="font-bold flex text-2xl md:text-3xl mb-5 mt-5 lg:p-6 text-gray-700 justify-center">
            {t.projects.bigtitle}
          </h2>
          <div className="flex justify-center pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="col-span-1">
                <img
                    src="/assets/img/1659582198.jpg"
                    loading="lazy"
                    className="lg:h-52 transition duration-300 ease-linear align-middle sm:h-full"
                />
              </div>

              <div className="max-w-lg m-4 col-span-1">
                <h1 className="text-primary text-sm mb-2">August 21, 2022</h1>
                <h2 className="font-serif text-2xl md:text-3xl text-gray-700 font-bold">
                  {t.projects.title1}
                </h2>
                <p className="font-light mt-6 font-sans text-gray-600 max-w-2xl">
                  {t.projects.text1}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img
                  src="/assets/img/1659582198.jpg"
                  loading="lazy"
                  className="lg:h-52 transition duration-300 ease-linear align-middle sm:h-full"
              />
            </div>

            <div className="m-4 max-w-lg">
              <h1 className="text-primary text-sm mb-2">August 21, 2022</h1>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-700 font-bold ">
                {t.projects.title2}
              </h2>
              <p className="font-light mt-2 font-sans text-gray-600 max-w-xl ">
                {t.projects.text2}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;