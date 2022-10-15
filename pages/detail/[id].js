import React, { useEffect, useState } from "react";
import Evolution from "../../components/Evolution";
import Moves from "../../components/Moves";
import About from "../../components/About";
import Stats from "../../components/Stats";

export default function Pokemon({ data }) {
  const [pokemon, setPokemon] = useState(data);
  const [active, setActive] = useState("About");
  const [evo, setEvo] = useState([]);
  const [loading, setLoading] = useState(true);

  const lists = ["About", "Base Stats", "Evolution", "Moves"];

  const activeClick = (e) => {
    setActive(e);
  };

  const url = pokemon.forms[0].url;

  useEffect(() => {
    setLoading(true);
    async function getData(urls) {
      setLoading(false);
      await fetch(urls)
        .then((res) => res.json())
        .then((data) => setEvo(data));
    }

    getData(url);
  }, [url]);

  return (
    <div
      className={` ${pokemon.types[0].type.name} max-h-[1000px] max-w-[800px] mx-auto sm:max-h-[2000px] `}
    >
      <div className="text-white flex justify-between items-center p-3">
        <div>
          <h2 className="font-bold text-xl capitalize tracking-wide mb-2 sm:text-3xl">
            {pokemon.name}
          </h2>
          <div className="flex gap-x-2 text-xs capitalize">
            {pokemon.types.map((e, index) => (
              <p
                key={index}
                className="px-2 py-[2px] bg-slate-200 bg-opacity-30 rounded-full sm:text-lg"
              >
                {e.type.name}
              </p>
            ))}
          </div>
        </div>
        <p className="font-bold sm:text-2xl">#0{pokemon.id}</p>
      </div>
      <div className="flex flex-col">
        <div className="z-10">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="w-[210px] h-[270px] object-contain mx-auto"
          />
        </div>
        <div className="bg-white h-[300px] mt-[-20px] rounded-t-3xl py-6 px-4 sm:mx-10 sm:h-full">
          <div className="flex text-sm justify-between font-medium  sm:text-lg md:text-xl">
            {lists.map((e) => (
              <div
                key={e}
                onClick={() => activeClick(e)}
                className={`transition-all duration-300 text-black text-opacity-50 cursor-pointer bg-transparent ${
                  active == e && "text-opacity-100"
                }`}
              >
                {e}
              </div>
            ))}
          </div>
          <div className="mt-5 ">
            {active === "About" && <About data={pokemon} />}
            {active === "Base Stats" && <Stats stats={pokemon} />}
            {active === "Evolution" && (
              <Evolution evolution={evo} loading={loading} />
            )}
            {active === "Moves" && <Moves move={pokemon.moves} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.id}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
