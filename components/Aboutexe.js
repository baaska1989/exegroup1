import React from "react";
import Link from "next/link";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";

const Aboutexe = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'jp' ? jp : en;
    return (
        <div className="pb-4 max-w-[1200px] mx-auto">
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2">
                    <div className="py-2 md:p-8">
                        <img
                            src="/assets/img/2.JPG"
                            loading="lazy"
                            className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
                        />
                    </div>

                    <div className="p-4 md:pr-8 md:pt-8">
                        <h2 className="text-2xl font-bold text-gray-700 text-center md:text-left md:text-3xl">
                            {t.aboutExe.title1}
                        </h2>
                        <p className="my-4 text-lg font-medium text-gray-500 text-justify">
                            {t.aboutExe.text1}
                        </p>
                        <div className="flex justify-center lg:justify-end">
                            <Link href="/about">
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
                </div>
            </div>
        </div>
    );
};
// Message
export default Aboutexe;