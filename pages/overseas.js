import React from "react";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";

const overseas = () => {
  return (
    <MainLayout>
      <div className="my-4 max-w-[1200px] mx-auto">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2">
            <div className="md:p-8">
              <img
                src="/assets/img/i.jpg"
                loading="lazy"
                className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
              />
            </div>

            <div className="mt-4 md:p-8 mx-4">
              <h2 className="text-lg md:text-3xl font-semibold text-gray-700 text-center md:text-right">
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
      <div className="py-4 max-w-[1200px] mx-auto">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2">
            <div className=" p-4 md:p-4">
              <h2 className="text-lg md:text-3xl font-semibold text-gray-700 text-center md:text-left">
                モンゴルプロジェクト
              </h2>
              <p className="my-4 text-lg font-medium text-gray-500 text-justify">
                2010年に日本初の投資事業会社Sanaa EXE
                LLCを設立し、不動産投資事業、金融事業、教育事業を展開しています。エクセプラザ、Olonlog」スクールを運営しています。
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link href="/mongolia">
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
            <div className="md:px-4 row-start-1 md:row-span-1">
              <img
                src="/assets/img/exe website mongolia.jpg"
                loading="lazy"
                className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default overseas;
