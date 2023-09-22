import React from "react";
import Chart from "./Chart";
import { useState } from "react";

function Home() {
  const [toggle, setToggle] = useState(0);
  const toggleTab = (index) => {
    return setToggle(index);
  };

  return (
    <>
      <div className="bg-center w-screen m-auto  lg:block xl:px-0  p-4">
        <div className="lg:grid max-w-8xl mx-auto  grid-cols-1  md:grid-cols-4  flex flex-col-reverse PageBG rounded-xl shadow-2xl ">
          <div className=" rounded-br-xl  lg:rounded-tr-xl   rounded-tr-none  lg:rounded-bl-none rounded-bl-xl    flex  justify-center items-center flex-col  px-4  md:px-12  bg-transparent ">
            <div className="  rounded-xl     flex  justify-center items-center flex-col w-full ">
              <div className=" w-full text-start my-4">
                <h1 className="sm:text-3xl text-2xl  md:text-4xl font-bold text-gray-900">
                  Rise/Fall
                </h1>
              </div>

              <div className="sm:grid w-full mx-auto  grid-cols-1  sm:grid-cols-1  flex flex-col   gap-1">
                <div className="grid  grid-cols-1 place-content-center items-center">
                  <div className="relative w-full min-w-[200px] h-16 my-2 flex justify-center items-center flex-row ">
                    <input
                      type="number"
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-md px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500"
                      placeholder=" "
                      onFocus={() => toggleTab(1)}
                      onBlur={() => toggleTab(0)}
                    />
                    <select
                      className={` right-0 bg-transparent ${
                        toggle === 1
                          ? "border-l-2 border-sky-500"
                          : "border border-gray-50"
                      } capitalize  h-full p-2 outline-none absolute`}
                    >
                      <option> Sec</option>
                      <option>Minute</option>
                      <option>Hour</option>
                    </select>
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[18px] text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                      Duration
                    </label>
                  </div>
                  <div className="relative w-full min-w-[200px] h-16 my-2 flex justify-center items-center flex-row ">
                    <input
                      type="number"
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-md px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500"
                      placeholder=" "
                      onFocus={() => toggleTab(2)}
                      onBlur={() => toggleTab(0)}
                    />
                    <span
                      className={` right-0 bg-transparent ${
                        toggle === 2
                          ? "border-l-2 border-sky-500"
                          : "border border-gray-50"
                      } capitalize  h-full p-2 outline-none absolute px-6 flex justify-center items-center`}
                    >
                      USDT
                    </span>
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[18px] text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                      Amount
                    </label>
                  </div>
                  <div className="relative w-full min-w-[200px] h-16 my-2 flex justify-center items-center flex-row ">
                    <input
                      type="number"
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-md px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500"
                      placeholder=" "
                      onFocus={() => toggleTab(3)}
                      onBlur={() => toggleTab(0)}
                    />
                    <span
                      className={` right-0 bg-transparent ${
                        toggle === 3
                          ? "border-l-2 border-sky-500"
                          : "border border-gray-50"
                      } capitalize  h-full p-2 outline-none absolute px-6 flex justify-center items-center`}
                    >
                      USDT
                    </span>
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[18px] text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                      Wallet
                    </label>
                  </div>
                  <div className="relative w-full min-w-[200px] h-16 my-2 flex justify-center items-center flex-row ">
                    <input
                      type="number"
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-md px-3 py-3 rounded-md border-blue-gray-200 focus:border-blue-500"
                      placeholder=" "
                      onFocus={() => toggleTab(4)}
                      onBlur={() => toggleTab(0)}
                    />
                    <span
                      className={` right-0 bg-transparent ${
                        toggle === 4
                          ? "border-l-2 border-sky-500"
                          : "border border-gray-50"
                      } capitalize  h-full p-2 outline-none absolute px-4 flex justify-center items-center`}
                    >
                      Percent
                    </span>
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[18px] text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                      Profit
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid w-full mx-auto  grid-cols-2       gap-2 my-4">
                <button className="border-2 border-gray-50 p-3 rounded-lg hover:bg-green-500 hover:text-white font-bold hover:border-none outline-none">
                  Rise
                </button>
                <button className="border-2 border-gray-50 p-3 rounded-lg hover:bg-red-500 hover:text-white font-bold hover:border-none outline-none">
                  Fall
                </button>
              </div>
            </div>
          </div>

          <div className=" rounded-tl-xl lg:rounded-tr-none rounded-tr-xl lg:rounded-bl-xl rounded-bl-none  col-span-3 flex   justify-center items-center flex-col space-x-4  ">
            <Chart />
          </div>
        </div>
        <div className="lg:grid max-w-8xl overflow-x-auto visible  grid-cols-1  md:grid-cols-2  my-3 PageBG rounded-xl shadow-2xl  ">
          <div className=" my-3 ">
            <h1 className="text-2xl font-bold text-white p-4 w-60 rounded-tr-xl rounded-tl-xl flex justify-center items-center bg-black/50">
              {" "}
              Order History
            </h1>
            <table>
              <thead className="text-md font-bold">
                <tr>
                  <th className="bg-black/50 text-white py-3">Date</th>

                  <th className="bg-black/50 text-white py-3">Rise/Fall</th>
                  <th className="bg-black/50 text-white py-3">Amount</th>
                  <th className="bg-black/50 text-white py-3">Profit</th>
                  <th className="bg-black/50 text-white py-3">Result</th>
                  <th className="bg-black/50 text-white py-3"> Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className=" py-1 hover:bg-black/20">Date</td>

                  <td className=" py-1 hover:bg-black/20">Rise/Fall</td>
                  <td className=" py-1 hover:bg-black/20">Amount</td>
                  <td className=" py-1 hover:bg-black/20">Profit</td>
                  <td className=" py-1 hover:bg-black/20">Result</td>
                  <td className=" py-1 hover:bg-black/20"> Status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
