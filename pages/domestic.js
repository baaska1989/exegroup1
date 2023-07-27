import React from "react";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import MainLayout from "../layout/MainLayout";
import Head from "next/head";
const domestic = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  return (
      <>
        <Head>
          <title>{t.domesticProjects}</title>
        </Head>
        <MainLayout>
          <div
              className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
              style={{
                backgroundPosition: "50%",
                backgroundImage: 'url("/assets/img/japan.jpg")',
              }}
          >
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <div className="flex h-full items-center justify-center text-center text-white">
                <h1 className="mb-6 text-2xl md:text-4xl font-bold">
                  {t.domesticPage.head_title}
                </h1>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white md:py-16 md:pr-6">
              <div className="flex justify-center pt-4 col-span-2">
                <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 -mt-4">
                  <div>
                    <img
                        src="/assets/img/img2.jpg"
                        loading="lazy"
                        className="h-auto w-auto mt-2 md:ml-8"
                        alt="1"
                    />
                  </div>
                  <div className="md:px-10 px-4">
                    <div className="w-full md:mx-8 py-4">
                      <h2 className=" text-2xl md:text-3xl text-gray-700 font-bold">
                        {/* ▶不動産流動化事業 */}
                        {t.domesticPage.title1}
                      </h2>
                      <p className="font-normal mt-4 font-sans text-gray-500 text-justify">
                        {t.domesticPage.text1}
                      </p>
                    </div>
                    <div className="w-full md:mx-8 py-4">
                      <h2 className=" text-2xl md:text-3xl text-gray-700 font-bold ">
                        {t.domesticPage.title2}
                      </h2>
                      <p className="font-normal mt-6 font-sans text-gray-500 text-justify">
                        {t.domesticPage.text2}
                      </p>
                    </div>
                    <div className="w-full md:mx-8 py-4">
                      <h2 className=" text-2xl md:text-3xl text-gray-700 font-bold ">
                        {t.domesticPage.title3}
                      </h2>
                      <p className="font-normal mt-6 font-sans text-gray-500 text-justify">
                        {t.domesticPage.text3}
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="text-2xl md:text-3xl font-bold box-content h-32 w-auto p-10 border-0 bg-[#f6fafd] mb-4 text-gray-700" >
                {t.domesticPage.title4}{" "}
                <div className="font-normal text-base mt-4 md:ml-5 text-gray-500">
                  -{t.domesticPage.text4_1}<br></br>
                  -{t.domesticPage.text4_2} <br></br>
                  -{t.domesticPage.text4_3}
                </div>
              </div>
              <div className="pt-2">
                <div className="text-center text-2xl md:text-3xl font-bold my-4 mt-4 text-gray-700">
                  {t.domesticPage.title5}
                </div>
                <p className=" py-2 text-gray-500">
                  {t.domesticPage.text5}
                </p>
              </div>
            </div>
            <div className="px-4 py-6">
              <div className="text-2xl md:text-3xl font-bold box-content lg:h-32 w-auto p-10 border-0 bg-[#f6fafd] text-gray-700">
                {t.domesticPage.title6}{" "}
                <div className="font-normal text-base mt-5 md:ml-5 text-gray-500">
                  -{t.domesticPage.text6_1}
                  <br></br>
                  -{t.domesticPage.text6_2}<br></br>
                  -{t.domesticPage.text6_2}
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </>

  );
};

export default domestic;