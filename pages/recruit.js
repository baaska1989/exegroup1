import React from "react";
import MainLayout from "../layout/MainLayout";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function recruit() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div>
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
                リクルート
              </h1>
            </div>
            <div className="text-sm pl-8 md:pl-16 md:text-2xl lg:text-3xl lg:mt-16 font-bold justify-start text-white">
              <h3>変化こそチャンスである。</h3>
              <h3 className="ml-4">
                人と同じではなく自分なりの価値観を信じよう。
              </h3>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <div className="mx-auto text-left text-lg p-4 md:px-24 text-gray-500">
            <p className="mt-4">
              当社が常に掲げてきた信念は、「変化こそチャンスである」ということです。時代の変化にたじろぐことなく、不安定化をむしろビジネスチャンスと捉えていくのが当社のスピリットです。
            </p>
            <h1 className="mt-2">
              投資に関する信念は、「人」に対する信念にもつながります。
            </h1>
            <p className="mt-2">
              当社は人材への投資こそ最高の投資であると考えて、「自ら変化を求める人材」、「人と同じではなく自分なりの価値観を持っている人材」を常に求めております。
            </p>
          </div>

          {/* table */}
          <div className="md:py-4 p-4">
            <div className="md:mt-4 md:mx-20 border-2 border-gray-600 bg-darkblue h-14">
              <p className=" text-center text-lg font-medium text-gray-400 mt-3">
                求人票
              </p>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue items-center">
              <div className="text-center font-medium m-3">採用職種</div>
              <div className="p-2 col-span-2"> 総合職</div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-t-darkblue border-r-darkblue border-l-darkblue items-center">
              <div className="text-center font-medium mt-48 md:mt-28">
                採用職種詳細
              </div>
              <div className="p-2 col-span-2">
                ■プロジェクトマネジメント業務 <br></br>
                ミャンマーにて所有するオフィスビル、サービスアパートメント、ホテル、レストランに関わる業務全般を担当いただきます。
                <br></br>
                ※セールス、エンジニアリング、アカウンティング、人事・総務関連など
                <br></br>
                ■サクラタワー <br></br>
                ヤンゴンのランドマークタワー <br></br>
                多くの日本企業がオフィスを構え、最上階に位置する屋上のバー「ヤンゴンヤンゴン」はミャンマーにおけるエンターテイメントの発信地となっている。
                <br></br>
                ■サクラレジデンス <br></br>
                ヤンゴン最大の規模を誇る長期滞在者向けのアパートメント
              </div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium m-3">雇用形態</div>
              <div className="p-2 col-span-2">正社員</div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium mt-8 md:m-6">
                エントリー/採用方法
              </div>
              <div className="p-2 col-span-2">
                書類審査・面接試験・英語試験 <br></br>
                1週間のヤンゴンでのインターンシップ研修により最終判断
              </div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium mt-10 md:m-6">
                選考方法・重視点
              </div>
              <div className="p-2 col-span-2">
                アジアに興味ある方。アジアが大好きな方。<br></br>
                度胸と愛嬌のある方。ミャンマー語に興味ある方歓迎。
              </div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium m-3">
                提出書類・その他選考
              </div>
              <div className="p-2 col-span-2">
                履歴書　※中途の方は職務経歴書もご提出ください。
              </div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium m-6 md:m-3">想定年収</div>
              <div className="p-2 col-span-2">
                年収：280万~500万　※詳細は初回面接時にご説明します。
              </div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium m-3">
                昇給・賞与・諸手当
              </div>
              <div className="p-2 col-span-2">昇給あり、賞与あり</div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium m-3">勤務地</div>
              <div className="p-2 col-span-2">ミャンマー（ヤンゴン）</div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium mt-7 md:m-3">
                勤務時間
              </div>
              <div className="p-2 col-span-2">
                サクラタワー8:30~17:30　ホテル・レジデンス・レストラン・バー5:30~23:00（シフト制）
              </div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium mt-6 md:m-3">
                福利厚生
              </div>
              <div className="p-2 col-span-2">
                勤務年数報酬制度あり、社宅あり、送迎あり、食事手当
              </div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium m-3">社会保険</div>
              <div className="p-2 col-span-2">加入</div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mr-20 md:ml-20 border-t-2 border-r-2 border-l-2 border-gray-600 items-center">
              <div className="text-center font-medium mt-8 md:m-7">
                休日休暇
              </div>
              <div className="col-span-2 p-2">
                月4～8日（シフト制含む） <br></br>
                ※担当業務やイベント時期により変動、ミャンマー暦に準ずる
              </div>
            </div>
            <div className="divide-darkblue grid grid-cols-3 divide-x md:mb-12 md:mx-20 border-2 border-gray-600 items-center">
              <div className="text-center font-medium m-3">教育研修</div>
              <div className="p-2 col-span-2">必要に応じ支援制度あり</div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="font-bold text-2xl md:text-3xl text-gray-700 text-center mt-5">
                採用担当からのメッセージ
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
                  <p className="lg:-mt-40 m-5 md:mr-20 sm:-mt-32 -mt-32 text-gray-500">
                    日本人事としてインターン生、新卒・中途採用を担当しています。大学卒業後、外資系大手人材会社にて10年在籍し
                    現在は株式会社エクセの人事を担当。「変化こそチャンスである」は、創業当初からの弊社の信念となります。
                    自分なりの価値の確立を目指し、未来を切り開こうとする姿勢を全力で応援しています。興味のある方はお気軽にお問い合わせください！！
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <h2 className="font-bold text-2xl md:text-3xl text-gray-700 text-center  md:m-4">
                  よくある質問
                </h2>

                <div className="md:px-20 px-4">
                  <Fragment>
                    <Accordion open={open === 1}>
                      <AccordionHeader onClick={() => handleOpen(1)}>
                        ミャンマーってどんな国ですか？
                      </AccordionHeader>
                      <AccordionBody>
                        『アジア最後のフロンティア』と呼ばれるミャンマー。人口は5380万人、135の民族による多民族国家であり、イギリスの旧植民地でビルマ語と英語を利用します。国民の約9割が仏教徒で街中には仏塔（パゴダ）が並びます。素朴で穏やかな優しい人が多く、気質は日本人に似ているとも言われます。
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                      <AccordionHeader onClick={() => handleOpen(2)}>
                        英語はどれくらい利用しますか？
                      </AccordionHeader>
                      <AccordionBody>
                        英語は海外駐在員やローカルスタッフとの接客やコミュニケーションで利用します。ローカルスタッフとはビルマ語を話す機会もあります。
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                      <AccordionHeader onClick={() => handleOpen(3)}>
                        TOEICなど応募条件はありますか？
                      </AccordionHeader>
                      <AccordionBody>
                        3ヶ月以内の短期留学の場合、目安としてTOEIC800点程度の英語力があると幅広い業務への挑戦機会が提供できると考えています。6カ月など長期留学の場合はインターン当初の英語力は求めませんが、TOEIC600点はあることが望ましいです。
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                      <AccordionHeader onClick={() => handleOpen(4)}>
                        治安や衛生面は心配はないのでしょうか？
                      </AccordionHeader>
                      <AccordionBody>
                        2021年以降の軍事政権下で治安が心配されていますが、駐在員のルールを守り活動いただければ問題なく、過去40名以上のインターン受け入れにおいてトラブル・事故が発生したことはございません。衛生面においては外出時の飲食では注意が必要ですので駐在員の指示に従っていただきます。
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5}>
                      <AccordionHeader onClick={() => handleOpen(5)}>
                        駐在先はどちらになるのでしょうか？
                      </AccordionHeader>
                      <AccordionBody>
                        エクセが所有するサクラレジデンスに駐在いただきます。日本人駐在員も常駐しておりますので、困りごとがあればすぐに対応できる体制となっております。
                      </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6}>
                      <AccordionHeader onClick={() => handleOpen(6)}>
                        インターン参加は必須でしょうか？
                      </AccordionHeader>
                      <AccordionBody>
                        旅行と異なり、ミャンマー現地に駐在する場合、生活習慣や文化、慣習などへの適用が大切です。インターン参加は必須ではありませんが、インターンに参加した後に本採用エントリーをすることをオススメしております。
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
                      応募する
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

// export default recruit;
