import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const Stats = ({ stats }) => {
  return (
    <div key={stats.stats} className="w-full text-sm sm:text-base md:text-lg">
      {stats.stats.map((e, i) => (
        <div
          className="grid grid-cols-5 capitalize mb-2 sm:mb-3 md:mb-4"
          key={i}
        >
          <h2 className="col-span-2 font-medium ">
            {e.stat.name.includes("special-")
              ? `Sp.${e.stat.name.split("-")[1]}`
              : e.stat.name}
          </h2>
          <div className="flex flex-nowrap w-full items-center gap-x-2 col-span-3">
            <p className="">{e.base_stat}</p>
            <div className="w-full ">
              <ProgressBar
                completed={e.base_stat}
                height="5px"
                customLabel=" "
                bgColor="#dc2f02"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
