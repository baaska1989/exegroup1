import React from "react";
import {useRouter} from "next/router";
import jp from "../locales/jp";
import en from "../locales/en";

const Slider = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'jp' ? jp : en;
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[35rem] mb-4"
      style={{
        backgroundPosition: "50%",
        backgroundImage: 'url("/assets/img/starter.jpg")',
      }}
    >
      <div
        className="absolute top-6 sm:top-20 right-0 bottom-0 left-6 sm:left-20 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      >
        <div className="md:mb-0 md:pb-4 md:max-w-3xl text-[#0E1447] font-bold">
          <h3 className="text-2xl md:text-4xl xl:text-5xl ">{t.slider1}</h3>
          <h3 className="text-2xl md:text-4xl xl:text-5xl  ml-4">{t.slider2}</h3>
        </div>
      </div>
    </div>
  );
};

export default Slider;
