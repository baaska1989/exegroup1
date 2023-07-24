import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
      

      <div>
        <div
          className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover fixed"
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
      
      
      
      
      
      
      
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover fixed"
        style={{
          backgroundImage: 'url("/assets/img/1657618380.jpg")',
          height: 400,
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white">
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

      
    </div>
  );
};

export default Projects;
