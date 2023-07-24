import React from 'react';
import MainLayoutEn from '../../layout/MainLayoutEn';
import Link from 'next/link';
import LazyLoad from 'react-lazy-load';


const Sharedhouse = () => {
  return (
    <MainLayoutEn>
      <div className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{backgroundImage: 'url("/assets/img/mv-sm.jpg")', backgroundColor: "rgba(0, 0, 0, 0)", height: 450,}}>
        <div className="flex justify-center items-center h-full">
          <div> <h2 className="font-bold text-3xl font-sans text-white uppercase"> Shared House </h2> 
                <Link href="http://www.mmtl.jp/"><a className="hover:font-bold text-white mx-auto" target="_blank">http://www.mmtl.jp/</a></Link>
          </div> 
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div> <img src="/assets/img/1663422100.jpg" loading="lazy" className="transition duration-300 ease-linear align-middle w-full" /> </div>
            <div className="w-full md:mx-16 px-8">
              <h2 className="font-serif text-3xl text-gray-800 font-bold mt-8"> Shared House </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify">
              EXE operates shared-houses concentrating on students overseas. Shared-house is consort rental house styled that several residents use one house or condo.
Residents use individual cabin while living, toilet, kitchen, shower room and HE (partially) are shared. Our shared-houses have become popular among foreigners as a new style of living in Tokyo where living cost is high. EXE is operating its shared-houses in order to provide enjoyable stays in Japan for those came to Japanese universities or language schools.
Not only foreigners but also Japanese residents who wish for international contacts are welcomed. Our shared-houses are located in Yotsuya and Waseda which are famous as a Student Town. Each of them is located close to stations and is convenient for residents to start their livings quickly.
</p>
           

              <div className="flex space-x-2 justify-start my-4">    
                {/* <div>
                 
                  <Link href="/en/sharedhouse">
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
                        <div className="modal-body relative p-4 font-sans font-light"> 
                            text here                     
                         </div>
                        
                      </div>
                    </div>
                  </div>
                </div> */}

            
             {/* <div>
                  
                  <Link href="/en/sharedhouse">
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
                      </div>
                    </div>
                  </div>
                </div> */}

                 
          </div>          
        </div>
        {/* sakura tower address */}
            {/* <div className="font-sans font-light m-4" >          
                <p><strong> Address: </strong> here shared house address <br/>
                <strong> Tel: </strong> (xxx) xxx xxx <br/>
                <strong> Fax: </strong> (xxx) xxx xxx <br/>
                <strong> E-mail:</strong><a href="mailto:#" className="hover:text-blue-500">E-mail</a>  </p><br/>
                
                 <div>
                <p className="font-bold uppercase text-sm"> 
                <Link href="http://www.mmtl.jp/"><a className="hover:text-sky-400" target="_blank">WEB SITE</a></Link>&emsp;&emsp;
                <Link href="#"><a className="hover:text-sky-400" target="_blank">FACEBOOK</a></Link>
                </p>                 
                </div> 
            </div>    */}

            <div>
                

            </div>

            {/* sakura tower address end*/}
      </div>
      </div>
      </div>
     
     
    </MainLayoutEn>
  )
}

export default Sharedhouse