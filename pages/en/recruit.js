import React from "react";
import MainLayoutEn from '../../layout/MainLayoutEn';
import LazyLoad from 'react-lazy-load';

const recruit = () => {
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
                Recruit
              </h2>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center pt-4 font-sans ">
          <h2 className="mx-auto text-center p-2 font-bold text-md">
            The latest recruitment information of EXE Corporation
          </h2>
          <p className="mx-auto text-center font-light text-md font-sans">
            EXE has operated a number of projects in Myanmar, Mongolia and we
            are hiring new graduates and mid-career employees at any time.
          </p>
        </div>
        <div className="flex flex-col mx-auto max-w-6xl bg-slate-50 my-8 p-8">
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
                      Occupational category of recruitment
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      Regular position
                    </td>
                  </tr>
                  <tr style={{ height: "58.8px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ height: "58.8px", textAlign: "left" }}
                    >
                      Details of the occupational category of recruitment
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                      style={{ height: "58.8px" }}
                    >
                      Project management tasks <br />
                      You will be in charge of all task related to the office
                      buildings, service apartments, hotels, and restaurants
                      that we own in Myanmar.
                      <br />
                      *Sales, engineering, accounting, related to human
                      resources and general affairs, and so on〈Sakura Tower〉
                      <br />
                      Myanmar’s (Yangon’s) landmark tower <br />
                      Houses the offices of many Japanese corporations and the
                      rooftop bar 「Yangon Yangon」on the top floor is the
                      origin of entertainment in Myanmar. <br />
                      〈Sakura Residence〉
                      <br />
                      An apartment complex that boasts the largest scale in
                      Myanmar (Yangon) and is targeted at long-term tenants
                    </td>
                  </tr>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      Employment system
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      Permanent employee
                    </td>
                  </tr>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      Entry/recruitment method
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      Review of documents and interview/internship training at
                      the main office in Tokyo (or Yangon) for one week, after
                      which the final verdict will be released
                    </td>
                  </tr>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      Screening method and focus
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      Someone interested in Asia. Someone who loves Asia.
                      Someone who is courageous and amiable. We welcome people
                      who are interested in Burmese.
                    </td>
                  </tr>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      Documents to submit and other screenings
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      Resume, CV, and a copy of TOEIC official verification
                    </td>
                  </tr>
                  <tr style={{ height: "39.2px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "39.2px", textAlign: "left" }}
                    >
                      Recruitment contact details
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                      style={{ height: "39.2px" }}
                    >
                      EXE Corpotation <br />
                      Recruitment staff: Shota Nakatsuka
                      <br />
                      Email: shota.nakatsuka@careerart.co.jp
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ textAlign: "left" }}
                    >
                      Initial salary
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                      Monthly salary: at least 220,000 yen *to be discussed
                      depending on experience
                    </td>
                  </tr>
                  <tr>
                    <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8">
                      Salary raise, bonus, and benefits
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8">
                      Transport allowance (up to 10,000 yen), overtime
                      allowance, business trip allowance, and bonus
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ textAlign: "left" }}
                    >
                      Work location
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                      Myanmar (Yangon) *There might also be opportunities to
                      work in Japan in the future.
                    </td>
                  </tr>
                  <tr>
                    <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8 text-left">
                      Working hours
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8">
                      Office 9:00 a.m. to 6:00 p.m., hotel and residence 5:30
                      a.m. to 11:00 p.m. (shift system)
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ textAlign: "left" }}
                    >
                      Employee benefits
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                      Reward system based on number of years of duty,
                      company-owned residence, shuttle
                    </td>
                  </tr>
                  <tr>
                    <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8 text-left">
                      Holidays
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8 ">
                      Two days per week (Saturday and Sunday), public holidays,
                      year-end period, summer vacation *Subject to change during
                      event periods
                    </td>
                  </tr>

                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      Education and training
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      Support system available if necessary
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr />
              <p className="m-4 ">
                ※ Documents Not Returnable. <br /> ※ Contact us if any
                questions.
              </p>
            </div>
          </div>
        </div>
      </MainLayoutEn>
    </div>
  );
};

export default recruit;
