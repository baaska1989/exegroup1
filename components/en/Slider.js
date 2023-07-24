import React from 'react'

const Slider = () => {
  return (
    <div>
        <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel relative" data-bs-ride="carousel">
  {/* Indicators */}
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button data-bs-target="#carouselDarkVariant" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button data-bs-target="#carouselDarkVariant" data-bs-slide-to={1} aria-label="Slide 1" />
    <button data-bs-target="#carouselDarkVariant" data-bs-slide-to={2} aria-label="Slide 1" />
  </div>
  {/* Inner */}
  <div className="carousel-inner relative w-full overflow-hidden">
    {/* Single item */}
    <div className="carousel-item active relative float-left w-full">
      <img src="/assets/img/mv.jpg" className="block w-full" alt="Motorbike Smoke" />
      <div className="carousel-caption hidden md:block absolute text-left absolute ">
        <h5 className="text-sm sm:text2xl md:text-4xl xl:text-5xl 2xl:text-6xl md:mb-0 md:pb-4 md:max-w-3xl text-white">Every market has investment opportunities</h5>
        {/* <p className="text-sm md:text-xl md:mb-24 sm:pb-8 md:pb-96" >Lorem ipsum dolor sit amet adipiscing consectetur adipiscing elit .</p> */}
      </div>
    </div>
    {/* Single item */}
    <div className="carousel-item relative float-left w-full">
      <img src="/assets/img/mv2.jpg" className="block w-full" alt="Mountaintop" />
      <div className="carousel-caption hidden md:block absolute text-left ">
      <h5 className="text-sm sm:text2xl md:text-4xl xl:text-5xl 2xl:text-6xl md:mb-0 md:pb-4 md:max-w-3xl text-white">Every market has investment opportunities</h5>
        {/* <p className="text-sm md:text-xl md:mb-24 sm:pb-8 md:pb-96" >Lorem ipsum dolor sit amet adipiscing consectetur adipiscing elit .</p> */}
      </div>
    </div>
    {/* Single item */}
    <div className="carousel-item relative float-left w-full">
      <img src="/assets/img/mv3.jpg" className="block w-full" alt="Woman Reading a Book" />
      <div className="carousel-caption hidden md:block absolute text-left">
      <h5 className="text-sm sm:text2xl md:text-4xl xl:text-5xl 2xl:text-6xl md:mb-0 md:pb-4 md:max-w-3xl text-white">Every market has investment opportunities</h5>
        {/* <p className="text-sm md:text-xl md:mb-24 sm:pb-8 md:pb-96" >Lorem ipsum dolor sit amet adipiscing consectetur adipiscing elit .</p> */}
      </div>
    </div>
  </div>
  {/* Inner */}
  {/* Controls */}
  <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselDarkVariant" data-bs-slide="prev">
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselDarkVariant" data-bs-slide="next">
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



    </div>
  )
}

export default Slider