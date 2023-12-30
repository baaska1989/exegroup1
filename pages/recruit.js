import React from "react";
import MainLayout from "../layout/MainLayout";
import Head from 'next/head';
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function recruit() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
      <>
        <Head>
          <title>{t.recruit}</title>
        </Head>
        <MainLayout>
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
            style={{
              backgroundPosition: "50%",
              backgroundImage: 'url("/assets/img/grand.jpg")',
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <div className="pt-24 md:pt-40 text-center text-white py-8 md:py-9">
                <h1 className="mb-6 text-2xl md:text-3xl font-bold items-center">
                  {t.recruitPage.head_title1}
                </h1>
              </div>
              <div className="text-sm pl-8 md:pl-16 md:text-2xl lg:text-3xl lg:mt-16 font-bold justify-start text-white">
                <h3>{t.recruitPage.head_title2}</h3>
                <h3 className="ml-4">{t.recruitPage.head_title3}</h3>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto">
            <div className="mx-auto text-left text-lg p-4 md:px-24 text-gray-500">
              <p className="mt-4">{t.recruitPage.text1}</p>
              <h1 className="mt-2">{t.recruitPage.text2}</h1>
              <p className="mt-2">{t.recruitPage.text3}</p>
            </div>

            {/* table */}
            <div className="md:py-4 p-4">
              <div className="md:mt-4 md:mx-20 border-2 border-gray-600 bg-darkblue h-14">
                <p className=" text-center text-lg font-medium text-white mt-3">
                  {t.recruitPage.table_title}
                </p>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue items-center">
                <div className="text-center font-medium m-3 text-gray-500">
                  {t.recruitPage.row1_1}
                </div>
                <div className="p-2 col-span-2m text-gray-500">
                  {" "}
                  {t.recruitPage.row1_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue items-center">
                <div className="text-center font-medium mt-48 md:mt-28 text-gray-500">
                  {t.recruitPage.row2_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  ■ {t.recruitPage.row2_21} <br></br>
                  {t.recruitPage.row2_22}
                  <br></br>※ {t.recruitPage.row2_23}
                  <br></br>■ {t.recruitPage.row2_24} <br></br>
                  {t.recruitPage.row2_25} <br></br>
                  {t.recruitPage.row2_26}
                  <br></br>■ {t.recruitPage.row2_27} <br></br>
                  {t.recruitPage.row2_28}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium m-3 text-gray-500">
                  {t.recruitPage.row3_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row3_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium mt-8 md:m-6 text-gray-500">
                  {t.recruitPage.row4_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row4_21} <br></br>
                  {t.recruitPage.row4_22}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium mt-10 md:m-6 text-gray-500">
                  {t.recruitPage.row5_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row5_21}
                  <br></br>
                  {t.recruitPage.row5_22}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium m-3 text-gray-500">
                  {t.recruitPage.row6_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row6_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium m-6 md:m-3 text-gray-500">
                  {t.recruitPage.row7_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row7_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium m-3 text-gray-500">
                  {t.recruitPage.row8_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row8_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium m-3 text-gray-500">
                  {t.recruitPage.row9_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row9_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium mt-7 md:m-3 text-gray-500">
                  {t.recruitPage.row10_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row10_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium mt-6 md:m-3 text-gray-500">
                  {t.recruitPage.row11_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row11_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium m-3 text-gray-500">
                  {t.recruitPage.row12_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row12_2}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
                <div className="text-center font-medium mt-8 md:m-7 text-gray-500">
                  {t.recruitPage.row13_1}
                </div>
                <div className="col-span-2 p-2 text-gray-500">
                  {t.recruitPage.row13_21} <br></br>※ {t.recruitPage.row13_22}
                </div>
              </div>
              <div className="divide-darkblue grid grid-cols-3 divide-x md:mb-12 md:mx-20 border-2 border-gray-600 items-center">
                <div className="text-center font-medium m-3 text-gray-500">
                  {t.recruitPage.row14_1}
                </div>
                <div className="p-2 col-span-2 text-gray-500">
                  {t.recruitPage.row14_2}
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2 className="font-bold text-2xl md:text-3xl text-gray-700 text-center mt-5">
                  {t.recruitPage.title1}
                </h2>
                <img
                  src="/assets/img/border.png"
                  alt=""
                  className="mx-auto max-w-2xl w-[95%]"
                  loading="lazy
              "
                />
              </div>
              <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4 md:ml-16">
                <img
                  src="/assets/img/img3.png"
                  className="md:ml-8 h-[250px] w-[250px] m-auto"
                  loading="lazy"
                />
                <div className="grid">
                  <h3 className="text-center md:text-left md:ml-5 my-2 font-bold text-gray-600">
                    中塚翔大（Shota Nakatsuka）　<br></br>Recruiter
                  </h3>
                  <div className="mt-32">
                    <p className="lg:-mt-40 m-4 md:mr-20 sm:-mt-32 -mt-32 text-gray-500">
                      {t.recruitPage.text4}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <h2 className="font-bold text-2xl md:text-3xl text-gray-700 text-center  md:m-4">
                    {t.recruitPage.title2}
                  </h2>

                  <div className="md:px-20 px-4">
                    <Fragment>
                      <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                          <p className="text-gray-700 font-medium">
                            {t.recruitPage.question1}
                          </p>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-gray-500 font-medium">
                            {t.recruitPage.answer1}
                          </p>
                        </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                          <p className="text-gray-700 font-medium">
                            {t.recruitPage.question2}
                          </p>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-gray-500 font-medium">
                            {t.recruitPage.answer2}
                          </p>
                        </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                          <p className="text-gray-700 font-medium">
                            {t.recruitPage.question3}
                          </p>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-gray-500 font-medium">
                            {t.recruitPage.answer3}
                          </p>
                        </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                          <p className="text-gray-700 font-medium">
                            {t.recruitPage.question4}
                          </p>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-gray-500 font-medium">
                            {t.recruitPage.answer4}
                          </p>
                        </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 5}>
                        <AccordionHeader onClick={() => handleOpen(5)}>
                          <p
                            className="text-gray-700 font-medium"
                            style={{ textAlign: "left;" }}
                          >
                            {t.recruitPage.question5}
                          </p>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-gray-500 font-medium text-left">
                            {t.recruitPage.answer5}
                          </p>
                        </AccordionBody>
                      </Accordion>
                      <Accordion open={open === 6}>
                        <AccordionHeader onClick={() => handleOpen(6)}>
                          <p className="text-gray-700 font-medium">
                            {t.recruitPage.question6}
                          </p>
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="text-gray-500 font-medium">
                            {t.recruitPage.answer6}
                          </p>
                        </AccordionBody>
                      </Accordion>
                    </Fragment>
                  </div>

                  <div className="items-center text-center">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddgYtieThncUj6lXwjolR6aRRCVLUjdG63GqD7Teo7uwjXvA/viewform?usp=send_form">
                      <button
                        className="inline-block px-20 py-5 m-10 bg-[#4473CA] text-white font-extrabold text-2xl rounded-lg leading-snug uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        role="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        {t.internshipPage.button}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </>
    </div>
  );
}

// export default recruit;