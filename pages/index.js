import Head from "next/head";
import { useState } from "react";
import Pokemon from "../components/Pokemon";

export default function Home({ data, pokemons, descPokemon }) {
  const [filter, setFilter] = useState(descPokemon);

  const filterPoke = (pokeType) => {
    setFilter(descPokemon);

    if (pokeType === "delete") {
      setFilter(descPokemon);
    } else {
      let filterPoke = descPokemon
        .filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === pokeType)
        )
        .map((e) => {
          let newPoke = { ...e };

          return newPoke;
        });
      setFilter(filterPoke);
    }
  };

  return (
    <div className="py-4 md:max-w-[800px] mx-auto">
      <h1 className="font-bold px-2 mb-4 text-2xl md:text-5xl md:mb-10">
        Pokedex
      </h1>
      <div className="grid grid-cols-2 gap-1 px-2 sm:grid-cols-3">
        {filter &&
          filter.map((monster, index) => (
            <Pokemon monster={monster} key={index} />
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
