import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pokeball from "../img/pokeball.png";

export default function Home({ data, pokemons, descPokemon }) {
  const [filter, setFilter] = useState(descPokemon);

  const filtrar = (elTipo) => {
    setFilter(descPokemon);

    if (elTipo === "delete") {
      setFilter(descPokemon);
    } else {
      let filterPoke = descPokemon
        .filter((pokemon) =>
          pokemon.types.some((tipo) => tipo.type.name === elTipo)
        )
        .map((tem2) => {
          let nuevosTem = { ...tem2 };

          return nuevosTem;
        });
      setFilter(filterPoke);
    }
  };

  return (
    <div className="py-4 md:max-w-[900px] mx-auto">
      <h1 className="font-bold px-2 mb-4 text-2xl md:text-5xl md:mb-10">
        Pokedex
      </h1>
      <div className="grid grid-cols-2 gap-1 px-2 sm:grid-cols-3">
        {filter &&
          filter.map((monster, index) => (
            <li key={index} className="list-none w-full cursor-pointer">
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
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/type");
  const data = await res.json();

  const getPokemons = async (pokemon) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}?limit=30&offset=0/`
    );

    const data = await response.json();

    return data;
  };
  let pokemons = [];
  for (let i = 1; i <= 30; i++) {
    let data = await getPokemons(i);
    pokemons.push(data);
  }

  let descPokemon = pokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };
  });

  return {
    props: {
      data: data.results,
      descPokemon,
    },
  };
}
