import React from 'react';
import MainLayoutEn from '../../layout/MainLayoutEn';
import Link from 'next/link';
import LazyLoad from 'react-lazy-load';


const sakuratower = () => {
  return (
    <MainLayoutEn>
      <div className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{backgroundImage: 'url("/assets/img/mv-sm.jpg")', backgroundColor: "rgba(0, 0, 0, 0)", height: 450,}}>
        <div className="flex justify-center items-center h-full">
          <div> <h2 className="font-bold text-4xl font-sans text-white uppercase"> Sakura Tower Yangon </h2> 
                <Link href="http://www.sakura-tower-yangon.com/"><a className="hover:font-bold text-white mx-auto" target="_blank">http://www.sakura-tower-yangon.com</a></Link>
          </div> 
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div> <img src="/assets/img/1657618380.jpg" loading="lazy" className="transition duration-300 ease-linear align-middle w-full" /> </div>
            <div className="w-full px-8">
              <h2 className="font-serif text-3xl text-gray-800 font-bold "> Sakura Tower Yangon </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                Sakura Tower was completed in 1999 by Japanese architects Nihon Sekkei and Konoike Construction cp Ltd. It stands in the very heart of Yangon&apos;s central business and Government district, and is a 20 story office building with total lentable are of 12,425 sqm and 9 feet floor heights. The first 3floors are rental areas of 1,183 sqm with ticket offices of leading airline companies as well as travel agencies, dentists, showrooms and so on. From the 5th floor up are offices of multinational companies and organizations such as JICA (Japan International Corporation Agency), Mitsubishi Corporation, Nikkei, and NHK.
              </p>
           

              <div className="flex space-x-2 justify-start my-4">    
                <div>
                  {/* Button trigger modal */}
                  <Link href="/en/sakuratower">
                    <a> <button type="button" className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-800 font-light text-md leading-tight hover:text-blue-500 hover:border-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
active:bg-white active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Facilities
                      </button>
                    </a>
                  </Link>

                  {/* Modal */}
                  <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div className="modal-dialog relative w-auto pointer-events-none">
                      <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel"> Facilities </h5>
                          <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close" /> </div>
                        <div className="modal-body relative p-4 font-sans font-light"> 
                            <ul>                            
                                <li>- 24-hour full backup generators</li>
                                <li>- 24-hour security service with CCTV</li>
                                <li>- Floor trunking grids for OA system</li>
                                <li>- International standard earthquake resistance</li>
                                <li>- Sprinkler system for fire fighting</li>
                                <li>- ADSL Internet access</li>
                                <li>- 4 high speed passenger elevators produced by Hitachi and Mitsubishi Denki</li>
                                <li>- 1 service elevator</li>
                                <li>- Mechanical parking system</li>
                                <li>- IDD telephone lines</li>
                                <li>- Satellite TV</li>
                                <li>- 400 phone lines</li>
                            </ul>                       
                         </div>
                        
                      </div>
                    </div>
                  </div>
                </div>

             {/* fdfdf */}
             {/* <div>
                
                  <Link href="/en/sakuratower">
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
       
            <div className="font-sans font-light m-4" >          
                <p><strong> Address: </strong> 339 Bogyoke Aung San Road, Kyauktada Township, Yangon, Myanmar <br/>
                <strong> Tel: </strong> (95 1) 255 255 <br/>
                <strong> Fax: </strong> (95 1) 255 258 <br/>
                <strong> E-mail:</strong><a href="mailto:stowersales@myanmar.com.mm" className="hover:text-blue-500">stowersales@myanmar.com.mm</a>  </p><br/>
                
                {/* <div>
                <p className="font-bold uppercase text-sm"> 
                <Link href="http://www.sakura-tower-yangon.com/"><a className="hover:text-sky-400" target="_blank">WEB SITE</a></Link>&emsp;&emsp;
                <Link href="https://www.facebook.com/profile.php?id=100057447250078"><a className="hover:text-sky-400" target="_blank">FACEBOOK</a></Link>
                </p>                 
                </div> */}
            </div>   

            <div>
                

            </div>

            {/* sakura tower address end*/}
      </div>
      </div>
      </div>
     
     
    </MainLayoutEn>
  )
}

export default sakuratower