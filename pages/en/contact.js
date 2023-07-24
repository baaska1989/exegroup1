import MainLayoutEn from '../../layout/MainLayoutEn';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from 'react-lazy-load';

const contact = () => {
  return (
    <div>
      <MainLayoutEn>
        <div
          className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("/assets/img/mv-sm.jpg")',
            backgroundColor: "rgba(0, 0, 0, 0)",
            height: 450,
          }}
        >
          <div className="flex justify-center items-center h-full">
            <div>
              <h2 className="font-bold text-4xl font-sans text-white uppercase">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        
        <div>
          <div className="container my-24 px-6 mx-auto">
          
            {/* Section: Design Block */}
            <section className="mb-32 text-center text-gray-800">
              <div className="max-w-[700px] mx-auto px-3 lg:px-6">
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i> <h1 className="text-3xl font-bold">(81) 3 3288 2371</h1>
              <p>
              
               <a href="mailto:mail@exegroup.co.jp" className="hover:text-blue-500">mail@exegroup.co.jp</a>
              </p>

              <p className="text-2xl font-bold font-serif text-left my-4 pt-4">Drop us an Enquiry.</p>
                <h2 className="text-3xl font-bold mb-12">Contact us</h2>
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
                  <div className="form-group form-check text-center mb-6">
                    {/* <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                      id="exampleCheck87"
                      defaultChecked
                    /> */}
                    {/* <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck87"
                    >
                      Send me a copy of this message
                    </label> */}
                  </div>
                  <button
                    type="submit"
                    className="
  w-full
  px-6
  py-2.5
  bg-blue-600
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
      </MainLayoutEn>
    </div>
  );
};

export default contact;
