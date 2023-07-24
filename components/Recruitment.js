import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Recruitment = () => {
  return (
    <div
      className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover bg-fixed"
      loading="lazy"
      style={{ backgroundImage: 'url("/assets/img/img4.jpg")', height: 400 }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex justify-center items-center h-full ">
          <div className="text-gray-700 p-10 opacity-80 max-w-2xl bg-gray-50">
            <h4 className="font-normal text-md mb-2 text-black"></h4>
            <div>
              <h2 className="font-semibold text-2xl md:text-3xl text-gray-800 pb-8 ">
                インターンシップ・採用情報
              </h2>
            </div>
            <p className="font-light text-black text-xl">
              エクセはミャンマー、モンゴルでプロジェクトを運営しており、インターンシップ、新卒・中途採用も随時行っております。
            </p>
            <Link href="/recruit">
              <a
                className="inline-block px-7 py-4 my-4 bg-[#0e1448] text-white font-light text-sm leading-snug uppercase rounded hover:bg-[#0e1447] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                詳細はこちら
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
