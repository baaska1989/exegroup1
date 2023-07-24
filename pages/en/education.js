import React from 'react';
import MainLayoutEn from '../../layout/MainLayoutEn';
import Link from 'next/link';
import LazyLoad from 'react-lazy-load';

const education = () => {
  return (
    <MainLayoutEn>
      <div className="top-0 right-0 bottom-0 left-0 w-full h-full text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{backgroundImage: 'url("/assets/img/mv-sm.jpg")', backgroundColor: "rgba(0, 0, 0, 0)", height: 450,}}>
        <div className="flex justify-center items-center h-full">
          <div> <h2 className="font-bold text-4xl font-sans text-white uppercase"> Education </h2> </div> 
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div> <img src="/assets/img/1659508110.jpg" loading="lazy" className="transition duration-300 ease-linear align-middle w-full" /> </div>
            <div className="w-full px-8">
              <h2 className="font-serif text-3xl text-gray-800 font-bold mt-8"> Educational sector </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify ">
                  Since 2010, we have financed educational organizations in Mongolia and implemented school building construction projects for a total of 3,500 students. Therefore, as the next step in the educational sector, in 2018, we established and started operating Olonlog EXE IT school, which is the first secondary school in Mongolia where it has IT curriculum from the elementary school. In addition to IT, students are able to study subjects such as mathematics and English to an advanced level. At present, Olonlog EXE school has nearly 500 excellent students from the first grade to high school level who are studying diligently to become Mongolia&apos;s representatives in the global digital age. <br /> <br />
                  Since its establishment, the students motivation to learn has increased in a short period of time, and the results are shown in their grades. After the graduation, there are students who have received full scholarships from universities in countries such as Canada, Japan, and Turkey to study abroad. In addition, all students who study universities in Mongolia, go to the top universities such as the Mongolian National University and the National Institute of Technology of Mongolia. Olonlog EXE school is ranked among the top 15 schools in the 2020 and 2022 Nation wide University Entrance Examinations ranking. In 2019, it also received the Best Educational Organization Award from Forbes Mongolia magazine.<br/> <br />
                  During their study at Olonlog EXE school, many students who have won medals at national competitions in IT, Mathematics and English. In particular, our students won national IT Olympiad&apos;s gold and bronze medals, Ulaanbaatar City IT Olympiad&apos;s gold medals too. In addition, the team of high school students from Olonlog EXE School won the 2020 National Cyber security contest, in which more than 100 teams participated and held among university students and professionals nationwide.<br/> <br />
                  Our students, together with support of the teaching staffs, are striving to become the top level professionals not only in Mongolia but also globally.
                  </p>
              {/* <div className="flex space-x-2 justify-start my-4">    
                <div>
                 
                  <Link href="/en/education">
                    <a> <button type="button" className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-800 font-light text-md leading-tight hover:text-blue-500 hover:border-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
active:bg-white active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Facilities
                      </button>
                    </a>
                  </Link>

                 
                  <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel"> Facilities </h5>
                          <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close" /> </div>
                        <div className="modal-body relative p-4"> Facilities Modal body text goes here. </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                          <button type="button" className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg
    focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            
             <div>
               
                  <Link href="/en/education">
                    <a> <button type="button" className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-800 font-light text-md leading-tight hover:text-blue-500 hover:border-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
active:bg-white active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Furnishings
                      </button>
                    </a>
                  </Link>

                  
                  <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel"> Furnishings </h5>
                          <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close" /> </div>
                        <div className="modal-body relative p-4"> Furnishings Modal body text goes here. </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                          <button type="button" className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg
    focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            
          </div> */}
             
        </div>
      </div>
      </div>
      </div>
     
     
    </MainLayoutEn>
  )
}

export default education