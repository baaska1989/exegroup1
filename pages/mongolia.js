import React from "react";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import Head from 'next/head';
import MainLayout from "../layout/MainLayout";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "../assets/img/lol12.png",
    thumbnail: "../assets/img/lol12.png",
  },
  {
    original: "../assets/img/lol11.png",
    thumbnail: "../assets/img/lol11.png",
  },

  {
    original: "../assets/img/school01.jpg",
    thumbnail: "../assets/img/school01.jpg",
  },
  {
    original: "../assets/img/school02.jpg",
    thumbnail: "../assets/img/school02.jpg",
  },
  {
    original: "../assets/img/school03.jpg",
    thumbnail: "../assets/img/school03.jpg",
  },
  {
    original: "../assets/img/exe-school.png",
    thumbnail: "../assets/img/exe-school.png",
  },
];
const images2 = [
  {
    original: "../assets/img/lol16.png",
    thumbnail: "../assets/img/lol16.png",
  },
  {
    original: "../assets/img/lol18.png",
    thumbnail: "../assets/img/lol18.png",
  },
  {
    original: "../assets/img/lol17.png",
    thumbnail: "../assets/img/lol17.png",
  },
  {
    original: "../assets/img/lol19.png",
    thumbnail: "../assets/img/lol19.png",
  },
  {
    original: "../assets/img/finance.png",
    thumbnail: "../assets/img/finance.png",
  },
  {
    original: "../assets/img/value.png",
    thumbnail: "../assets/img/value.png",
  },
];

const mongolia = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  return (
    <>
    <Head>
      <title>{t.mongoliaPage.head}</title>
    </Head>
    <MainLayout>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
        style={{
          backgroundPosition: "50%",
          backgroundImage: 'url("/assets/img/mongolia1.jpg")',
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="flex h-full items-center justify-center text-center text-white">
            <h1 className="mb-6 text-2xl md:text-4xl font-bold">
              {t.mongoliaPage.head_title}
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-4 md:pl-10 col-span-1">
            <h1 className="font-bold text-2xl md:text-3xl text-gray-700 mt-8 text-center md:text-left">
              {t.mongoliaPage.title1}
            </h1>
            <div className="lg:flex block">
              <div className="flex text-justify">
                <div className="text-lg font-medium w-auto lg:h-auto md:py-4 pb-8 text-gray-500 max-w-4xl py-4 indent-4">
                  {t.mongoliaPage.text1_1}
                  <br></br>
                  <br></br>
                  <p>
                  {t.mongoliaPage.text1_2}
                  </p>
                  <br></br>
                  Olonlog EXE School of Ulaanbaatar<br></br>
                  <br></br>
                  Tumurchin Avenue 7/1, Chingeltei district, Ulaanbaatar 15171,
                  Mongolia<br></br>
                  Tel: (976) 9999 8306 / E-mail: info@exe.edu.mn<br></br>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:mt-12 md:p-8 p-4">
            <ImageGallery items={images} className="gallery-thumb" />
          </div>
        </div>
        {/* <div className="px-4">
          <h1 className="font-bold text-2xl text-gray-700 mt-8 text-center md:text-left md:pl-4">
            ターコイズ・ファイナンス
          </h1>
          <div className="lg:flex block">
            <div className="flex text-justify md:pl-4">
              <div className="text-lg font-medium w-auto lg:h-auto md:py-4 pb-8 text-gray-500 max-w-4xl indent-4">
                株式会社エクセは、モンゴル最大手証券会社であるBDSec
                JSCの機関投資家大株主の一つであり、役員会に取締役も務めています。
                <br></br>
                モンゴル金融庁の免許を受けた金融サービス会社である現地法人子会社であるターコイズ・ファイナンスを通じて、モンゴル証券取引所や店頭市場における株式・債券の引受を行うなど、BDSecと共にモンゴルの金融市場で事業を行っています。。
                <br></br>
                <br></br>
                <p>
                  引受業務以外に、ターコイズ・ファイナンスは現地の事業法人に直接ローンを発行し、非銀行部門の金融市場のマーケット・メーカーとしての役割も果たしています。{" "}
                </p>
                <br></br>
                <br></br>
              </div>
            </div>

            <div className="md:pl-16 md:pr-8 p-2">
              <ImageGallery items={images2} />
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-4 md:pl-10 col-span-1">
            <h1 className="font-bold text-2xl md:text-3xl text-gray-700 mt-8 text-center md:text-left">
            {t.mongoliaPage.title2}
            </h1>
            <div className="lg:flex block">
              <div className="flex text-justify">
                <div className="text-lg font-medium w-auto lg:h-auto md:py-4 pb-8 text-gray-500 max-w-4xl py-4 indent-4">
                  <p>
                  {t.mongoliaPage.text2_1}
                  </p>
                  <br></br>
                  <p>
                  {t.mongoliaPage.text2_2}
                  </p>
                  <br></br>
                  {t.mongoliaPage.text2_3}
                  <br></br>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:mt-12 md:p-8 p-4">
            <ImageGallery items={images2} className="gallery-thumb" />
          </div>
        </div>
      </div>
    </MainLayout>
    </>
    
  );
};

export default mongolia;
