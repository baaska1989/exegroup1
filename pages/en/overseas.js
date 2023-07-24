import React from "react";
import Projects from "../../components/en/Projects";
import MainLayoutEn from '../../layout/MainLayoutEn';
import Link from "next/link";
import LazyLoad from 'react-lazy-load';

const overseas = () => {
  return (
    <MainLayoutEn>
        <div className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundImage: 'url("/assets/img/overseas.jpg")' , backgroundColor: 'rgba(0, 0, 0, 0)',  height: 450}}>                  
                      <div className="flex justify-center items-center h-full">
                        <div>
                            <h2 className="font-bold text-4xl font-sans text-white uppercase">Overseas Projects</h2>                            
                        </div>
                      </div>      
        </div>


      <div className="p-8 mb-8 ">
        <div className="flex justify-center">
          <p className="text-center font-light mt-8 font-sans text-gray-800 max-w-3xl ">
            Overseas Projects in mainly developing countries indeed have shaped
            EXE’s belief of “Change is Chance”. Seeking the changes of the times
            as business chances, we have conducted investments to what is
            required based on our view to future age. EXE has operated a number
            of projects in Myanmar, Mongolia and has assisted those countries’
            development.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl gap-8 pb-16">
        <div
          className="text-center relative overflow-hidden bg-no-repeat bg-cover fixed"
          style={{
            backgroundImage: 'url("/assets/img/1657618380.jpg")',
            height: 400,
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-white ">
                <h2 className="font-semibold text-3xl font-serif text-white pb-8">
                  Myanmar Projects
                </h2>
                <Link href="/en/myanmar">
              <a
                className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                LEARN MORE
              </a>
            </Link>  
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="text-center relative overflow-hidden bg-no-repeat bg-cover fixed"
            style={{
              backgroundImage: 'url("/assets/img/md_1661105093.jpg")',
              height: 400,
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div>
                  <h2 className="font-semibold text-3xl font-serif text-white pb-8">
                    Mongolia Projects
                  </h2>
                  <Link href="/en/mongolia">
              <a
                className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                LEARN MORE
              </a>
            </Link>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayoutEn>
  );
};

export default overseas;
