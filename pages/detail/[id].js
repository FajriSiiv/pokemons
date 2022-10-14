import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };
    getData();
    console.log(pokemon);
  }, []);

  return (
    <div className={`  h-  max-h-[1000px]`}>
      <button>
        <Link href={"/"}>Back</Link>
      </button>
      <div className="text-white flex justify-between items-center p-3">
        <div>
          <h2 className="font-bold text-xl capitalize tracking-wide mb-2">
            {pokemon.name}
          </h2>
          <div className="flex gap-x-2 text-xs capitalize">
            {pokemon.types.map((e, index) => (
              <p
                key={index}
                className="px-2 py-[2px] bg-slate-200 bg-opacity-30 rounded-full"
              >
                {e.type.name}
              </p>
            ))}
          </div>
        </div>
        <p className="font-bold">#0{pokemon.id}</p>
      </div>
      <div className="flex flex-col ">
        <div className="z-10">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="w-2/3 h-full object-contain mx-auto"
          />
        </div>
        <div className="bg-white h-[300px] mt-[-20px] rounded-t-3xl"></div>
      </div>
    </div>
  );
}
