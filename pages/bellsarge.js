import React from "react";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import Sharedhouse from "../components/Sharedhouse";
import LazyLoad from "react-lazy-load";

const bellsarge = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mv-sm.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            {" "}
            <h2 className="font-bold text-2xl md:text-3xl font-sans text-white uppercase">
              {" "}
              高級家具付き賃貸マンション（ベルサージュ目白）{" "}
            </h2>
            <Link href="http://www.mmtl.jp/">
              <a className="hover:font-bold text-white mx-auto" target="_blank">
                http://www.mmtl.jp/
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl py-16">
        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              {" "}
              <img
                src="/assets/img/1663423410.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
                alt="1"
              />{" "}
            </div>
            <div className="w-full md:mx-16 px-8">
              <h2 className="font-serif text-2xl md:text-3xl text-gray-800 font-bold mt-8">
                {" "}
                高級家具付き賃貸マンション（ベルサージュ目白）{" "}
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify">
                ベルサージュ目白は、入居したその日からすぐに生活を始められる高級家具付き賃貸マンションです。東京メトロ副都心線「雑司が谷」駅より徒歩1分、閑静な目白の住宅街の一角にあります。副都心線は、渋谷、明治神宮前（原宿）、新宿3丁目、池袋などを結ぶ人気路線です。
                周辺には緑豊かで格式高い学習院大学、日本女子大学、広大で美しい日本庭園を擁する椿山荘などがあります。
                また都電荒川線「鬼子母神駅」からは徒歩4分、おしゃれなレストランやカフェが多数あるJR山手線「目白駅」からは徒歩13分と3駅が徒歩圏内にあります。
                本物件1階にはコンビニエンスストアが入っており生活の拠点として大変便利な場所です。
              </p>

              <div className="flex space-x-2 justify-start my-4">
                {/* <div>
                 
                  <Link href="/bellsarge">
                    <a>
                      {" "}
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-800 font-light text-md leading-tight hover:text-blue-500 hover:border-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
active:bg-white active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        設備
                      </button>
                    </a>
                  </Link>

                
                  <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel"
                          >
                            {" "}
                            設備{" "}
                          </h5>
                          <button
                            type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />{" "}
                        </div>
                        <div className="modal-body relative p-4 font-sans font-light">
                          <ul>
                            <li>- 24 時間完全バックアップ発電機</li>
                            <li>- CCTV付きの24時間セキュリティサービス</li>
                            <li>- OA システム用のフロア トランキング グリッド</li>
                            <li>
                              - 国際規格の耐震性
                            </li>
                            <li>- 消火用スプリンクラーシステム</li>
                            <li>- ADSLインターネットアクセス</li>
                            <li>
                              - 日立と三菱電機が製造した高速乗用エレベーター4台
                            </li>
                            <li>- サービスエレベーター1台</li>
                            <li>- 機械式駐車システム</li>
                            <li>- 国際直通電話回線</li>
                            <li>- 衛星テレビ</li>
                            <li>- 400回線</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* fdfdf */}
                {/* <div>
                
                  <Link href="/bellsarge">
                    <a>
                      {" "}
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-800 font-light text-md leading-tight hover:text-blue-500 hover:border-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
active:bg-white active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        調度品
                      </button>
                    </a>
                  </Link>

                
                  <div
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel"
                          >
                            {" "}
                            調度品{" "}
                          </h5>
                          <button
                            type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />{" "}
                        </div>
                        <div className="modal-body relative p-4">
                          {" "}
                          Furnishings Modal body text goes here.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* fdfdf */}
              </div>
            </div>
            {/* sakura tower address */}
            {/* <div className="font-sans font-light m-4">
              <p>
                <strong> Address: </strong> address here <br />
                <strong> Tel: </strong> (xxx) xxx xxx <br />
                <strong> Fax: </strong> (xxx) xxx xxx <br />
                <strong> E-mail:</strong>
                <a href="mailto:#" className="hover:text-blue-500">
                  E-mail
                </a>{" "}
              </p>
              <br />

              <div>
                <p className="font-bold uppercase text-sm">
                  <Link href="http://www.mmtl.jp/">
                    <a className="hover:text-sky-400" target="_blank">
                      WEB SITE
                    </a>
                  </Link>
                  &emsp;&emsp;
                  <Link href="#">
                    <a className="hover:text-sky-400" target="_blank">
                      FACEBOOK
                    </a>
                  </Link>
                </p>
              </div>
            </div> */}

            <div></div>

            {/* sakura tower address end*/}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default bellsarge;
