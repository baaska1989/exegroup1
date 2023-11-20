import React from "react";
import Link from "next/link";
import en from '../locales/en';
import jp from '../locales/jp';
import { useRouter } from "next/router";
import LazyLoad from "react-lazy-load";

const Domesticprojects = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'jp' ? jp : en;
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2">
                    <div className="md:p-8">
                        <img
                            src="/assets/img/i.jpg"
                            loading="lazy"
                            className="w-75% h-auto align-middle mx-auto bg-center bg-cover"
                        />
                    </div>

                    <div className="p-4 md:py-8 md:pr-10">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center md:text-left">
                            {t.domestic.title1}
                        </h2>
                        <p className="my-4 text-lg font-medium text-gray-500 text-justify">
                            {t.domestic.text1}
                        </p>
                        <div className="flex justify-center lg:justify-end">
                            <Link href="/myanmar">
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

export default Domesticprojects;