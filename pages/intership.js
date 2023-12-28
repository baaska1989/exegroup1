import React from "react";
import MainLayout from "../layout/MainLayout";
import Head from 'next/head';
import ImageGallery from "react-image-gallery";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import styles from './styles.module.css'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const images = [
  {
    original: "../assets/img/myanmar_1.png",
    thumbnail: "../assets/img/myanmar_1.png",
  },
  {
    original: "../assets/img/lol6.jpg",
    thumbnail: "../assets/img/lol6.jpg",
  },
  {
    original: "../assets/img/lol7.jpg",
    thumbnail: "../assets/img/lol7.jpg",
  },
  {
    original: "../assets/img/lol10.jpg",
    thumbnail: "../assets/img/lol10.jpg",
  },
  {
    original: "../assets/img/lol9.jpg",
    thumbnail: "../assets/img/lol9.jpg",
  },
];
const images2 = [
  {
    original: "../assets/img/lol3.jpg",
    thumbnail: "../assets/img/lol3.jpg",
  },
  {
    original: "../assets/img/lol5.jpg",
    thumbnail: "../assets/img/lol5.jpg",
  },
  {
    original: "../assets/img/lol4.jpg",
    thumbnail: "../assets/img/lol4.jpg",
  },

  {
    original: "../assets/img/lol1.jpg",
    thumbnail: "../assets/img/lol1.jpg",
  },
  {
    original: "../assets/img/lol2.jpg",
    thumbnail: "../assets/img/lol2.jpg",
  },
];

// jdfjlgdflgkdfsngklndf

