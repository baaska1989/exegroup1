import React from "react";
import MainLayoutEn from '../../layout/MainLayoutEn';
import LazyLoad from "react-lazy-load";


const greetings = () => {
  return (
    <MainLayoutEn>
          
              <div className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundImage: 'url("/assets/img/mv-sm.jpg")' , backgroundColor: 'rgba(0, 0, 0, 0)',  height: 450}}>                  
                      <div className="flex justify-center items-center h-full">
                        <div>
                            <h2 className="font-bold text-3xl font-sans text-white uppercase">Message from the CEO</h2>                            
                        </div>
                      </div>      
              </div>       
        

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto bg-white max-w-7xl md:py-16">
        
      <div className="w-full p-4 md:mx-auto md:ml-4 md:w-72 xl:w-full ">
        <img src="/assets/img/1657970132.jpg" loading="lazy" />
      </div>

      <div className="w-full p-4 md:col-span-2 md:px-16 lg:col-span-3 ">
        <p className="font-sans font-light leading-7 mt-4 ">
          Our world in this century is going through such instability that we
          have not experienced before. In the 20th Century, we witnessed the
          clash of imperialism against socialism, the cold war between US and
          USSR and the rise of Middle East countries’ influence backed by high
          oil prices. These tensions brought war and severe confrontations in
          the international scene, but on the other hand a certain stability was
          maintained with the power balance among the big countries.
          <br /> <br /> Since the birth of the 21st century, as a result of the
          changing power balance we are experiencing quite a new situation. The
          cycle of terrorism and local conflicts is recurring, and the
          ascendancy of emerging countries especially China is intensifying.
          Highly developed telecommunications networks have brought in the “Flat
          World”, and too much liquidity in the market is making the
          international financial system unstable and precipitating one
          financial crisis after another.
          <br /> <br /> Here in our country now, we have undergone a long
          economic slump after the bubble burst at the end of the last century,
          and Japan was transformed from a high economic growth country to a
          mature and low growth society. Aging and a low birth rate have brought
          about a decrease in population for the first time in this country’s
          history. Low consumption and fiscal imbalance have worsened and the
          low interest rate coupled with deflation are afflicting our economy.
          On top of that, the big March 2011 earthquake and the ensuing atomic
          accident have inflicted more burden on this country. I believe our
          country is now at the threshold of a new era and is calling for a big
          “change” from us.
        </p>
        <h2 className="font-serif text-2xl font-bold py-4"><em>Unique Investments</em></h2>
        <p className="font-sans font-light leading-7 mt-4 ">
        We, EXE were born on August 6th, 1991. Twenty years
        have passed since then, and as we were experiencing the turbulent last
        10 years of the 20th century and the first 10 years of the 21st century,
        we have been constantly moving forward as a boutique investment house
        adapting to the change of air and the trend of the times.
        </p>
        
        
        <h2 className="font-serif text-2xl font-bold py-4"><em>Change is Chance</em></h2>
        <p className="font-sans font-light leading-7 mt-4 "> 
        “Change is Chance” has been our guiding spirit through all this
        time. Our motto is not to shrink back from the changes of the times, but
        take to meet them head-on as business opportunities instead. We look
        carefully at what are needed in this society. We do not follow the
        fashion of “Now” but discern the trend of the “Future”. After making
        investments, we participate hands-on in the management of the companies
        and bring them up carefully like our children. That is the EXE
        investment style. 
        </p>
        
        <h2 className="font-serif text-2xl font-bold py-4"><em> Persistence to Human resource </em></h2>
       
        <p className="font-sans font-light leading-7 mt-4 ">
        This investment motto is materialized in the domestic and Asian projects introduced here. We have
        realized and are managing several projects in Myanmar, Mongolia and
        Israel, thereby helping in these countries development. 
        <br /> <br /> This investment
        policy is applied to our approach to human resources. We take investment
        in people as most important and meaningful capital and are always
        looking for good people, people who look for the change by themselves,
        people who have their own ideas and policies. We welcome those ambitious
        young people who are aiming to run their own companies in the future by
        using EXE as their stepping board. In order to support those young
        people we also have an overseas internship program to allow them to
        experience actual business operations. 
        <br /> <br />I am pleased to introduce to you
        this unique investment house, EXE Corporation, and trust that you will
        accord us your continued interest and patronage.
        </p>
        <p className="font-sans font-bold leading-7 mt-4 " > Hitoshi Tani </p>
        <p className="font-sans font-light" > CEO and President </p>
      </div>
    </div>
    </MainLayoutEn>
  );
};

export default greetings;
