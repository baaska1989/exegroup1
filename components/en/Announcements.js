import React from "react";
import LazyLoad from 'react-lazy-load';

const Announcements = () => {
  return (
    <div className="bg-slate-100 p-12">
      <h2 className="flex justify-center m-0 pt-4 font-serif text-3xl text-gray-800 text-center font-semibold">
        Announcements
      </h2>
      <div className="flex justify-center">
        <hr className="border-b border-1 border-rose-300 w-16 mt-4" />
      </div>

      
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        
        <div className="w-full m-0 p-4 md:w-96">
          <img src="/assets/img/md_1661105093.jpg " loading="lazy"/>
        </div>

        <div className="ml-6 md:pt-16">
          <div className="md:mt-6">
            <p className="font-sans text-xs text-gray-600 font-normal">
              August 21, 2022
            </p>
            <h2 className="font-serif text-lg underline text-gray-900 font-semibold mt-2">
              This is an announcement!
            </h2>
            <p className="font-light font-sans text-gray-800 max-w-2xl mb-4 md:mr-8 md:pr-8 md:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
