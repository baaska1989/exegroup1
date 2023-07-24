import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Domesticprojects = () => {
  return (
    <div className="pt-4 max-w-[1200px] mx-auto">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2">
          <div className="md:p-8">
            <img
              src="/assets/img/i.jpg"
              loading="lazy"
              className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
            />
          </div>

          <div className="p-4 md:py-8 md:pr-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center md:text-left">
              ミャンマープロジェクト
            </h2>
            <p className="my-4 text-lg font-medium text-gray-500 text-justify">
              1999年より日本初となるオフィスビル・ホテル事業を展開しています。サクラタワーを所有し、海外駐在員向けアパートメントとなるサクラレジデンスの運営をしています。
            </p>
            <div className="flex justify-center lg:justify-end">
              <Link href="/myanmar">
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

export default Domesticprojects;
