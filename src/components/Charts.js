"use client";
import AreaChartPlot from "./AreaChartPlot";
import PieChart from "./PieChartPlot";
import DynamicconcertPie from "./DynamicconcertPie";
import DynamicConcertArea from "./DynamicConcertArea";

import AreaChartPlotBag from "./AreaChartPlotBag";
const Charts = () => {
  return (
    <>
      <section>
        <div className="flex m-4 gap-2">
          <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total returns</p>
              <p className="py-4 font-bold">$50,000 </p>
              <p className="text-green-300">+64.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 bg-gray-700 shadow rounded max-h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total sales</p>
              <p className="py-4 font-bold">$50,000 </p>
              <p className="text-green-300">+64.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-gray-700 shadow rounded max-h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total subscriptions</p>
              <p className="py-4 font-bold">$50,000 </p>
              <p className="text-green-300">+64.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-gray-700 shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total returns</p>
              <p className="py-4 font-bold ">50,000 </p>
              <p className="text-green-300">+64.5%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex my-4 px-4 gap-3">
        <div className="w-1/2 h-[320px] bg-gray-700 rounded">
          {" "}
          <DynamicConcertArea />
        </div>

        <div className="w-1/2 h-[300px] bg-gray-700 rounded">
          <DynamicconcertPie />
        </div>
      </section>

      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-500 rounded"></div>
        <div className=" w-1/3 h-[250px] bg-gray-500 rounded">
          {" "}
          <PieChart />
        </div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded">
          <AreaChartPlotBag />
        </div>
      </section>
    </>
  );
};

export default Charts;