import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Projects = () => {
  return (
    <div className=" bg-[#f6fafd]">
      <div className="md:p-4">
        <h2 className="font-bold flex text-2xl md:text-3xl mb-5 mt-5 lg:p-6 text-gray-700 justify-center">
          お知らせ
        </h2>
        <div className="flex justify-center pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="col-span-1">
              <img
                src="/assets/img/1659582198.jpg"
                loading="lazy"
                className="lg:h-52 transition duration-300 ease-linear align-middle sm:h-full"
              />
            </div>

            <div className="max-w-lg m-4 col-span-1">
              <h1 className="text-primary text-sm mb-2">August 21, 2022</h1>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-700 font-bold">
                お知らせです！
              </h2>
              <p className="font-light mt-6 font-sans text-gray-600 max-w-2xl">
                ミャンマーを中心に医療、診断保険活動を行っている特定非営利活動法人ジャパンハートを継続的に支援しております。ジャパンハートの活動の詳細についてはWEBサイト．．．
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src="/assets/img/1659582198.jpg"
              loading="lazy"
              className="lg:h-52 transition duration-300 ease-linear align-middle sm:h-full"
            />
          </div>

          <div className="m-4 max-w-lg">
            <h1 className="text-primary text-sm mb-2">August 21, 2022</h1>
            <h2 className="font-serif text-2xl md:text-3xl text-gray-700 font-bold ">
              お知らせです！
            </h2>
            <p className="font-light mt-2 font-sans text-gray-600 max-w-xl ">
              ミャンマーを中心に医療、診断保険活動を行っている特定非営利活動法人ジャパンハートを継続的に支援しております。ジャパンハートの活動の詳細についてはWEBサイト．．．
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
