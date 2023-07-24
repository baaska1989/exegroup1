import React from 'react'
import MainLayoutEn from '../../layout/MainLayoutEn';
import Link from 'next/link';
import LazyLoad from 'react-lazy-load';

const sakuraresidence = () => {
  return (
    <MainLayoutEn>
      <div className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{backgroundImage: 'url("/assets/img/mv-sm.jpg")', backgroundColor: "rgba(0, 0, 0, 0)", height: 450,}}>
        <div className="flex justify-center items-center h-full">
          <div> <h2 className="font-bold text-3xl font-sans text-white uppercase"> Sakura Residence </h2> 
                <Link href="http://www.sakura-residence-yangon.com/"><a className="hover:font-bold text-white mx-auto" target="_blank">http://www.sakura-residence-yangon.com/</a></Link>
          </div> 
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl py-16">
        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div> <img src="/assets/img/md_1657618555.jpg" loading="lazy" className="transition duration-300 ease-linear align-middle w-full" /> </div>
            <div className="w-full md:mx-16">
              <h2 className="font-serif text-3xl text-gray-800 font-bold "> Sakura Residence </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
              The luxurious Sakura Residence is undoubtedly Yangon’s original expatriate community. Located among the private residences and sweeping palms of Inya Road, it is conveniently located equidistant and just minutes from the international airport and Yangon’s central business district. Nestled on the crest of a hill, the Residence overlooks spectacular views of the shimmering golden Shwedagon Pagoda. Sakura Residence offers 261 superb fully furnished and equipped apartments ranging from comfortable studios to spacious three-bedroom apartments that you can call home from very moment you move in.
              </p>
           

              <div className="flex space-x-2 justify-start my-4">    
                <div>
                  {/* Button trigger modal */}
                  <Link href="/en/sakuraresidence">
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
                            













                           
                                <li>- 24-hour concierge</li>
                                <li>- 24-hour security and maintenance</li>
                                <li>- Daily maid service</li>
                                <li>- Luxurious swimming pool</li>
                                <li>- Comprehensive health club</li>
                                <li>- Continental restaurant</li>
                                <li>- Baby-sitting service</li>
                                <li>- In-room dining service</li>
                                <li>- Barbecue terrace</li>
                                <li>- Residents’ Lounge</li>
                                <li>- Business Center services, including e-mail</li>
                                <li>- Children’s playroom</li>
                                <li>- Covered car park</li>
                                <li>- Limousine shuttle service</li>
                                <li>- Convenience store</li>
                                
                                
                            </ul>                       
                         </div>                     
                      </div>
                    </div>
                  </div>
                </div>

             {/* fdfdf */}
             {/* <div>
                
                  <Link href="/en/sakuraresidence">
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
        {/* sakura residence address */}
            <div className="font-sans font-light m-4" >          
                <p><strong> Address: </strong>  9 Inya Road, Block 10, Kamaryut Township, Yangon, Myanmar  <br/>
                <strong> Tel: </strong> (95 1) 525 001 <br/>
                <strong> Fax: </strong> (95 1) 525 002 <br/>
                <strong> E-mail:</strong><br/> <a href="mailto:sales@sakuraresidence.com.mm" className="hover:text-blue-500">sales@sakuraresidence.com.mm</a>&emsp;
                <a href="mailto:rsvn@sakuraresidence.com.mm" className="hover:text-blue-500"> rsvn@sakuraresidence.com.mm</a> <br/> </p><br/>
                
                
                {/* <div>
                <p className="font-bold uppercase text-sm"> 
                <Link href="http://www.sakura-residence-yangon.com/"><a className="hover:text-sky-400" target="_blank">WEB SITE</a></Link>&emsp;&emsp;
                <Link href="https://www.facebook.com/sakura.residence.yangon/"><a className="hover:text-sky-400" target="_blank">FACEBOOK</a></Link>
                </p>                 
                </div> */}
            </div>   

            <div>
                

            </div>

            {/* sakura residence address end*/}
      </div>
      </div>
      </div>
     
     
    </MainLayoutEn>
  )
}

export default sakuraresidence