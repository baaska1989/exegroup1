import React from "react";
import Link from "next/link";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import LazyLoad from "react-lazy-load";

const Recruitment = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
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
            <div className="text-gray-700 p-10 opacity-80 max-w-2xl bg-gray-50">
              <h4 className="font-normal text-md mb-2 text-black"></h4>
              <div>
                <h2 className="font-semibold text-2xl md:text-3xl text-gray-800 pb-8 ">
                  {t.recruitment.title}
                </h2>
              </div>
              <p className="font-medium text-gray-800 text-lg">
                {t.recruitment.text}
              </p>
              <Link href="/recruit">
                <a
                    className="inline-block px-7 py-4 my-4 bg-[#0e1448] text-white font-medium text-sm leading-snug uppercase rounded hover:bg-[#0e1447] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                  {t.recruitment.button}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Recruitment;