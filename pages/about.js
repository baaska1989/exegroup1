import React from "react";
import MainLayout from "../layout/MainLayout";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import Head from 'next/head';
const about = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  return (
    <>
      <Head>
        <title>{t.about}</title>
      </Head>
      <MainLayout>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
          style={{
            backgroundPosition: "50%",
            backgroundImage: 'url("/assets/img/mv.jpg")',
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <div className="flex h-full items-center justify-center text-center text-white">
              <h1 className="mb-6 text-2xl md:text-4xl font-bold">
                {t.aboutPage.about}
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <div className="px-4 about-text">
            <p className="text-center text-lg font-medium text-gray-500 pt-6">
              {t.aboutPage.short_desc}
            </p>
            <h2 className="text-center mt-8 underline underline-offset-4 font-bold text-2xl md:text-3xl text-gray-700 my-4">
              {t.aboutPage.title1}
            </h2>
            <p className="text-center text-lg font-medium text-gray-500 mt-4">
              {t.aboutPage.text1}
              <br></br>
              <br></br>
              {t.aboutPage.text2}
              <br></br>
              <br></br> {t.aboutPage.text3}
            </p>
            <h2 className="text-center mt-8 underline underline-offset-4 font-bold text-2xl md:text-3xl text-gray-700 my-4">
              {t.aboutPage.title2}
            </h2>
            <p className="text-center text-lg font-medium text-gray-500 mb-8">
              {t.aboutPage.text4}
              <br></br>
              <br></br>
              {t.aboutPage.text5}
              <br></br>
              <br></br> {t.aboutPage.text6}
              <br></br>
              <br></br> {t.aboutPage.text7}
            </p>
            <p className="text-end text-lg font-medium text-gray-500">
              {t.aboutPage.date}
            </p>
            <p className="text-end text-lg font-medium text-gray-500 mb-8 md:mb-0">
              {t.aboutPage.name}
            </p>
          </div>
          {/* table1 */}
          <div className="grid justify-center about-text text-gray-500 px-4">
            <div className="md:mt-20 border-2 border-black bg-darkblue h-14">
              <p className="text-center text-lg font-medium mt-3 text-white">
                {t.aboutPage.table1}
              </p>
            </div>
            <div className="items-center divide-black grid grid-cols-3 justify-center divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium m-3">
                {t.aboutPage.row0_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row0_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium m-3">
                {t.aboutPage.row1_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row1_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium md:m-6">
                {t.aboutPage.row2_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row2_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row3_1}
              </div>
              <div className="col-span-2 p-4">
                {t.aboutPage.row3_21}
                <br></br>
                {t.aboutPage.row3_22}
                <br></br>
                {t.aboutPage.row3_23}
                <br></br>
                <span className="">{t.aboutPage.row3_email}</span>
                <a className="" style={{ fontSize: "13px" }}>
                  {t.aboutPage.row3_24}
                </a>
                <br></br>
                {t.aboutPage.row3_25}
                <br></br>
                {t.aboutPage.row3_26}
                <br></br>
                {t.aboutPage.row3_27}
              </div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row4_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row4_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row5_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row5_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row6_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row6_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-b-2 border-t-black border-r-black border-l-black border-b-black">
              <div className="text-center font-medium">
                {t.aboutPage.row7_1}
              </div>
              <div className="col-span-2 p-4">
                {t.aboutPage.row7_21}
                <br></br>
                {t.aboutPage.row7_22}
                <br></br>
                {t.aboutPage.row7_23}
                <br></br>
                {t.aboutPage.row7_24}
                <br></br>
                {t.aboutPage.row7_25}
                <br></br>
                {t.aboutPage.row7_26}
                <br></br>
              </div>
            </div>
          </div>
          {/* table2 */}
          <div className="grid justify-center mt-10 mb-10 about-text px-4 text-gray-500">
            <div className="md:mt-20 border-2 border-black bg-darkblue h-14">
              <p className="text-center text-lg font-medium text-white mt-3">
                {t.aboutPage.table2}
              </p>
            </div>
            <div className="items-center divide-black grid grid-cols-3 justify-center divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row8_1}
              </div>
              <div className="col-span-2 p-4">
                {t.aboutPage.row8_2} <br />
                {t.aboutPage.row8_2_1}{" "}
              </div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row9_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row9_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row10_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row10_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row11_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row11_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row12_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row12_2}</div>
            </div>
            <div className="items-center divide-black grid grid-cols-3 divide-x border-t-2 border-r-2 border-l-2 border-t-black border-b-2 border-b-black border-r-black border-l-black">
              <div className="text-center font-medium">
                {t.aboutPage.row13_1}
              </div>
              <div className="col-span-2 p-4">{t.aboutPage.row13_2}</div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default about;