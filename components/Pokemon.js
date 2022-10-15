import Link from "next/link";
import React from "react";
import Pokeball from "../img/pokeball.png";

const Pokemon = ({ monster }) => {
  return (
    <>
      <li className="list-none w-full cursor-pointer">
        <Link href={`/detail/` + monster.name}>
          <div
            className={`h-24 grid grid-cols-5 p-2 bg-rose-500 text-white rounded-xl justify-items-center items-center relative ${monster.types[0].type.name} sm:h-36`}
          >
            <div className="col-span-3 z-10">
              <h2 className="capitalize text-xs mb-2 font-bold sm:text-base">
                {monster.name}
              </h2>
              {monster.types.map((e) => (
                <p
                  className="text-[9px] mb-[3px] w-fit bg-slate-200 bg-opacity-30 px-3 rounded-full capitalize py-[1.2px] sm:text-sm"
                  key={e.type.name}
                >
                  {e.type.name}
                </p>
              ))}
            </div>
            <div className=" relative col-span-2 z-10 max-h-20 sm:max-h-28">
              <img
                className=" m-auto w-[50px] h-[50px] sm:h-[100px] sm:w-[100px]"
                src={monster.sprites}
                alt={monster.name}
              />
            </div>
            {/* <div className="absolute opacity-25 right-0 bottom-[-5px] w-full h-full">
                    <div className="relative w-[50px] h-[50px]  top-0 left-0">
                      <Image
                        objectFit="contain"
                        src={Pokeball}
                        alt="Pokeball"
                      />
                    </div>
                  </div> */}
          </div>
        </Link>
      </li>
    </>
  );
};

export default Pokemon;
