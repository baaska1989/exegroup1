import MainLayout from "../layout/MainLayout";
import Head from "next/head";
import { useRouter } from 'next/router';
import jp from "../locales/jp";
import en from "../locales/en";

const contact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'jp' ? jp : en;
  return (
    <div>
      <Head>
        <title>{t.contact}</title>
      </Head>
      <MainLayout>
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
          style={{
            backgroundPosition: "50%",
            backgroundImage: 'url("/assets/img/mv.jpg")',
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <div className="flex h-full items-center justify-center text-center text-white">
              <h1 className="mb-6 text-2xl md:text-3xl font-bold">
                お問い合わせ
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div className="container my-12 px-6 mx-auto">
            {/* Section: Design Block */}
            <section className="mb-32 text-center text-gray-800">
              <div className="max-w-[800px] mx-auto px-3">
                <div className="flex mt-4 justify-center">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    clipRule="evenodd"
                    className=""
                  >
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
                  </svg>
                  <li className="font-bold">(81) 3-3288-2371</li>
                </div>
                <div className="flex mt-4 justify-center">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    clipRule="evenodd"
                    className="mr-2"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                  <li>
                    {" "}
                    <a
                      href="mailto:info@exegroup.co.jp"
                      className="font-bold hover:text-blue-500"
                    >
                      {" "}
                      info@exegroup.co.jp{" "}
                    </a>
                  </li>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold m-8">
                  お問い合わせ
                </h2>
                <form>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  "
                      id="exampleFormControlTextarea13"
                      rows={3}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>

                  <button
                    type="submit"
                    className="
  w-full
  px-6
  py-2.5
  bg-darkblue
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out"
                  >
                    Send
                  </button>
                </form>
              </div>
            </section>
            {/* Section: Design Block */}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default contact;
