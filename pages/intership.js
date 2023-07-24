import React from "react";
import MainLayout from "../layout/MainLayout";
import ImageGallery from "react-image-gallery";
import { Fragment, useState } from "react";
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
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
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
              ビジネスインターンシップ
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

      <div className="flex flex-col mx-auto max-w-6xl">
        <p className="font-sans font-light text-lg md:mt-8 mt-4 py-4 text-primary mx-5">
          ビジネスインターンシップ制度は、「自ら変化を求める人材」「人と同じではなく自分なりの価値観を持っている人材」を支援するこ
          とが「最高の投資」と位置付け、単純なインターンとしてではなく、ビジネ
          スの長期的な実践研修の場として創設しました。
        </p>
        <div className="px-4">
          <div className="border-solid border-2 border-[#a7adaf] rounded-[24px] ">
            <div className="flex flex-col md:flex-row justify-center">
              <div>
                <div className="md:text-2xl font-bold text-gray-700">
                  <h2 className="text-center text-gray-700 font-semibold md:m-4 m-2">
                    <a className="md:text-3xl">\ </a>{" "}
                    　留学するか迷っていませんか？　
                    <a className="md:text-3xl">/ </a>
                  </h2>
                </div>
                <div className="flex">
                  <img
                    src="/assets/img/sad.jpeg"
                    className="h-64 w-auto mx-auto hidden md:block"
                    loading="lazy"
                  />
                  <div className="text-gray-600 md:px-20 px-4 py-5 md:text-lg text-sm">
                    ・留学費用が高い
                    <br /> ・ゆっくりと語学を学びたい
                    <br /> ・人と違った経験がしたい
                    <br /> ・初めての海外で不安がある
                    <br /> ・語学学校ではなく実務経験を積みたい
                  </div>
                  <img
                    src="/assets/img/sad2.jpeg"
                    className="h-64 w-auto mx-auto hidden md:block"
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
              エクセのビジネスインターンシップ制度なら
            </div>
            <img
              src="/assets/img/border.png"
              className="h-12 w-[800px] mx-auto"
              loading="lazy"
            />

            <img
              src="/assets/img/text_box.png"
              className="h-42  w-[800px] mx-auto p-2"
              loading="lazy"
            />
            <div className="py-8">
              <div className="text-center md:text-xl text-gray-500">
                2000年よりインターンシップ受け入れを開始し、
              </div>
              <div className="text-center md:text-xl text-gray-500">
                40名を超える学生・社会人に参加頂いています。
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl px-10">
          <div className="text-gray-700 text-center p-10 font-bold md:text-2xl">
            ～インターンシップ体験者の声～
          </div>

          <div className="flex flex-col md:flex-row">
            <img
              src="/assets/img/woman1.jpeg"
              className="h-56 w-56 mx-auto border-solid border-2 border-[#92ACDD] rounded-full md:p-4"
              loading="lazy"
            />
            <p className="md:pl-4 text-primary items-center py-4">
              S.Iさん　立命館アジア太平洋大学　国際経営学科<br></br>
              ▶国籍の異なる人との出会い
              ３か月という短い期間でしたが、国籍を問わない多くの人との出会いは、日本では得難く、とても刺激的で、価値観が変わるような経験でした。実際に社会で働く方々との交流の機会は大変貴重で、就職活動のアドバイスや海外で働くこと、女性が働くということについて多くの立場の方から意見を聞くことができました。
              <br></br>
              ▶不安定な情勢下でも安心な留学体制
              軍事政権下で不安もありましたが、ビザ手配から帰国まで手厚いサポートがあり何一つ不自由もなくインターンに集中して望めました。また、生活面から業務面でも私が成長できるようなアドバイスがあっただけでなく、就職活動に関しても定期的に相談する機会があり、自分の将来を真剣に考える大変有意義な期間となりました。
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row">
            <p className="p-4 text-primary ">
              T.Mさん　東京外国語大学　ビルマ語学科<br></br>
              ▶現地スタッフとのコミュニケーション
              日本とは全く違うミャンマーで暮らすことに対する不安もありました。しかし毎日、ホテルのスタッフと触れ合う中ですぐにその不安も消えてしまいました。また、ビジネスを学ぶだけでなく、ホテルスタッフとの会話を通してビルマ語の習得もできたことが本当によかったです。
              <br></br>
              ▶人々の温かさに触れる充実したインターン生活
              このインターンシップで、何よりも一番心に残ったのは、人々の温かさです。ホテルのスタッフは、最初から最後まで、わがままな私に親切にしてくれ、本当の家族のように接してくれました。毎日が本当に充実しており、あっという間に過ぎ去ってしまいました。この経験は絶対に忘れることはありませんし、私自身、インターンシップを終えて、以前より成長できたと思います。
            </p>
            <img
              src="/assets/img/guy1.jpg"
              className="h-56 w-56 mx-auto border-solid border-2 border-[#92ACDD] rounded-full md:p-4"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <img
              src="/assets/img/woman2.jpeg"
              className="h-56 w-56 mx-auto border-solid border-2 border-[#92ACDD] rounded-full md:p-4"
              loading="lazy"
            />
            <p className="md:pl-4 md:pb-8 text-primary py-4">
              E・Mさん　上智大学　教育学科<br></br>
              ▶今、ミャンマーいくということ
              インターンシップに参加して、まず驚いたことは、ミャンマーの治安の良さと人の温厚さです。ミャンマーは熱心な仏教徒の国で通信や流通が安定していないからこそ、情報が溢れておらず、人々の生活は穏やかで豊かであるように感じました。10年も経てばミャンマーも変わります。このタイミングで参加できたことにとても感謝しています。
              <br></br>
              ▶チャレンジングなインターン内容
              インターン期間は、2週間でした。主な仕事内容は、日本人としてのクリンネスの感覚を、現地のスタッフに共有するということでした。ホテル業を何も知らない私が、自分なりの改善案を共有するということは重圧でしたが日本人マネージャーの方々が最大限にサポートしてくれました。苦戦しながらも目標達成に向けて努力するという工程は自分の糧になったと感じております。私にとって、チャレンジングなインターンでしたがとても濃い2週間となりました。ぜひ半年以上の参加をおすすめします！
            </p>
          </div>

          <div className="bg-[#f6fafd] p-4">
            <div className="md:text-2xl text-gray-700 mt-10">
              インターン実績大学
            </div>
            <p className="text-primary text-lg break-words p-10">
              早稲田大学、明治大学、上智大学、立命館アジア太平洋大学、明治学院大学、国士舘大学、静岡大学、調教外国語大学　など
            </p>
          </div>
          <div className="break-word text-lg mt-5 text-primary p-5">
            <p>
              海外でのインターンシップというと少々敷居が高いように感じ身構えてしまうかもしれません。ただ、この小さな一歩は、あなたの人生の大きな財産になることは間違いありません。
            </p>
            <p className="mt-5">
              私たちの目的は、新たな一歩へ皆さんの背中を押すことです。人生に挑戦したい、今を変えたい、あなたのチャレンジをお待ちしています。
            </p>
          </div>
        </div>
        <br />
        <div className="row md:px-10 px-4">
          <div className=" border-collapse border border-1 border-gray-600 text-center bg-darkblue text-white p-4">
            会社概要
          </div>
          <table className="text-lg table-auto border-gray-600 w-[100%]">
            <thead>
              <tr>
                <th className="border font-normal border-gray-600">時期</th>
                <th className="text-left border border-gray-600 p-5 font-normal">
                  随時
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center border border-gray-600">参加対象</td>
                <td className="border border-gray-600 p-5">
                  年齢・職歴問わず、学生歓迎。
                </td>
              </tr>
              <tr>
                <td className="text-center border border-gray-600">応募資格</td>
                <td className="border border-gray-600 p-5">
                  1．アジアに興味がある、アジアが大好きな方。<br></br>
                  2．ホテル運営に興味があるなど好奇心を持ち、また向上心をもった元気のある方。
                  <br></br>3.
                  リゾートホテルにおけるサービス、国際的な感覚、英語力等を身につけたい方
                  <br></br>4．自分の英語力、その他の言語力を試したい方。
                  <br></br>
                  5．旅行ではなく、人とは違った海外経験をしたい方。
                </td>
              </tr>
              <tr>
                <td className="text-center border border-gray-600">実施場所</td>
                <td className="border border-gray-600 p-5">
                  <a href="http://sakura-tower-yangon.com/">
                    サクラタワー http://sakura-tower-yangon.com/
                  </a>
                  <br></br>
                  <a href="http://sakura-residence-yangon.com/">
                    サクラレジデンスー http://sakura-residence-yangon.com/
                  </a>
                  <br></br>（ミャンマー：ヤンゴン）<br></br>
                  ※日本人が常に駐在しています。
                </td>
              </tr>
              <tr>
                <td className="text-center border border-gray-600">職種</td>
                <td className="border border-gray-600 p-5">
                  ウェイター・ウェイトレス、ハウスキーピング、お土産販売　など
                </td>
              </tr>
              <tr>
                <td className="text-center border border-gray-600">研修期間</td>
                <td className="border border-gray-600 p-5">
                  1ヶ月～（要相談）
                </td>
              </tr>
              <tr>
                <td className="text-center border border-gray-600">自己負担</td>
                <td className="border border-gray-600 p-5">
                  1．ビザ・航空券・保険等費用<br></br>
                  ※ビザ申請は約1カ月程度かかります。<br></br>
                  （日本－ヤンゴン航空券代、ヤンゴン－バガン移動費用、海外旅行保険料等）
                  <br></br>2．食費を含む生活費用<br></br>
                  ※研修は現地集合（ヤンゴン）となります。
                </td>
              </tr>
              <tr>
                <td className="text-center border border-gray-600">企業負担</td>
                <td className="border border-gray-600 p-5">
                  宿泊・食事等費用、通勤送迎費の一部または全額補助
                </td>
              </tr>
              <tr>
                <td className="text-center border border-gray-600">
                  その他補足
                </td>
                <td className="p-5 border border-gray-600">
                  1．給与等の支給はございません。<br></br>
                  2．インターンシップは本採用を前提としたものではありません。
                  <br></br>　
                  本採用を希望される方は別途選考を受けて頂く必要があります。
                  <br></br>　 ※インターン生から本採用の実績あり。<br></br>
                  3．渡航前にB型肝炎の検査、海外保険の加入をお願します。
                  <br></br>
                  4．インターンの参加には誓約書へ同意いただく必要があります。
                  <br></br>
                  5．渡航時は最低限の所持金として約1000ドルをご用意いただきます。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid justify-center">
          <p className="mt-6 text-gray-500 font-normal text-base md:text-lg ml-2">
            ※ 応募書類は返却いたしません。
          </p>
          <p className="text-gray-500 font-normal text-base md:text-lg ml-2">
            ※ ご不明な点がございましたら、お問い合わせください。
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
              応募する
            </button>
          </a>
        </div>
        <div className="md:text-3xl text-gray-700 font-semibold p-4">
          <p className="text-primary text-center font-semibold mb-4">
            ～インターンシップの内容（例）～
          </p>
          <p className="text-primary font-semibold text-start">
            サクラタワー研修プログラム（例）
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex basis-1/3">
            <div className="grid md:ml-0 p-4 ">
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 bg-darkblue border-gray-600">
                <div className="text-center font-bold text-gray-400 m-3">
                  日目
                </div>
                <div className="p-2 col-span-6 font-bold text-gray-400 text-lg text-center">
                  内容
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">1</div>
                <div className="p-2 col-span-2 font-medium text-gray-600 text-lg">
                  ヤンゴン到着 <br></br>オリエンテーション<br></br>
                  ユニフォーム作成<br></br>
                  サクラカフェ研修スタート
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">2</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  サクラカフェ研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">3</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  休暇
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">4</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  スカイビストロへ移動<br></br>
                  レストラン研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">5</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  レストラン研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">6</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  休暇
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">7</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  レストラン研修
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">8</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  レストラン研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">9</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  休暇
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">10</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  ヤンゴンヤンゴンへ移動<br></br>
                  バーにてレセプション業務
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">11</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  バー研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">12</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  バー研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">13</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  休暇
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-2 border-gray-600">
                <div className="text-center font-medium m-3">14</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  バー研修
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-5 p-4">
              <div className="items-center divide-gray-600 grid grid-cols-3 divide-x-2 md:mr-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">カフェ研修</div>
                <div className="p-2 font-medium text-gray-600 text-lg col-span-2">
                  マグカップ等食器洗いや店内清掃、飲食店に欠かせない基本を学びます。専用マシーンを使ったコーヒーを淹れるバリスタ業務、フレッシュジュース等の作り方を学び、実践します。
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-3 divide-x-2 md:mr-5 border-2 border-gray-600">
                <div className="text-center font-medium m-3">
                  レストラン研修
                </div>
                <div className="p-2 font-medium text-gray-600 text-lg col-span-2">
                  備品や清掃確認、テーブル、バーのセッティングを行います。英語での接客、カクテルやデザートの作り方を学び、実践します。
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-3 divide-x-2 md:mr-5 border-2 border-gray-600">
                <div className="text-center font-medium m-3">バー研修</div>
                <div className="p-2 font-medium text-gray-600 text-lg col-span-2">
                  入場チケットの販売管理、備品や清掃確認をします。テーブル、バーのセッティングを行います。英語での接客業務を行います。
                </div>
              </div>
            </div>
            <div className="md:pl-4 md:p-8 px-4">
              <ImageGallery items={images} />
            </div>
          </div>
        </div>

        <p className="mt-10 mb-10 m-6 font-medium text-lg text-gray-500">
          ヤンゴンのランドマークとなったサクラタワーにはICA、三菱商事、日経、NHK等、
          グローバルに活躍する企業や団体が入居しており、ヨーロッパ、アジアなどの海外からの駐在員や観光客が多く訪れています。
        </p>
        <h1 className="font-bold md:text-2xl text-gray-600 ml-8 mt-5 mb-2">
          サクラレジデンス研修プログラム（例）
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex basis-1/3">
            <div className="grid md:ml-0 p-4">
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 bg-darkblue border-gray-600">
                <div className="text-center font-bold text-gray-400 m-3">
                  日目
                </div>
                <div className="p-2 col-span-5 font-bold text-gray-400 text-lg text-center">
                  内容
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">1</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  {" "}
                  ヤンゴン到着<br></br>サクラレジデンスの説明<br></br>
                  ハウスキーピング研修（パブリックエリア）
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">2</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  ハウスキーピング研修（パブリックエリア、ペストコ ントロール）
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">3</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  休暇
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">4</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  ハウスキーピング研修（ルームクリーニング）
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2  md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">5</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  ハウスキーピング研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">6</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  ハウスキーピング研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">7</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  休暇
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">8</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  レセプション研修（ベルスタッフ）
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">9</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  レセプション研修（ジム）
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">10</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  休暇
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">11</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  レセプション研修（フロント）
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">12</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  レセプション研修
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">13</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  休暇
                </div>
              </div>
              <div className="divide-gray-600 grid grid-cols-7 divide-x-2 md:ml-5 border-2 border-gray-600">
                <div className="text-center font-medium m-3">14</div>
                <div className="p-2 col-span-5 font-medium text-gray-600 text-lg">
                  レセプション研修
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-5 p-4">
              <div className="items-center divide-gray-600 grid grid-cols-3 divide-x-2 md:mr-5 border-t-2 border-r-2 border-l-2 border-gray-600">
                <div className="text-center font-medium m-3">
                  ハウスキーピング研修
                </div>
                <div className="p-2 font-medium text-gray-600 text-lg col-span-2">
                  マグカップ等食器洗いや店内清掃、飲食店に欠かせない基本を学びます。専用マシーンを使ったコーヒーを淹れるバリスタ業務、フレッシュジュース等の作り方を学び、実践します。
                </div>
              </div>
              <div className="items-center divide-gray-600 grid grid-cols-3 divide-x-2 md:mr-5 border-2 border-gray-600">
                <div className="text-center font-medium m-3">
                  レセプション研修
                </div>
                <div className="p-2 font-medium text-gray-600 text-lg col-span-2">
                  備品や清掃確認、テーブル、バーのセッティングを行います。英語での接客、カクテルやデザートの作り方を学び、実践します。
                </div>
              </div>
            </div>
            <div className="md:pl-4 md:p-8 px-4">
              <ImageGallery items={images2} />
            </div>
          </div>
        </div>
        <p className="mt-10 mb-10 m-6 font-medium text-lg text-gray-500">
          サクラレジデンスには日本人3割、その他ヨーロッパ・アジアの駐在員7割と海外からの駐在員が多く住んでいます。英語での接客が日常的に発生します。
        </p>
        <div className="mx-4">
          <div className="border-2 border-gray-300 rounded-xl mt-5">
            <h2 className="text-center text-gray-600 md:text-xl font-bold m-4">
              <a className="md:text-3xl">\ </a> 留学費用はどれくらい必要なの?{" "}
              <a className="md:text-3xl">/ </a>
            </h2>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="ml-10 mb-8 w-20 h-20 fill-current text-gray-700"
              >
                <path d="M16 17c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z" />
                <path d="M16.4 13.2h-.8a2.613 2.613 0 0 1-2.493-1.864 1 1 0 1 1 1.918-.565c.075.253.312.43.575.43h.8a.6.6 0 0 0 0-1.201h-.8C14.166 10 13 8.833 13 7.4s1.166-2.6 2.6-2.6h.8c1.121 0 2.111.714 2.466 1.778a1 1 0 1 1-1.897.633.598.598 0 0 0-.569-.411h-.8a.6.6 0 0 0 0 1.2h.8c1.434 0 2.6 1.167 2.6 2.6s-1.166 2.6-2.6 2.6z" />
                <path d="M16 6c-.271 0-.521-.11-.71-.29-.04-.05-.09-.1-.12-.16a.556.556 0 0 1-.09-.17.672.672 0 0 1-.061-.18C15.01 5.13 15 5.07 15 5c0-.26.109-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.021.2a.606.606 0 0 1-.06.18.578.578 0 0 1-.09.17c-.04.06-.08.11-.12.16-.189.18-.449.29-.709.29zm0 8c-.271 0-.521-.11-.71-.29-.04-.05-.09-.1-.12-.16a.556.556 0 0 1-.09-.17.672.672 0 0 1-.061-.18c-.009-.07-.019-.13-.019-.2 0-.26.109-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.021.2a.606.606 0 0 1-.06.18.578.578 0 0 1-.09.17c-.04.06-.08.11-.12.16-.189.18-.449.29-.709.29zm2 17H2a1 1 0 0 1-1-1v-9c0-.265.105-.52.293-.707C1.527 20.058 3.653 18 6 18c1.944 0 4.452 1.469 5.295 2H16a3.004 3.004 0 0 1 2.955 3.519l7.891-3.288a2.995 2.995 0 0 1 2.818.273A2.993 2.993 0 0 1 31 23a1 1 0 0 1-.496.864l-12 7A1.003 1.003 0 0 1 18 31zM3 29h14.729l11.14-6.498a1.01 1.01 0 0 0-.314-.334.984.984 0 0 0-.939-.091l-9.23 3.846A1.007 1.007 0 0 1 18 26h-8a1 1 0 1 1 0-2h6a1.001 1.001 0 0 0 0-2h-5c-.197 0-.391-.059-.555-.167C9.68 21.323 7.387 20 6 20c-1.09 0-2.347.88-3 1.439V29z" />
              </svg>
              <p className="flex-1 text-gray-700 font-bold text-sm md:text-lg m-8">
                宿泊費用は無料、負担は渡航費（保険含む）と食費・生活費のみ
              </p>
            </div>
            <div className="md:flex md:flex-row-reverse grid grid-cols-1 md:grid-cols-2">
              <p className="md:pr-10 p-2 text-justify font-medium text-lg text-gray-500 ">
                エクセが運営するサクラレジデンスに宿泊いただきます。日本人スタッフも常駐しているので安心です。ジム、プールなどのファシリティーも充実しており、ミニマートでは日本の食品なども購入可能で、レストランは日本食も対応しており休日もゆっくりとお過ごし頂けるアパートです。
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
              <p className="flex-1 text-gray-700 font-bold text-sm md:text-xl m-2 mt-14">
                平均飛行時間10時間38分、最安値63,720円　
              </p>
            </div>
            <div>
              <p className="text-center text-gray-700 font-bold text-sm md:text-lg px-4">
                NRT（成田空港）⇒BKK（タイ・バンコク経由）⇒RGN（ヤンゴン国際空港）
              </p>
              <p className="text-center m-4 font-medium text-lg text-gray-500">
                時期により日本↔ヤンゴンの直行便もあります。ヤンゴン国際空港まで現地スタッフが送迎いたしますのでご安心ください。
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-10 mb-8 w-20 h-20 fill-current text-gray-700"
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
              <p className="text-gray-700 font-bold text-sm md:text-lg p-5">
                通貨はドルとチャット（MMK)、1ヶ月の食費は約30,000円　※時期により変動します。
              </p>
            </div>
            <div>
              <p className="text-center font-medium md:text-lg text-gray-500 mx-4 -mt-8">
                1886年にイギリスの植民地になったことから通貨はドルとチャットが利用できます。
              </p>
            </div>
          </div>
        </div>
        <div className="md:px-6">
          <div>
            <h2 className="font-bold md:text-2xl text-gray-700 text-center my-6">
              ミャンマーで活躍する社員紹介
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                関原夕希子（Yukiko Sekihara）<br></br>Sales Director
              </h3>
              <p className="text-gray-500 text-justify mx-4 my-2">
                大学卒業後、ファーストリテイリング株式会社にて1年間店長補佐を経験した後、株式会社エクセへ転職。2012年よりミャンマーに駐在し、
                現在はサクラタワーとヤンゴンヤンゴンルーフトップバーの営業・販促を担当。弊社は若手に責任あるプロジェクトを任せる文化があり、
                海外で活躍するチャンスがあります。特にミャンマーではマネジメントの部分を任されており、
                バックグラウンドの異なるミャンマー人の仲間と協力するのは大変ですが、とてもやりがいがあり、日々勉強になっています。
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                Cherry Aung　<br></br>General Manager
              </h3>
              <p className="text-gray-500 text-justify mx-4 my-2">
                ミャンマー人でありながら、セールスエグゼクティブからゼネラルマネージャーになるまでキャリア開発を得る絶好の機会がありました。ロイヤルティ、組織のためにベストを尽くす姿勢、日々の業務改善が将来のキャリアアップの鍵になると断言します。
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                Zar Ni Lwin　<br></br>Residence Manager
              </h3>

              <p className="text-gray-500 text-justify mx-4 my-2">
                2008年に株式会社エクセ（サクラレジデンス）へ営業担当として入社。2012年にレジデンスマネージャーに昇格し、
                サービスアパートメントであるサクラレジデンスの業務を統括しています。株式会社エクセは、多くの動機付け方略を試すことができ、
                同僚とオープンな議論を交わすこともでき、社員がハッピーでいられる職場であります。
                ここではプロフェショナル面もプライベート面も両面同様に充実させることが可能だと感じています。
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                堀越美緒（Mio Horikoshi）　<br></br>Sales Director
              </h3>
              <p className="text-gray-500 text-justify mx-4 my-2">
                大学卒業後すぐに海外に行きたいという思いが強く、株式会社エクセに入社してミャンマーに駐在9年目。
                ホテルやレストラン、サービスアパートメントの運営に加え、セレクトショップやルーフトップバー、朝市などの立ち上げも経験。
                ヤンゴンは日本人だけでなく多くの外国人が集まる場所なので、様々な文化や言語の中で様々な体験ができ、刺激的な日々を過ごすことができます。
                好奇心旺盛で刺激を求めている方にぴったりの職場です。一緒に外国で明るく楽しく働きましょう！
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                Phyoe Wai Moe　<br></br>YangonYangon Bar Manager
              </h3>
              <p className="text-gray-500 text-justify mx-4 my-2">
                ヤンゴンの最も高いルーフトップバーであるヤンゴンヤンゴンで、素晴らしい経営陣・協力的な同僚と一緒に日々楽しく仕事をしています。家族のようなチームメンバーに囲まれ、毎日疲れを感じることなく働ける職場です。
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                白井竜太（Ryuta Shirai）　<br></br>Deputy Manager
              </h3>
              <p className="text-gray-500 text-justify mx-4 my-2">
                2014年にインターンシップに参加し、バガンとヤンゴンで1年間勤務した後、新卒で株式会社エクセに入社。
                レストラン部門を中心に運営部門を担当。ミャンマーは日本とはかなり違いますが、仕事の本質は変わりません。
                しかし、文化や言語、習慣が異なるため、より密なコミュニケーションが求められ、それが人間の成長につながると思います。
                近年の社会情勢の中に私の年齢から参加できることは非常に重要で貴重な経験になっています。
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                下山徹（Toru Shimoyama）　<br></br>Sales Manager
              </h3>
              <p className="text-gray-500 text-justify mx-4 my-2">
                現地の日系メディアで4年間勤務した後、2020年に株式会社エクセに入社。
                現在はサクラタワー、サクラレジデンス、ヤンゴンヤンゴンルーフトップバーの営業管理、運営、販促に携わっており、
                商工会の事務局なども兼任しています。現在のミャンマーは正に「激動」です。しかし、こちらにいるからこそ得られる成長機会、
                刺激、チャンスがあります。世界から注目を集めるミャンマーで自分を試してみませんか。思い立ったが吉日、即行動してください。
                度胸と愛嬌と熱意のある方、大歓迎です。
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                Myo Zaw Oo　<br></br>Residence Assistant Manager
              </h3>
              <p className="text-gray-500 text-justify mx-4 my-2">
                2011年から株式会社エクセ（サクラレジデンス）に所属。ホスピタリティ業界での経験は16年以上になります。
                フロントオフィスとセールス部門を経て、現在のアシスタント・レジデンスマネージャーのポジションに至ります。
                エクセで働くにあたってリーダーシップスキルを向上させることができ、
                日本やミャンマーのみならず多国籍のお客様や文化や従業員と深く接する機会が増えました。
                ミャンマーでのキャリアを向上させたい熱心な若者には最高の環境であると思います。
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
              <h3 className="font-bold text-gray-600 text-center md:text-left mx-4 mt-4">
                寺田 敏秀（Toshihide Terada）　<br></br>Myanmar Director
              </h3>
              <p className="text-gray-500 text-justify mx-4 my-2">
                大学卒業後、日系銀行で海外融資審査に携わり、その後、株式会社エクセに入社。
                2011年からミャンマーの責任者として駐在。以前は欧米関係の仕事が多く、アジアの国は初めてでしたが、
                大変活気があって国・都市の発展への意気込みに溢れています。また、企業の駐在員だけでなく、若い事業家など世界中の人々で賑わい、
                競い合い、頼もしい限りです。大事なのは言葉や知識ではなくて、やる気と熱意、そして人の輪に飛び込んでいく度胸です。
                是非チャレンジしてみてください。
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-gray-700 text-center my-4">
            <a className="text-3xl">\ </a>よくある質問{" "}
            <a className="text-3xl">/ </a>
          </h2>
          <div className="md:px-12 px-4">
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
    </MainLayout>
  );
}

// fdhfhsoihgpiepgfhipsfhgpies
