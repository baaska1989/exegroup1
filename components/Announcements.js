import React from "react";
import LazyLoad from "react-lazy-load";

const Announcements = () => {
  return (
    <div className="bg-slate-100 p-12">
      <h2 className="flex justify-center m-0 pt-4 font-serif text-2xl text-gray-700 text-center font-semibold">
        お知らせ
      </h2>

      <div className="flex justify-center">
        <hr className="border-b border-1 border-rose-300 w-16 mt-4" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="w-full m-0 p-2 md:w-96">
          <img src="/assets/img/md_1661105093.jpg " loading="lazy" />
        </div>

        <div className="ml-4 pt-4">
          <div className="md:mt-4">
            <p className="font-sans text-xs text-gray-500 font-normal">
              August 21, 2022
            </p>
            <h2 className="font-serif text-2xl underline text-gray-700 font-semibold mt-2">
              お知らせです！
            </h2>
            <p className="font-light font-sans text-gray-800 max-w-2xl">
              ミャンマーを中心に医療、診断保健活動を行っている特定非営利活動法人ジャパンハートを継続的に支援しております。ジャパンハートの活動の詳細についてはWEBサイト...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
