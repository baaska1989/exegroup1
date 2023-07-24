import React from "react";
import MainLayoutEn from '../../layout/MainLayoutEn';
import LazyLoad from 'react-lazy-load';

const corporate = () => {
  return (
    <MainLayoutEn>
            <div className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundImage: 'url("/assets/img/mv-sm.jpg")' , backgroundColor: 'rgba(0, 0, 0, 0)',  height: 450}}>                  
                      <div className="flex justify-center items-center h-full">
                        <div>
                            <h2 className="font-bold text-4xl font-sans text-white uppercase">Corporate Profile</h2>                            
                        </div>
                      </div>      
              </div>


      <div className="flex flex-col mx-auto max-w-6xl py-16">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden"></div>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              height: "509.6px",
            }}
            width="100%"
          >
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "49.9341%" }} />
            </colgroup>
            <tbody>
              <tr style={{ height: "19.6px" }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                  style={{ height: "19.6px", textAlign: "left" }}
                >
                  Corporate Name
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4 bg-slate-200 leading-8"
                  style={{ height: "19.6px" }}
                >
                  EXE Corporation
                </td>
              </tr>
              <tr style={{ height: "58.8px" }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                  style={{ height: "58.8px", textAlign: "left" }}
                >
                  Address
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                  style={{ height: "58.8px" }}
                >
                  <p>
                    6F Sawada Kojimachi Bldg., 1-10-5 Kojimachi, Chiyoda-ku,
                    Tokyo 102-0083
                  </p>
                  <p>
                    Tel: (81) 3 3288 2371 / &nbsp;
                    <a
                    href="mailto:mail@exegroup.co.jp"
                    className="hover:text-blue-500"
                  >
                    mail@exegroup.co.jp
                  </a>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "19.6px" }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                  style={{ height: "19.6px", textAlign: "left" }}
                >
                  Establishment
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                  style={{ height: "19.6px" }}
                >
                  August 1991
                </td>
              </tr>
              <tr style={{ height: "19.6px" }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                  style={{ height: "19.6px", textAlign: "left" }}
                >
                  Capital
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                  style={{ height: "19.6px" }}
                >
                  Japanese Yen 99,000,000
                </td>
              </tr>
              <tr style={{ height: "19.6px" }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                  style={{ height: "19.6px", textAlign: "left" }}
                >
                  Business Philosophy
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                  style={{ height: "19.6px" }}
                >
                  Cultivation of Human resources
                </td>
              </tr>
              <tr style={{ height: "19.6px" }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                  style={{ height: "19.6px", textAlign: "left" }}
                >
                  Business Description
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                  style={{ height: "19.6px" }}
                >
                  Investments in Japan and Overseas center on Asia
                </td>
              </tr>
              <tr style={{ height: "39.2px" }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                  style={{ height: "39.2px", textAlign: "left" }}
                >
                  Employee Number
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                  style={{ height: "39.2px" }}
                >
                  15 （domestic）、600 （including affiliate company）
                </td>
              </tr>
              <tr style={{ height: "117.6px" }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                  style={{ height: "117.6px", textAlign: "left" }}
                >
                  Affiliated Companies
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                  style={{ height: "117.6px" }}
                >
                  EXE Sakura Tower, EXE Sakura Residence
                  <br />
                  Turquoise Finance (Ulaanbaatar)：Non-Bank Financial Institution
                  <br />
                  Olonlog EXE (Ulaanbaatar)：Olonlog EXE IT School&nbsp;
                </td>
              </tr>
              <tr style={{ height: 196 }}>
                <th
                  className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                  style={{ height: 196, textAlign: "left" }}
                >
                  Overseas Branches
                </th>
                <td
                  className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                  style={{ height: 196 }}
                >
                  <strong>Yangon Branch Office</strong>
                  <address>
                    #0505 Sakura Tower, 339 Bogyoke Aung San Road, <br />
                    Kyauktada Township, Yangon, Myanmar <br />
                    Tel: (95 1) 255 255 / Fax: (95 1) 255 258 /
                    stowersales@myanmar.com.mm
                  </address>
                  <strong>Ulaanbaatar Office (c/o Sanaa EXE LLC)</strong>
                  <address>
                    EXE Plaza, Tumurchnii Street7/1 <br />
                    Chingeltei District, Ulaanbaatar 15171, Mongolia <br />
                    Tel: (976) 99182674 / Email: &nbsp; <a
                    href="mailto:tf@exe.mn"
                    className="hover:text-blue-500"
                  >
                    tf@exe.mn
                  </a>
                  </address>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </MainLayoutEn>
  );
};

export default corporate;
