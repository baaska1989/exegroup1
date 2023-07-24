import React from "react";

import MainLayout from "../layout/MainLayout";

const domestic = () => {
  return (
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
              不動産・インベストメント事業
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
                  <h2 className="font-serif text-2xl md:text-3xl text-gray-700 font-bold">
                    {/* ▶不動産流動化事業 */}
                    不動産流動化事業
                  </h2>
                  <p className="font-light mt-4 font-sans text-gray-500 text-justify">
                    主に都心エリアを対象に、エリアマーケットやニーズに合わせてバリューアップを行うことで、その不動産の価値を最大限まで引き上げる事業を行っています。取得から、リノベーション、リーシング、プロパティマネジメント、売却までをトータルに行います。
                  </p>
                </div>
                <div className="w-full md:mx-8 py-4">
                  <h2 className="font-serif text-2xl md:text-3xl text-gray-700 font-bold ">
                    不動産賃貸事業
                  </h2>
                  <p className="font-light mt-6 font-sans text-gray-500 text-justify">
                    都心を中心にレジデンスビル、商業ビル、パーキングなどを保有し、様々なノウハウで高稼働を維持しながら賃貸を行うことで、安定的な収益をあげています。また、デザイン性に優れたリノベーションを行ったシェアハウス、ゲストハウス事業にも力を入れており、国内外の学生、単身者向けに新たなライフスタイルの空間提供を行っています。
                  </p>
                </div>
                <div className="w-full md:mx-8 py-4">
                  <h2 className="font-serif text-2xl md:text-3xl text-gray-700 font-bold ">
                    不動産投資事業
                  </h2>
                  <p className="font-light mt-6 font-sans text-gray-500 text-justify">
                    不動産担保付債券の取得や不動産保有会社のM&Aなどを行っています。マーケットの変化を見逃すことなく、不動産と金融を融合させた新たな投資事業にも積極的に取り組んでいます。
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="text-2xl md:text-3xl font-bold box-content h-32 w-auto p-10 border-0 bg-[#f6fafd] mb-4">
            プロジェクト例{" "}
            <div className="font-normal text-base mt-4 md:ml-5">
              -べルサージュ目白<br></br>
              -早稲田ハウス <br></br>-四谷ハウス
            </div>
          </div>
          <div className="pt-2">
            <div className="text-center text-2xl md:text-3xl font-bold my-4 mt-4">
              その他投資事業
            </div>
            <p className=" py-2">
              不動産投資事業の他に、ユニークな投資対象として教育、アート、投資家向けサービスなどにも力を入れています。いずれも、お客様のニーズを丹念にお聞きし、十分に相談した上でお一人お一人に合った形でご提案をさせて頂きます。
            </p>
          </div>
        </div>
        <div className="px-4 py-6">
          <div className="text-2xl md:text-3xl font-bold box-content lg:h-32 w-auto p-10 border-0 bg-[#f6fafd]">
            プロジェクト例{" "}
            <div className="font-normal text-base mt-5 md:ml-5">
              -金融事業
              <br></br>
              -教育事業<br></br>
              -アート投資事業（マン・レイ写真コレクション　北斎富嶽三十六　など）
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default domestic;
