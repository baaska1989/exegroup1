import React from "react";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";

const sakuratower = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mv-sm.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            {" "}
            <h2 className="font-bold text-4xl font-sans text-white uppercase">
              {" "}
              Sakura Tower Yangon{" "}
            </h2>
            <Link href="http://www.sakura-tower-yangon.com/">
              <a className="hover:font-bold text-white mx-auto" target="_blank">
                http://www.sakura-tower-yangon.com
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
                src="/assets/img/1657618380.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />{" "}
            </div>
            <div className="w-full">
              <h2 className="font-serif text-3xl text-gray-800 font-bold ">
                {" "}
                サクラタワー（ヤンゴン）{" "}
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                サクラタワーは（株）日本設計、（株）鴻池組と、日本企業の手で1999年に完成しました。ヤンゴンのビジネス及び政治のまさに中心地区に位置し、総貸室面積12,425㎡、高さは地上約100mの20階建て耐震設計オフィスビルです。
                <br />
                <br />
                地上1階～3階は総貸室面積1,183㎡の小売業エリアと
                なっており、主要航空会社のチケットオフィスや旅行代理店、歯医者、ショールームなどが入居しています。
                <br />
                <br />
                5階から19階にはJICA、三菱商事、日経、NHK等、グローバルに活躍する企業や団体が入居しています。
                <br />
                <br />
                最上階である20階には、ヤンゴン市内を一望しながら厳選された美味しい各国料理を楽しむことのできる「ティリピセヤ・スカイ・ビストロ」があります。
              </p>
              <div className="flex space-x-2 justify-start my-4">
                <div>
                  {/* Button trigger modal */}
                  <Link href="/sakuratower">
                    <a>
                      {" "}
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-800 font-light text-md leading-tight hover:text-blue-500 hover:border-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
active:bg-white active:shadow-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        設備
                      </button>
                    </a>
                  </Link>

                  {/* Modal */}
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
                            <li>- 24時間フルバックアップの自家発電システム</li>
                            <li>
                              -
                              24時間体制の監視カメラと警備員による24時間保守警備
                            </li>
                            <li>- OA機器用床下配線</li>
                            <li>- 高い国際基準に合わせて設計された耐震性</li>
                            <li>
                              - 火災報知機、スプリンクラー、避難口を各階に設置
                            </li>
                            <li>- ブロードバンドインターネットアクセス</li>
                            <li>
                              -
                              4基のハイスピードエレベーター（日立製、三菱電機製）
                            </li>
                            <li>- 貨物専用エレベーター</li>
                            <li>- 44台収容可能な機械式パーキングシステム</li>
                            <li>- IDD電話</li>
                            <li>- 衛星テレビ、ケーブルテレビ</li>
                            <li>- 電話回線：400回線</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* fdfdf */}
                {/* <div>
                  
                  <Link href="/sakuratower">
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
              </div>
            </div>

            <div className="font-sans font-light m-4">
              <p>
                <strong> Address: </strong> 339 Bogyoke Aung San Road, Kyauktada
                Township, Yangon, Myanmar <br />
                <strong> Tel: </strong> (95 1) 255 255 <br />
                <strong> E-mail: </strong>
                <a
                  href="mailto:stowersales@myanmar.com.mm"
                  className="hover:text-blue-500"
                >
                  stowersales@myanmar.com.mm
                </a>{" "}
              </p>
              <br />

              {/* <div>
                <p className="font-bold uppercase text-sm">
                  <Link href="http://www.sakura-tower-yangon.com/">
                    <a className="hover:text-sky-400" target="_blank">
                      WEB SITE
                    </a>
                  </Link>
                  &emsp;&emsp;
                  <Link href="https://www.facebook.com/profile.php?id=100057447250078">
                    <a className="hover:text-sky-400" target="_blank">
                      FACEBOOK
                    </a>
                  </Link>
                </p>
              </div> */}
            </div>

            <div></div>

            {/* sakura tower address end*/}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default sakuratower;
