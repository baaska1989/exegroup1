import React from "react";
import ImageGallery from "react-image-gallery";
import MainLayout from "../layout/MainLayout";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import Head from 'next/head';

const images = [
  {
    original: "../assets/img/lol10.jpg",
    thumbnail: "../assets/img/lol10.jpg",
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
    original: "../assets/img/lol8.jpg",
    thumbnail: "../assets/img/lol8.jpg",
  },
  {
    original: "../assets/img/lol9.jpg",
    thumbnail: "../assets/img/lol9.jpg",
  },
];
const images2 = [
  {
    original: "../assets/img/lol5.jpg",
    thumbnail: "../assets/img/lol5.jpg",
  },
  {
    original: "../assets/img/lol4.jpg",
    thumbnail: "../assets/img/lol4.jpg",
  },
  {
    original: "../assets/img/lol3.jpg",
    thumbnail: "../assets/img/lol3.jpg",
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
const myanmar = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  return (
      <>
        <Head>
          <title>{t.myanmar}</title>
        </Head>
        <MainLayout>
          <div
              className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
              style={{
                backgroundPosition: "50%",
                backgroundImage: 'url("/assets/img/yangon.jpg")',
              }}
          >
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <div className="flex h-full items-center justify-center text-center text-white">
                <h1 className="mb-6 text-2xl md:text-4xl font-bold">
                  {t.myanmarPage.head_title}
                </h1>
              </div>
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="px-4 md:pl-5 col-span-1">
                <h1 className="font-bold text-2xl md:text-3xl text-gray-700 mt-8 text-center md:text-left">
                  {t.myanmarPage.title1}
                </h1>
                <div className="lg:flex block">
                  <div className="flex text-justify">
                    <div className="text-lg font-medium w-auto lg:h-auto md:py-4 pb-8 text-gray-500 max-w-4xl p-4 indent-4">
                      <p>
                        {t.myanmarPage.text1}
                      </p>
                      <br></br>
                      <p>
                        {t.myanmarPage.text2}
                      </p>
                      <br></br>
                      {t.myanmarPage.text3}
                      <br></br>
                      <br></br>
                      Address: 339 Bogyoke Aung San Road, Kyauktada Township,
                      Yangon, Myanmar<br></br>
                      Tel: (95 1) 255 255<br></br>
                      E-mail: stowersales@myanmar.com.mm<br></br> Website:
                      <a href="http://www.sakura-tower-yangon.com">
                        http://www.sakura-tower-yangon.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:mt-12 md:p-8 p-4">
                <ImageGallery items={images} className="gallery-thumb" />
              </div>
            </div>
            <div className="px-5">
              <div className="text-2xl md:text-3xl font-bold box-content w-auto p-2 border-0 bg-[#f6fafd] my-4 text-gray-700">
                {t.myanmarPage.title2}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="font-normal mt-4 text-base text-gray-500 col-span-1">
                    {t.myanmarPage.line1}<br></br>-
                    &nbsp;{t.myanmarPage.line2}<br></br>-
                    &nbsp;{t.myanmarPage.line3}<br></br>-
                    &nbsp;{t.myanmarPage.line4}<br></br>-
                    &nbsp;{t.myanmarPage.line5}<br></br>-
                    &nbsp;{t.myanmarPage.line6}
                  </div>
                  <div className="font-normal text-base mt-4 text-gray-500 col-span-1">
                    - &nbsp;{t.myanmarPage.line7}<br></br>-
                    &nbsp;{t.myanmarPage.line8}<br></br>-
                    &nbsp;{t.myanmarPage.line9}<br></br>-
                    &nbsp;{t.myanmarPage.line10}<br></br>-
                    &nbsp;{t.myanmarPage.line11}<br></br>-
                    &nbsp;{t.myanmarPage.line12}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-4 md:pl-10 col-span-1">
                <h1 className="font-bold text-2xl md:text-3xl text-gray-700 text-center md:text-left py-2">
                  {t.myanmarPage.title3}
                </h1>
                <div className="lg:flex block">
                  <div className="flex text-justify">
                    <div className="text-lg font-medium w-auto lg:h-auto md:py-4 text-gray-500 max-w-4xl py-4 pb-8 indent-4">
                      {t.myanmarPage.text4}
                      <br></br>
                      <br></br>
                      {t.myanmarPage.text5}
                      <br></br>
                      <br></br>
                      <p>
                        {t.myanmarPage.text6}
                      </p>
                      <br></br>
                      Address: 9 Inya Road, Block 10, Kamaryut Township, Yangon,
                      Myanmar
                      <br></br>
                      Tel: (95 1) 525 001<br></br>
                      E-mail:<br></br>rsvn@sakuraresidence.com.mm,
                      sales@sakuraresidence.com.mm
                      <br></br> Website:
                      <a href="http://www.sakura-residence-yangon.com/">
                        http://www.sakura-residence-yangon.com/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:mt-12 md:p-8 p-4">
                <ImageGallery items={images2} />
              </div>
            </div>
            <div className="px-5">
              <div className="text-3xl font-bold box-content w-auto p-2 border-0 bg-[#f6fafd] my-4 text-gray-700">
                <div className=" text-gray-500 grid grid-cols-1 md:grid-cols-2">
                  <div className="col-span-1 text-gray-700">
                    {t.myanmarPage.title4}
                    <div className="font-normal text-base mt-5 block text-gray-500 pb-5">
                      {t.myanmarPage.line13}<br></br>-
                      &nbsp;{t.myanmarPage.line14}<br></br>-
                      &nbsp;{t.myanmarPage.line15}<br></br>-
                      &nbsp;{t.myanmarPage.line16}<br></br>-
                      &nbsp;{t.myanmarPage.line17}<br></br>-
                      &nbsp;{t.myanmarPage.line18}<br></br>-
                      &nbsp;{t.myanmarPage.line19}<br></br>-
                      &nbsp;{t.myanmarPage.line20}<br></br>-
                      &nbsp;{t.myanmarPage.line21}<br></br>
                      &nbsp;{t.myanmarPage.line21_1}<br></br>-
                      &nbsp;{t.myanmarPage.line22}<br></br>-
                      &nbsp;{t.myanmarPage.line23}<br></br>-
                      &nbsp;{t.myanmarPage.line24}<br></br>
                    </div>
                  </div>
                  <div className="col-span-1 text-gray-700 sm:mt-5 lg:mt-0 md:mt-0">
                    {t.myanmarPage.title5}
                    <div className="font-normal text-base mt-5 text-gray-500">
                      - &nbsp;{t.myanmarPage.line25}<br></br>-
                      &nbsp;{t.myanmarPage.line26}<br></br>-
                      &nbsp;{t.myanmarPage.line27}<br></br>-
                      &nbsp;{t.myanmarPage.line28}<br></br>-
                      &nbsp;{t.myanmarPage.line29}<br></br>-
                      &nbsp;{t.myanmarPage.line30}<br></br>-
                      &nbsp;&nbsp;{t.myanmarPage.line31}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </>

  );
};
export default myanmar;