import React from "react";
import Link from "next/link";

const Aboutexe = () => {
  return (
    <div className="pb-4 max-w-[1200px] mx-auto">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2">
          <div className="py-2 md:p-8">
            <img
              src="/assets/img/2.JPG"
              loading="lazy"
              className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
            />
          </div>

          <div className="p-4 md:pr-8 md:pt-8">
            <h2 className="text-2xl font-bold text-gray-700 text-center md:text-left md:text-3xl">
              エクセについて
            </h2>
            <p className="my-4 text-lg font-medium text-gray-500 text-justify">
              私ども、株式会社エクセは1991年8月6日に生まれました。それから30年、20世紀の最後の10年と21世紀の最初の20年の激動の中をブティックの投資事業会社として、時代の流れとともに前へ前へと進んでまいりました。
            </p>
            <div className="flex justify-center lg:justify-end">
              <Link href="/about">
                <button
                  className="px-14 py-3 bg-darkblue text-gray-400 font-extrabold text-base leading-snug uppercase"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  詳細はこちら
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Message
export default Aboutexe;