export default function intership() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  const [open, setOpen] = useState(1);

  const handleOpen = (value) =>
  {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <Head>
        <title>{t.internship}</title>
      </Head>
      <MainLayout>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
          style={{
            backgroundPosition: "50%",
            backgroundImage: 'url("/assets/img/img4.jpg")',
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <div className="pt-24 md:pt-36 text-center text-white py-8 md:py-10">
              <h1 className="mb-6 text-2xl md:text-4xl font-bold items-center">
                {t.internshipPage.head_title1}
              </h1>
            </div>
            <div className="text-sm pl-8 md:pl-16 md:text-2xl lg:text-3xl lg:mt-16 font-bold justify-start text-white">
              <h3>{t.internshipPage.head_title2}</h3>
              <h3 className="ml-4">{t.internshipPage.head_title3}</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto max-w-6xl">
          <p className="font-sans font-medium md:mt-8 mt-4 py-4 text-gray-500 mx-4">
            {t.internshipPage.text1}
          </p>
          <div className="px-4">
            <div className="border-solid border-2 border-[#a7adaf] rounded-[24px] ">
              <div className="flex flex-col md:flex-row justify-center">
                <div>
                  <div className="md:text-2xl font-bold text-gray-700">
                    <h2 className="text-center text-gray-700 font-semibold md:m-4 m-2">
                      <a className="md:text-3xl">\ </a>{" "}
                      {t.internshipPage.frame_title1}
                      <a className="md:text-3xl">/ </a>
                    </h2>
                  </div>
                  <div className="flex">
                    <img
                      src="/assets/img/sad.jpeg"
                      className="h-48 w-auto mx-auto hidden md:block"
                      loading="lazy"
                    />
                    <div className="text-gray-500 md:px-20 px-4 py-5 md:text-lg text-sm">
                      ・{t.internshipPage.frame_text1_1}
                      <br /> ・{t.internshipPage.frame_text1_2}
                      <br /> ・{t.internshipPage.frame_text1_3}
                      <br /> ・{t.internshipPage.frame_text1_4}
                      <br /> ・{t.internshipPage.frame_text1_5}
                    </div>
                    <img
                      src="/assets/img/sad2.jpeg"
                      className="h-48 w-auto mx-auto hidden md:block"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex md:hidden">
                  <img
                    src="/assets/img/sad.jpeg"
                    className="h-64 w-auto mx-auto"
                    loading="lazy"
                  />
                  <img
                    src="/assets/img/sad2.jpeg"
                    className="h-64 w-auto mx-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="text-center md:text-2xl text-gray-700 font-bold">
                {t.internshipPage.frame_title2}
              </div>
              <img
                src="/assets/img/border.png"
                className="h-12 w-[800px] mx-auto"
                loading="lazy"
              />
              {locale == "jp" ? (
                <img
                  src="/assets/img/text_box-1.png"
                  className="h-42  w-[800px] mx-auto p-2"
                  loading="lazy"
                />
              ) : (
                <img
                  src="/assets/img/text_box_en.png"
                  className="h-42  w-[800px] mx-auto p-2"
                  loading="lazy"
                />
              )}

              <div className="py-8">
                <div className="text-center md:text-xl text-gray-500">
                  {t.internshipPage.frame_title2_1}
                </div>
                <div className="text-center md:text-xl text-gray-500">
                  {t.internshipPage.frame_title2_2}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl px-4">
            <div className="text-gray-700 text-center md:p-8 sm:p-4 lg:p-8 font-bold md:text-2xl mt-4">
              {t.internshipPage.title1}
            </div>
            <div className="flex flex-col-reverse md:flex-row py-4">
              <img
                src="/assets/img/woman1.jpeg"
                className="h-52 lg:mt-8 mx-auto border-solid border-2 border-[#92ACDD] rounded-full md:p-4 sm:p-4 p-5"
                loading="lazy"
              />
              <p className="md:pl-4 mt-4 text-gray-500 items-center ">
                {t.internshipPage.text1_1}
                <br></br>
                <br></br>
                {t.internshipPage.text1_2}
                <br></br>
                {t.internshipPage.text1_3}
              </p>
            </div>
            <div className="flex flex-col-reverse md:flex-row mt-4 py-4">
              <p className="sm:pb-4 text-gray-500 ">
                {t.internshipPage.text1_4}
                <br></br>
                <br></br>
                {t.internshipPage.text1_5}
                <br></br>
                {t.internshipPage.text1_6}
              </p>
              <img
                src="/assets/img/guy1.jpg"
                className="p-5 lg:mt-8 h-52 mt-0 mx-auto border-solid border-2 border-[#92ACDD] rounded-full md:p-4 align-middle"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col mt-2 md:flex-row">
              <img
                src="/assets/img/woman2.jpeg"
                className="p-5 lg:mt-8 h-52 mx-auto border-solid border-2 border-[#92ACDD] rounded-full md:p-4 align-middle"
                loading="lazy"
              />
              <p className="md:pl-4 mt-4 md:pb-8 text-gray-500">
                {t.internshipPage.text1_7}
                <br></br>
                <br></br>
                {t.internshipPage.text1_8}
                <br></br>
                {t.internshipPage.text1_9}
              </p>
            </div>
            <div className="bg-[#f6fafd] p-4 mt-4">
              <div className="md:text-2xl text-gray-700 mt-10 font-bold">
                {t.internshipPage.title2}
              </div>
              <p className="text-gray-500 text-l break-words py-10">
                {t.internshipPage.text2_1}
              </p>
            </div>
            <div className="break-word text-lg mt-5 text-gray-500">
              <p>{t.internshipPage.text2}</p>
              <p className="mt-5">{t.internshipPage.text3}</p>
            </div>
          </div>
          <br />
          <div className="row md:px-10 px-4">
            <div className=" border-collapse border border-1 border-gray-500 text-center font-lg bg-darkblue text-white p-4">
              {t.internshipPage.table1}
            </div>
            <table className=" table-auto border-gray-500 w-[100%]">
              <thead>
                <tr>
                  <th className="border font-normal border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row1_1}
                  </th>
                  <th className="text-left border border-gray-500 p-5 font-normal text-gray-500">
                    {t.internshipPage.table1_row1_2}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center border border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row2_1}
                  </td>
                  <td className="border border-gray-500 p-5 text-gray-500">
                    {t.internshipPage.table1_row2_2}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row3_1}
                  </td>
                  <td className="border border-gray-500 p-5 text-gray-500">
                    1．{t.internshipPage.table1_row3_21}
                    <br></br>
                    2．{t.internshipPage.table1_row3_22}
                    <br></br>3.
                    {t.internshipPage.table1_row3_23}
                    <br></br>4．{t.internshipPage.table1_row3_24}
                    <br></br>
                    5．{t.internshipPage.table1_row3_25}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row4_1}
                  </td>
                  <td className="border border-gray-500 p-5 text-gray-500">
                    <a href="http://sakura-tower-yangon.com/">
                      {t.internshipPage.table1_row4_21}
                    </a>
                    <br></br>
                    <a href="http://sakura-residence-yangon.com/">
                      {t.internshipPage.table1_row4_22}
                    </a>
                    <br></br>
                    {t.internshipPage.table1_row4_23}
                    <br></br>
                    {t.internshipPage.table1_row4_24}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row5_1}
                  </td>
                  <td className="border border-gray-500 p-5 text-gray-500">
                    {t.internshipPage.table1_row5_2}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row55_1}
                  </td>
                  <td className="border border-gray-500 p-5 text-gray-500">
                    1{t.internshipPage.table1_row55_2}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row6_1}
                  </td>
                  <td className="border border-gray-500 p-5 text-gray-500">
                    1．{t.internshipPage.table1_row6_21}
                    <br></br>
                    {t.internshipPage.table1_row6_22}
                    <br></br>
                    {t.internshipPage.table1_row6_23}
                    <br></br>2．{t.internshipPage.table1_row6_24}
                    <br></br>
                    {t.internshipPage.table1_row6_25}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row7_1}
                  </td>
                  <td className="border border-gray-500 p-5 text-gray-500">
                    {t.internshipPage.table1_row7_2}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border border-gray-500 text-gray-500">
                    {t.internshipPage.table1_row8_1}
                  </td>
                  <td className="p-5 border border-gray-500 text-gray-500">
                    1．{t.internshipPage.table1_row8_21}
                    <br></br>
                    2．{t.internshipPage.table1_row8_22}
                    <br></br>
                    {t.internshipPage.table1_row8_23}
                    <br></br>　{t.internshipPage.table1_row8_24}
                    <br></br>
                    3．{t.internshipPage.table1_row8_25}
                    <br></br>
                    4．{t.internshipPage.table1_row8_26}
                    <br></br>
                    5．{t.internshipPage.table1_row8_27}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid justify-center">
            <p className="mt-6 text-gray-500 font-normal text-base md:text-lg ml-2">
              {t.internshipPage.text4}
            </p>
            <p className="text-gray-500 font-normal text-base md:text-lg ml-2">
              {t.internshipPage.text5}
            </p>
          </div>
          <div className="items-center text-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSddgYtieThncUj6lXwjolR6aRRCVLUjdG63GqD7Teo7uwjXvA/viewform">
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
          <div className="md:text-2xl text-gray-700 font-semibold p-4">
            <p className="text-gray-700 text-center font-semibold mb-4">
              {t.internshipPage.title3}
            </p>
            <p className="text-gray-700 font-semibold text-start">
              {t.internshipPage.title3_1}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex basis-1/3">
              <div className="grid md:ml-0 p-4 " style={{ width: "100%" }}>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 bg-darkblue border-gray-500">
                  <div className="text-center font-medium text-white m-3 border-gray-500">
                    {t.internshipPage.table2_row1_1}
                  </div>
                  <div className="p-2 col-span-6 font-medium text-white text-center border-gray-500">
                    {t.internshipPage.table2_row1_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="col-span-1 text-center font-medium m-3 text-gray-500">
                    1
                  </div>
                  <div className="p-2 col-span-6 font-medium text-gray-500">
                    {t.internshipPage.table2_row1_21} <br></br>
                    {t.internshipPage.table2_row1_22}
                    <br></br>
                    {t.internshipPage.table2_row1_24} <br></br>
                    {t.internshipPage.table2_row1_26} <br></br>
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    2
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row2_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    3
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row3_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    4
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row4_21}
                    <br></br>
                    {t.internshipPage.table2_row5_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    5
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row5_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    6
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row6_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    7
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row7_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    8
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row8_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    9
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row9_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    10
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row10_21}
                    <br></br>
                    {t.internshipPage.table2_row10_22}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    11
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row11_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    12
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row12_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    13
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row13_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    14
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table2_row14_2}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-5 p-4">
                <div className="items-center divide-gray-500 grid grid-cols-3 divide-x-2 md:mr-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    {t.internshipPage.table2_row15_1}
                  </div>
                  <div className="p-2 font-medium text-gray-500 col-span-2">
                    {t.internshipPage.table2_row15_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-3 divide-x-2 md:mr-5 border-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    {t.internshipPage.table2_row16_1}
                  </div>
                  <div className="p-2 font-medium text-gray-500 col-span-2">
                    {t.internshipPage.table2_row16_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-3 divide-x-2 md:mr-5 border-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    {t.internshipPage.table2_row17_1}
                  </div>
                  <div className="p-2 font-medium text-gray-500 col-span-2">
                    {t.internshipPage.table2_row17_2}
                  </div>
                </div>
              </div>
              <div className="md:pl-4 md:p-8 px-4">
                <ImageGallery items={images} />
              </div>
            </div>
          </div>

          <p className="mt-10 mb-10 m-6 font-medium text-lg text-gray-500">
            {t.internshipPage.text6}
          </p>
          <h1 className="font-bold md:text-2xl text-gray-700 ml-8 mt-5 mb-2">
            {t.internshipPage.table3_title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex basis-1/3">
              <div className="grid md:ml-0 p-4">
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 bg-darkblue border-gray-500">
                  <div className="text-center font-bold text-white m-3">
                    {t.internshipPage.table3_row0_1}
                  </div>
                  <div className="p-2 col-span-5 font-bold text-white text-center">
                    {t.internshipPage.table3_row0_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    1
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {" "}
                    {t.internshipPage.table3_row1_21}
                    <br></br>
                    {t.internshipPage.table3_row1_22}
                    <br></br>
                    {t.internshipPage.table3_row1_23}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    2
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row2_2} <br />
                    {t.internshipPage.table3_row2_2_1}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    3
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row3_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    4
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row4_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    5
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row5_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    6
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row6_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    7
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row7_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    8
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row8_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    9
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row9_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    10
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row10_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    11
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row11_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    12
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row12_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    13
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row13_2}
                  </div>
                </div>
                <div className="divide-gray-500 grid grid-cols-7 divide-x-2 md:ml-5 border-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    14
                  </div>
                  <div className="p-2 col-span-5 font-medium text-gray-500">
                    {t.internshipPage.table3_row14_2}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-5 p-4">
                <div className="items-center divide-gray-500 grid grid-cols-3 divide-x-2 md:mr-5 border-t-2 border-r-2 border-l-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    {t.internshipPage.table3_row15_1}
                  </div>
                  <div className="p-2 font-medium text-gray-500 col-span-2">
                    {t.internshipPage.table3_row15_2}
                  </div>
                </div>
                <div className="items-center divide-gray-500 grid grid-cols-3 divide-x-2 md:mr-5 border-2 border-gray-500">
                  <div className="text-center font-medium m-3 text-gray-500">
                    {t.internshipPage.table3_row16_1}
                  </div>
                  <div className="p-2 font-medium text-gray-500 col-span-2">
                    {t.internshipPage.table3_row16_2}
                  </div>
                </div>
              </div>
              <div className="md:pl-4 md:p-8 px-4">
                <ImageGallery items={images2} />
              </div>
            </div>
          </div>
          <p className="mt-10 mb-10 m-6 font-medium text-lg text-gray-500">
            {t.internshipPage.text_frame}
          </p>
          <div className="mx-4">
            <div className="border-2 border-gray-300 rounded-xl mt-5">
              <h2 className="text-center text-gray-700 md:text-xl font-bold m-4">
                <a className="md:text-3xl">\ </a>{" "}
                {t.internshipPage.frame2_title1}{" "}
                <a className="md:text-3xl">/ </a>
              </h2>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="ml-5 mb-5 w-20 h-20 fill-current text-gray-700"
                >
                  <path d="M16 17c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z" />
                  <path d="M16.4 13.2h-.8a2.613 2.613 0 0 1-2.493-1.864 1 1 0 1 1 1.918-.565c.075.253.312.43.575.43h.8a.6.6 0 0 0 0-1.201h-.8C14.166 10 13 8.833 13 7.4s1.166-2.6 2.6-2.6h.8c1.121 0 2.111.714 2.466 1.778a1 1 0 1 1-1.897.633.598.598 0 0 0-.569-.411h-.8a.6.6 0 0 0 0 1.2h.8c1.434 0 2.6 1.167 2.6 2.6s-1.166 2.6-2.6 2.6z" />
                  <path d="M16 6c-.271 0-.521-.11-.71-.29-.04-.05-.09-.1-.12-.16a.556.556 0 0 1-.09-.17.672.672 0 0 1-.061-.18C15.01 5.13 15 5.07 15 5c0-.26.109-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.021.2a.606.606 0 0 1-.06.18.578.578 0 0 1-.09.17c-.04.06-.08.11-.12.16-.189.18-.449.29-.709.29zm0 8c-.271 0-.521-.11-.71-.29-.04-.05-.09-.1-.12-.16a.556.556 0 0 1-.09-.17.672.672 0 0 1-.061-.18c-.009-.07-.019-.13-.019-.2 0-.26.109-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.021.2a.606.606 0 0 1-.06.18.578.578 0 0 1-.09.17c-.04.06-.08.11-.12.16-.189.18-.449.29-.709.29zm2 17H2a1 1 0 0 1-1-1v-9c0-.265.105-.52.293-.707C1.527 20.058 3.653 18 6 18c1.944 0 4.452 1.469 5.295 2H16a3.004 3.004 0 0 1 2.955 3.519l7.891-3.288a2.995 2.995 0 0 1 2.818.273A2.993 2.993 0 0 1 31 23a1 1 0 0 1-.496.864l-12 7A1.003 1.003 0 0 1 18 31zM3 29h14.729l11.14-6.498a1.01 1.01 0 0 0-.314-.334.984.984 0 0 0-.939-.091l-9.23 3.846A1.007 1.007 0 0 1 18 26h-8a1 1 0 1 1 0-2h6a1.001 1.001 0 0 0 0-2h-5c-.197 0-.391-.059-.555-.167C9.68 21.323 7.387 20 6 20c-1.09 0-2.347.88-3 1.439V29z" />
                </svg>
                <p className="flex-1 text-gray-700 font-bold md:text-lg ml-2 mt-8">
                  {t.internshipPage.frame2_title2}
                </p>
              </div>
              <div className="md:flex md:flex-row-reverse grid grid-cols-1 md:grid-cols-2">
                <p className="md:pr-10 p-2 text-justify font-medium text-gray-500 ">
                  {t.internshipPage.frame2_text2_1}
                </p>
                <img
                  src="/assets/img/7.jpg"
                  className="w-[100%] md:w-[50%] h-auto mx-auto md:px-10 px-4"
                  loading="lazy"
                />
              </div>
              <div className="flex">
                <img
                  src="/assets/img/airplane.png"
                  className="h-20 w-20 m-8 fill-current text-gray-700"
                  loading="lazy"
                />
                <p className="flex-1 text-gray-700 font-bold md:text-xl sm:mt-10 pr-5 mt-10 lg:mt-14">
                  {t.internshipPage.frame2_title3}
                </p>
              </div>
              <div>
                <p className="text-center text-gray-700 font-bold md:text-lg px-4">
                  {t.internshipPage.frame2_title4}
                </p>
                <p className="text-center m-4 font-medium text-gray-500 mt-5">
                  {t.internshipPage.frame2_text4_1}
                </p>
              </div>
              <div className="flex">
                <svg
                  style={{ minWidth: 100, marginTop: 20 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="pl-5 ml-3 mb-5 sm:w-20 sm:h-20 w-20 h-20 fill-current text-gray-700"
                  enableBackground="new 0 0 64 64"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M5.34,40.18c3.75,0,6.8,3.05,6.8,6.8c0,0.54,0.43,0.97,0.97,0.97h37.77c0.54,0,0.97-0.43,0.97-0.97
                  c0-3.75,3.05-6.8,6.8-6.8c0.54,0,0.97-0.43,0.97-0.97V24.79c0-0.54-0.43-0.97-0.97-0.97c-3.75,0-6.8-3.05-6.8-6.8
                  c0-0.54-0.43-0.97-0.97-0.97H13.12c-0.54,0-0.97,0.43-0.97,0.97c0,3.75-3.05,6.8-6.8,6.8c-0.54,0-0.97,0.43-0.97,0.97v14.43
                  C4.37,39.75,4.81,40.18,5.34,40.18z M6.31,25.7c4.05-0.45,7.27-3.67,7.72-7.72h35.94c0.45,4.05,3.67,7.27,7.72,7.72V38.3
                  c-4.05,0.45-7.27,3.67-7.72,7.72H14.03c-0.45-4.05-3.67-7.27-7.72-7.72V25.7z"
                  />
                  <path
                    d="M32,43.97c6.6,0,11.97-5.37,11.97-11.97S38.6,20.03,32,20.03S20.03,25.4,20.03,32S25.4,43.97,32,43.97z M32,21.97
                c5.53,0,10.03,4.5,10.03,10.03c0,5.53-4.5,10.03-10.03,10.03c-5.53,0-10.03-4.5-10.03-10.03C21.97,26.47,26.47,21.97,32,21.97z"
                  />
                  <path d="M27.99 37.37c.07.07.18.15.33.23.15.08.32.15.52.23.2.07.42.14.67.2.25.06.51.11.79.15l-.2 1.97c-.01.07-.01.14.01.19.02.06.07.11.14.14.07.04.17.06.3.08.13.02.29.03.5.03.16 0 .3-.01.4-.02.11-.02.19-.04.25-.06.06-.03.1-.06.13-.1.02-.04.04-.08.04-.14l.2-2.08c.62-.05 1.19-.17 1.7-.37.51-.19.95-.45 1.31-.78.36-.32.64-.71.84-1.16s.3-.95.3-1.51c0-.52-.08-.97-.24-1.35-.16-.37-.38-.69-.64-.95-.27-.26-.57-.48-.91-.66-.34-.18-.69-.34-1.04-.47-.35-.14-.7-.27-1.04-.39-.34-.12-.64-.26-.91-.41-.27-.15-.48-.33-.65-.53-.16-.21-.24-.46-.24-.77 0-.19.04-.37.11-.53.07-.16.18-.3.33-.42.15-.12.34-.21.58-.27.24-.06.53-.1.86-.1.37 0 .71.04 1.01.13.31.08.58.17.82.27.24.1.44.19.6.27s.28.13.37.13c.05 0 .08-.01.12-.03.03-.02.06-.07.09-.14.03-.07.04-.17.05-.3.01-.13.01-.29.01-.5 0-.15 0-.28-.01-.39-.01-.11-.02-.21-.03-.29-.02-.08-.04-.15-.07-.2-.03-.06-.07-.11-.13-.16-.05-.06-.15-.12-.3-.18-.14-.07-.3-.13-.48-.19-.17-.06-.36-.11-.56-.16-.2-.05-.39-.08-.57-.11l.19-1.84c0-.07-.01-.14-.03-.19-.02-.06-.06-.11-.14-.14-.07-.04-.17-.06-.31-.08-.13-.02-.3-.03-.5-.03-.17 0-.3.01-.41.02-.1.01-.19.03-.25.06-.06.03-.1.06-.13.1-.02.04-.04.08-.04.13l-.19 1.95c-.56.06-1.07.19-1.51.37-.44.18-.82.43-1.12.72-.3.3-.54.65-.7 1.04-.16.4-.24.84-.24 1.33 0 .54.08 1 .24 1.37.16.38.37.7.64.97.27.27.56.49.9.67.33.18.67.34 1.02.48.35.14.69.26 1.02.38s.63.26.9.41c.27.15.48.33.64.53.16.2.24.46.24.77 0 .47-.18.84-.55 1.12-.37.28-.93.42-1.69.42-.49 0-.91-.05-1.27-.15-.36-.1-.67-.2-.92-.32-.25-.12-.46-.22-.62-.32-.16-.1-.28-.15-.37-.15-.06 0-.12.01-.17.04-.05.03-.09.08-.12.16-.03.08-.05.19-.07.33-.01.14-.02.32-.02.54 0 .28.02.5.05.65C27.86 37.19 27.91 37.3 27.99 37.37zM51.82 35.79c2.09 0 3.79-1.7 3.79-3.79s-1.7-3.79-3.79-3.79-3.79 1.7-3.79 3.79S49.73 35.79 51.82 35.79zM51.82 30.15c1.02 0 1.85.83 1.85 1.85 0 1.02-.83 1.85-1.85 1.85s-1.85-.83-1.85-1.85C49.97 30.98 50.8 30.15 51.82 30.15zM15.97 32c0-2.09-1.7-3.79-3.79-3.79-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79C14.27 35.79 15.97 34.09 15.97 32zM10.33 32c0-1.02.83-1.85 1.85-1.85 1.02 0 1.85.83 1.85 1.85 0 1.02-.83 1.85-1.85 1.85C11.16 33.85 10.33 33.02 10.33 32z" />
                  <path
                    d="M63.03,12.55H0.97C0.43,12.55,0,12.99,0,13.52v36.95c0,0.54,0.43,0.97,0.97,0.97h62.06c0.54,0,0.97-0.43,0.97-0.97V13.52
                  C64,12.99,63.57,12.55,63.03,12.55z M62.06,49.51H1.94V14.49h60.12V49.51z"
                  />
                </svg>
                <p className="text-gray-700 font-bold md:text-lg p-2 mt-5 ml-5">
                  {t.internshipPage.frame2_title5}
                </p>
              </div>
              <div>
                <p className="text-center font-medium md:text-lg text-gray-500 mx-4 mt-5 mb-8">
                  {t.internshipPage.frame2_text5_1}
                </p>
              </div>
            </div>
          </div>
          <div className="md:px-6 mt-4">
            <div>
              <h2 className="font-bold md:text-2xl text-gray-700 text-center my-6">
                {t.internshipPage.frame2_title1}
              </h2>
              <img
                src="/assets/img/border.png"
                className="mx-auto m-4"
                loading="lazy"
              />
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2">
              <img
                src="/assets/img/team/1660885866.png"
                className="h-[200px] w-[200px] m-auto md:ml-8"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  関原夕希子（Yukiko Sekihara）<br></br>Sales Director
                </h3>
                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text7}
                </p>
              </div>
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4">
              <img
                src="/assets/img/team/1660884961.png"
                className="md:ml-8 h-[200px] w-[200px] m-auto"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  Cherry Aung　<br></br>General Manager
                </h3>
                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text8}
                </p>
              </div>
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4">
              <img
                src="/assets/img/team/1660884997.png"
                className="md:ml-8 h-[200px] w-[200px] m-auto"
                loading="lazy"
              />
              <div className="grid">
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  Zar Ni Lwin　<br></br>Residence Manager
                </h3>

                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text9}
                </p>
              </div>
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4">
              <img
                src="/assets/img/team/1660883696.png"
                className="md:ml-8 h-[200px] w-[200px] m-auto"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  堀越美緒（Mio Horikoshi）　<br></br>Sales Director
                </h3>
                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text10}
                </p>
              </div>
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4">
              <img
                src="/assets/img/team/1660884986.png"
                className="md:ml-8 h-[200px] w-[200px] m-auto"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  Phyoe Wai Moe　<br></br>YangonYangon Bar Manager
                </h3>
                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text11}
                </p>
              </div>
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4">
              <img
                src="/assets/img/team/1660884947.png"
                className="md:ml-8 h-[200px] w-[200px] m-auto"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  白井竜太（Ryuta Shirai）　<br></br>Deputy Manager
                </h3>
                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text12}
                </p>
              </div>
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4">
              <img
                src="/assets/img/team/photo2.png"
                className="md:ml-8 h-[205px] w-[205px] m-auto"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  下山徹（Toru Shimoyama）　<br></br>Sales Manager
                </h3>
                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text13}
                </p>
              </div>
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4">
              <img
                src="/assets/img/team/1660885016.png"
                className="md:ml-8 h-[200px] w-[200px] m-auto"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  Myo Zaw Oo　<br></br>Residence Assistant Manager
                </h3>
                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text14}
                </p>
              </div>
            </div>
            <div className="md:flex grid grid-cols-1 md:grid-cols-2 mt-4">
              <img
                src="/assets/img/team/photo1.png"
                className="md:ml-8 h-[215px] w-[215px] m-auto"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-700 text-center md:text-left mx-4 mt-4">
                  寺田 敏秀（Toshihide Terada）　<br></br>Myanmar Director
                </h3>
                <p className="text-gray-500 text-justify mx-4 my-2">
                  {t.internshipPage.text15}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl text-gray-700 text-center my-4">
              <a className="text-3xl">\ </a>
              {t.internshipPage.title5} <a className="text-3xl">/ </a>
            </h2>
            <div className="md:px-12 px-4">
              <Fragment>
                <Accordion open={open === 1}>
                  <AccordionHeader
                    className="accor-header"
                    onClick={() => handleOpen(1)}
                  >
                    <p className="text-gray-700">
                      {t.internshipPage.question1}
                    </p>
                  </AccordionHeader>
                  <AccordionBody
                    className="accor-body"
                    style={{
                      fontWeight: "500 !important",
                      fontSize: "1rem !important",
                    }}
                  >
                    <p className="text-gray-500">{t.internshipPage.answer1}</p>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    <p className="text-gray-700">
                      {t.internshipPage.question2}
                    </p>
                  </AccordionHeader>
                  <AccordionBody
                    style={{
                      fontWeight: "500 !important",
                      fontSize: "1rem !important",
                    }}
                  >
                    <p className="text-gray-700">{t.internshipPage.answer2}</p>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    <p className="text-gray-700">
                      {t.internshipPage.question3}
                    </p>
                  </AccordionHeader>
                  <AccordionBody
                    style={{
                      fontWeight: "500 !important",
                      fontSize: "1rem !important",
                    }}
                  >
                    <p className="text-gray-500">{t.internshipPage.answer3}</p>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    <p className="text-gray-700">
                      {t.internshipPage.question4}
                    </p>
                  </AccordionHeader>
                  <AccordionBody
                    style={{
                      fontWeight: "500 !important",
                      fontSize: "1rem !important",
                    }}
                  >
                    <p className="text-gray-500">{t.internshipPage.answer4}</p>
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
      </MainLayout>
    </>
  );
}

// fdhfhsoihgpiepgfhipsfhgpies