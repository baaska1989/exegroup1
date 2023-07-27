import React from "react";
import Link from "next/link";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";

const Sharedhouse = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  return (
      <div className="py-8 max-w-[1200px] mx-auto">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2">
            <div className="p-4 md:px-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center md:text-left">
                {t.sharedhouse.title}
              </h2>
              <p className="my-4 text-lg font-medium text-gray-500 text-justify">
                {t.sharedhouse.text}
              </p>
              <div className="flex justify-center md:justify-start align-text-bottom">
                <Link href="/mongolia">
                  <button
                      className="px-14 py-3 bg-darkblue text-white font-medium text-base leading-snug uppercase"
                      role="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                  >
                    {t.aboutExe.button}
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:px-4 row-start-1 md:row-span-1">
              <img
                  src="/assets/img/exe website mongolia.jpg"
                  loading="lazy"
                  className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Sharedhouse;